/* eslint-disable default-case */
/* eslint-disable no-restricted-syntax */
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
// import { setContext } from 'apollo-link-context';
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
  await firebase.auth().onIdTokenChanged(async (user) => {
    if (user) {
      const token = await user.getIdToken(true);
      console.log('Token Service worked and got new accessRefresh');
      // console.log(token);
      // console.log(user.refreshToken);
      localStorage.setItem(authKey, token);
      localStorage.setItem('refToken', user.refreshToken);
    } else {
      localStorage.removeItem(authKey);
      localStorage.removeItem('refToken');
    }
  });

  localStorage.setItem('TokenTime', setTime());
};

const setTime = () => {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  // console.log(hour * 60 + minute);
  return hour * 60 + minute;
};

const TokenService = async () => {
  if (
    localStorage.getItem('TokenTime') &&
    setTime() - localStorage.getItem('TokenTime') > 59
  ) {
    await getNewToken();
  }
  return null;
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
        switch (err.code) {
          case 'ERR001':
            return null;
          case 'ERR005':
            // error code is set to UNAUTHENTICATED
            // when AuthenticationError thrown in resolver
            // modify the operation context with a new token
            // firebase.auth().onIdTokenChanged(async (user) => {
            //   if (user) {
            //     const token = await user.getIdToken(true);
            //     const oldHeaders = operation.getContext().headers;
            //     operation.setContext({
            //       headers: {
            //         ...oldHeaders,
            //         authorization: token ? `Bearer ${token}` : ''
            //       }
            //     });
            //   } else {
            //     localStorage.removeItem(authKey);
            //     localStorage.removeItem('refToken');
            //   }
            // });
            // // retry the request, returning the new observable
            // console.log(operation);
            return forward(operation);
          default:
            console.log(err.code);
        }
      }
    }
    if (networkError && networkError.statusCode === 401) {
      // eslint-disable-next-line
      console.log(networkError);
      firebase.auth().onIdTokenChanged(async (user) => {
        if (user) {
          const token = await user.getIdToken(true);
          const oldHeaders = operation.getContext().headers;
          operation.setContext({
            headers: {
              ...oldHeaders,
              authorization: token ? `Bearer ${token}` : ''
            }
          });
        } else {
          localStorage.removeItem(authKey);
          localStorage.removeItem('refToken');
        }
      });
    } else if (networkError) console.log(`[Network error]: ${networkError}`);
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
  TokenService();
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
  new RetryLink({
    delay: {
      initial: 300,
      max: Infinity,
      jitter: true
    },
    attempts: {
      max: 5,
      retryIf: (error, _operation) => !!error
    }
  }),
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
      currentQuality: 1,
      // TODO: Move to shopping cart here
      isSettingMenuOpen: false,
      selectedQuality: 'Auto'
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
