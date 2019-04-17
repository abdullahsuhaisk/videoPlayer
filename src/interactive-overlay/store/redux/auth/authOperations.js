import { Actions } from './authActions';
import http, { setHttpHeader } from '../../../utils/http';
import { InjectSelectedOperations } from '../actionUtils';

export const login = (credetentials) => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      const res = await firebase
        .auth()
        .signInWithEmailAndPassword(
          credetentials.email,
          credetentials.password
        );
      console.log(res);
      // When we logged in, we must send an event to service.
      const AUTH_TOKEN = res.user.ra;
      dispatch(Actions.loginSuccess(res));
      setHttpHeader('Authorization', `Bearer ${AUTH_TOKEN}`);

      try {
        await http.post('events', { event: 'login' });
      } catch (err) {
        console.log(err);
      }
      dispatch(Actions.resetError());
    } catch (error) {
      dispatch(Actions.loginError(error.code));
    }
  };
};

export const createUserWithEmailAndPasswordFirebase = (credentials) => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(
          credentials.email,
          credentials.password
        );
    } catch (error) {
      dispatch(Actions.userRegistrationFail(error.code));
    }
  };
};

export const loginWithGoogle = async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  firebase.auth().useDeviceLanguage();
  try {
    const res = await firebase.auth().signInWithPopup(provider);
    const AUTH_TOKEN = res.user.ra;
    setHttpHeader('Authorization', `Bearer ${AUTH_TOKEN}`);
  } catch (error) {
    dispatch(Actions.loginError(error.code));
  }
};

export const facebookLogin = async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  const provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope('user_birthday');
  // firebase.auth().languageCode = 'fr_FR';
  firebase.auth().useDeviceLanguage();
  provider.setCustomParameters({ display: 'popup' });
  try {
    const res = await firebase.auth().signInWithPopup(provider);
    const AUTH_TOKEN = res.user.ra;
    setHttpHeader('Authorization', `Bearer ${AUTH_TOKEN}`);
  } catch (error) {
    dispatch(Actions.loginError(error.code));
  }
};

export const signout = async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  try {
    console.log('called');
    await firebase.auth().signOut();
    dispatch(Actions.signoutSuccess());
  } catch (error) {
    dispatch(Actions.signoutError(error.code));
  }
};

export const resetErrors = () => (dispatch) => dispatch(Actions.resetError());

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => dispatch(login(credentials)),
    createUserWithEmailAndPassword: (credentials) =>
      dispatch(createUserWithEmailAndPasswordFirebase(credentials)),
    loginWithGoogle: () => dispatch(loginWithGoogle),
    loginWithFacebook: () => dispatch(facebookLogin),
    signOut: () => dispatch(signout),
    facebookLogin: () => dispatch(facebookLogin),
    registerWithEmailAndPassword: (credentials) =>
      dispatch(createUserWithEmailAndPasswordFirebase(credentials)),
    resetErrors: () => dispatch(Actions.resetError()),
    google: () => dispatch(loginWithGoogle),
    facebook: () => dispatch(facebookLogin)
  };
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    user: state.user
  };
};

export const InjectAuthOperations = InjectSelectedOperations({
  mapStateToProps,
  mapDispatchToProps
});
