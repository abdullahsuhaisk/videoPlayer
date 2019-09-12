/* eslint-disable default-case */
/* eslint-disable no-restricted-syntax */
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { RetryLink } from 'apollo-link-retry';

import firebase from '../../common/firebase';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';
import { WIDTH, HEIGHT } from '../../common/constants';
// import { customFetch } from './customfetch';

const authKey = 'vb--auth-token';

const getNewToken = async () => {
  console.log('Token Service worked');
  firebase.auth().onIdTokenChanged(async (user) => {
    if (user) {
      const token = await user.getIdToken(true);
      // console.log(user.refreshToken);
      localStorage.setItem(authKey, token);
      localStorage.setItem('refToken', user.refreshToken);
    } else {
      localStorage.removeItem(authKey);
    }
  });
};

getNewToken();

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_CONSUMER_URI
  // fetch: customFetch
});

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    console.log(graphQLErrors);
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        console.log(err.code);
        switch (err.code) {
          case 'ERR001':
          case 'ERR005':
            // error code is set to UNAUTHENTICATED
            // when AuthenticationError thrown in resolver
            // modify the operation context with a new token
            getNewToken().then(() => {
              const token = localStorage.getItem(authKey);
              const oldHeaders = operation.getContext().headers;
              operation.setContext({
                headers: {
                  ...oldHeaders,
                  authorization: token ? `Bearer ${token}` : ''
                }
              });
            });
            // retry the request, returning the new observable
            console.log(operation);
            // window.location.reload();
            return forward(operation);
        }
      }
    }

    if (networkError) console.log(`[Network error]: ${networkError}`);
  }
);

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem(authKey);

//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : ''
//     }
//   };
// });

const authLink = new ApolloLink((operation, forward) => {
  // getNewToken();
  const token = localStorage.getItem(authKey);
  operation.setContext(({ headers }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }));
  return forward(operation);
});
const cache = new InMemoryCache();
const link = ApolloLink.from([
  authLink,
  errorLink,
  // new RetryLink({
  //   delay: {
  //     initial: 300,
  //     max: Infinity,
  //     jitter: true
  //   },
  //   attempts: {
  //     max: 5,
  //     retryIf: (error, _operation) => !!error
  //   }
  // }),
  httpLink
]);
const clientInit = new ApolloClient({
  connectToDevTools: true,
  link,
  cache,
  typeDefs,
  resolvers
});

const setInitialCache = () => {
  const data = {
    template: {
      __typename: 'Template',
      whichProductListrender: 1,
      whichTabItemIsRendering: 'productInThisScene',
      tabItems: {
        __typename: 'TABITEM'
      }
    },
    player: {
      videoPlayer: null,
      __typename: 'Player',
      isReady: false,
      isStarted: false,
      playingState: 'READY',
      currentTime: 0,
      seekTo: -1,
      overlayContainerClassName: '',
      prodLinkId: null,
      prodLinkUniqueId: null
    },
    layout: {
      __typename: 'Layout',
      width: WIDTH,
      height: HEIGHT,
      safeArea: {
        __typename: 'SafeArea',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },
    whichTabItemIsRendering: 'productInThisScene',
    isLoginFormShowing: false,
    isRegisterFormShowing: false,
    isShareModelShowing: false,
    isForgotPasswordFormShowing: false,
    productIdInDetails: null,
    navigationDialogShowing: false,
    isProfileOpen: false,
    isAddWishListOpen: false,
    productId: null,
    consumer: {
      __typename: 'ConsumerType',
      id: 0,
      cart: {
        __typename: 'CartType',
        items: [],
        totalProductCount: 0,
        totalPrices: []
      }
    }
  };
  cache.writeData({ data });
};

setInitialCache();

clientInit.onResetStore(() => setInitialCache());

export { clientInit };
