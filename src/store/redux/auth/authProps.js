import { InjectProps } from '../propsUtils';
import { Actions } from './authActions';
import {
  login,
  createUserWithEmailAndPasswordFirebase,
  loginWithGoogle,
  facebookLogin,
  signout
} from './authOperations';

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
    facebook: () => dispatch(facebookLogin),
    onShowLogin: (show) => dispatch(Actions.onShowLogin(show)),
    onShowRegister: (show) => dispatch(Actions.onShowRegister(show)),
    onShowForgotPassword: (show) => dispatch(Actions.onShowForgotPassword(show))
  };
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    loginInfo: state.loginInfo,
    loginStatus: state.loginInfo.loginStatus,
    showLogin: state.loginInfo.showLogin,
    showRegister: state.loginInfo.showRegister,
    showForgotPassword: state.loginInfo.showForgotPassword
  };
};

// const NoProps = props => ({});

// const defaultSelectors = Object.create(null);

export const InjectAuthProps = InjectProps(
  {
    mapStateToProps,
    mapDispatchToProps
  },
  'InjectAuthProps'
);
