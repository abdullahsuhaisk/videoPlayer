import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

import firebase from '../../common/firebase';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';
import { WIDTH, HEIGHT } from '../../common/constants';
// import { customFetch } from './customfetch';

const authKey = 'vb--auth-token';

firebase.auth().onIdTokenChanged(async (user) => {
  if (user) {
    const token = await user.getIdToken();
    // console.log(user.refreshToken);
    localStorage.setItem(authKey, token);
    localStorage.setItem('refToken', user.refreshToken);
  } else {
    localStorage.removeItem(authKey);
  }
});

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_CONSUMER_URI
  // fetch: customFetch
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(authKey);

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const cache = new InMemoryCache();
const clientInit = new ApolloClient({
  connectToDevTools: true,
  cache,
  link: authLink.concat(httpLink),
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
      prodLinkId: null
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
