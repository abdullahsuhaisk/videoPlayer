import {
  REGISTER_USER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SIGNOUT,
  SIGNOUT_ERROR,
  SIGNOUT_SUCCESS,
  RESET_ERRORS
} from './authActions';
/* AUTH */
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_SUCCESS = 'LOGIN_SUCCES';
export const LOGIN_ERROR = 'LOGIN_ERROR';

const userInitialState = {
  user: null,
  error: null
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case REGISTER_FAIL:
    case SIGNOUT_ERROR: {
      return { ...state, error: action.payload };
    }
    case RESET_ERRORS:
    case SIGNOUT_SUCCESS: {
      return userInitialState;
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        loginStatus: 'error',
        error: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
