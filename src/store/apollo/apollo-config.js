import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import firebase from '../../common/firebase';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';
import { WIDTH, HEIGHT } from '../../common/constants';

const authKey = 'vb--auth-token';

firebase.auth().onIdTokenChanged(async (user) => {
  if (user) {
    const token = await user.getIdToken();
    localStorage.setItem(authKey, token);
  } else {
    localStorage.removeItem(authKey);
  }
});

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_CONSUMER_URI
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
const client = new ApolloClient({
  connectToDevTools: true,
  cache,
  link: authLink.concat(httpLink),
  typeDefs,
  resolvers
});

const setInitialCache = () => {
  const data = {
    player: {
      __typename: 'Player',
      isReady: false,
      isStarted: false,
      playingState: 'PAUSED',
      currentTime: 0,
      seekTo: -1,
      overlayContainerClassName: ''
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
    isLoginFormShowing: false,
    isRegisterFormShowing: false,
    isForgotPasswordFormShowing: false,
    productIdInDetails: null,
    navigationDialogShowing: false
  };

  cache.writeData({ data });
};

setInitialCache();

client.onResetStore(() => setInitialCache());

export { client };
