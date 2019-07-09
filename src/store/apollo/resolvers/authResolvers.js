import firebase from '../../../common/firebase';

// TODO: adjust user info cache from consumer, not the firebase
const authResolvers = {
  Query: {
    isLoggedIn: () => {
      return firebase.auth().currentUser !== null;
    },
    userInfo: () => {
      const { currentUser } = firebase.auth();

      if (!currentUser) {
        return null;
      }

      return {
        __typename: 'UserInfo',
        email: currentUser.email,
        displayName: currentUser.displayName,
        avatarUrl: currentUser.photoURL
      };
    }
  },
  Mutation: {
    login: async (_, { email, password }, { cache }) => {
      try {
        const { user } = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        const userInfo = {
          __typename: 'UserInfo',
          email: user.email,
          displayName: user.displayName,
          avatarUrl: user.photoURL
        };

        cache.writeData({ data: { userInfo, isLoggedIn: true } });

        return userInfo;
      } catch (error) {
        console.log(error);
      }

      return null;
    },
    loginWithGoogle: async (_, __, { cache }) => {
      try {
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

        const { user } = await firebase.auth().signInWithPopup(provider);
        const userInfo = {
          __typename: 'UserInfo',
          email: user.email,
          displayName: user.displayName,
          avatarUrl: user.photoURL
        };

        cache.writeData({ data: { userInfo, isLoggedIn: true } });
        return userInfo;
      } catch (error) {
        console.log(error);
      }

      return null;
    },
    loginWithFacebook: async (_, __, { cache }) => {
      try {
        const provider = new firebase.auth.FacebookAuthProvider();
        provider.addScope('user_birthday');

        const { user } = await firebase.auth().signInWithPopup(provider);
        const userInfo = {
          __typename: 'UserInfo',
          email: user.email,
          displayName: user.displayName,
          avatarUrl: user.photoURL
        };

        cache.writeData({ data: { userInfo, isLoggedIn: true } });
        return userInfo;
      } catch (error) {
        console.log(error);
      }

      return null;
    },
    logout: async (_, __, { cache }) => {
      try {
        await firebase.auth().signOut();
        cache.writeData({ data: { userInfo: null, isLoggedIn: false } });
      } catch (error) {
        console.log(error);
      }

      return null;
    },
    register: async (_, { email, password }, { cache }) => {
      try {
        const { user } = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        const userInfo = {
          __typename: 'UserInfo',
          email: user.email,
          displayName: user.displayName,
          avatarUrl: user.photoURL
        };

        cache.writeData({ data: { userInfo, isLoggedIn: true } });
        return userInfo;
      } catch (error) {
        console.log(error);
      }

      return null;
    },
    sendPasswordResetEmail: async (_, { email }, { cache }) => {
      try {
        await firebase.auth().sendPasswordResetEmail(email);
        cache.writeData({
          data: {
            isForgotPasswordFormShowing: false
          }
        });
      } catch (error) {
        console.log(error);
      }

      return null;
    }
  }
};

export { authResolvers };
