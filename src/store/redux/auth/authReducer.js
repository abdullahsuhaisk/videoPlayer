import {
  REGISTER_FAIL,
  SIGNOUT_ERROR,
  SIGNOUT_SUCCESS,
  RESET_ERRORS,
  SHOW_LOGIN,
  SHOW_REGISTER,
  SHOW_FORGOT_PASSWORD
} from './authActions';
/* AUTH */
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_SUCCESS = 'LOGIN_SUCCES';
export const LOGIN_ERROR = 'LOGIN_ERROR';

const loginInitialState = {
  errorCode: null,
  loginStatus: null,
  hasError: null,
  errorMessage: null,
  showLogin: false,
  showRegister: true,
  showForgotPassword: false
};

const loginReducer = (state = loginInitialState, action) => {
  switch (action.type) {
    case REGISTER_FAIL:
    case SIGNOUT_ERROR: {
      return {
        ...state,
        errorCode: action.payload.code,
        errorMessage: action.payload.message
      };
    }

    case LOGIN_ERROR: {
      return {
        ...state,
        loginStatus: 'error',
        hasError: true,
        errorMessage: action.payload.message,
        errorCode: action.payload.code
      };
    }
    case LOGIN_SUCCESS: {
      return {
        loginStatus: 'loggedIn',
        hasError: false,
        errorMessage: null,
        errorCode: null
      };
    }
    case RESET_ERRORS:
    case SIGNOUT_SUCCESS: {
      const payload = action.payload || {};
      return { ...loginInitialState, ...payload };
    }
    case SHOW_LOGIN: {
      return { ...state, showLogin: action.payload };
    }
    case SHOW_REGISTER: {
      return { ...state, showRegister: action.payload };
    }
    case SHOW_FORGOT_PASSWORD: {
      return { ...state, showForgotPassword: action.payload };
    }
    default:
      return state;
  }
};

export default loginReducer;
