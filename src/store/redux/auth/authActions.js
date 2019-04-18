import { buildActionCreator } from '../actionUtils';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_SUCCESS = 'LOGIN_SUCCES';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_USER_FAIL';

export const SIGNOUT = 'SIGNOUT';
export const SIGNOUT_ERROR = 'SIGNOUT_ERROR';
export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';

export const RESET_ERRORS = 'RESET_ERRORS';

const loginStart = buildActionCreator(LOGIN_USER);
const loginSuccess = buildActionCreator(LOGIN_SUCCESS);
const loginError = buildActionCreator(LOGIN_ERROR);
const signoutSuccess = buildActionCreator(SIGNOUT_SUCCESS);
const signoutError = buildActionCreator(SIGNOUT_ERROR);
const signout = buildActionCreator(SIGNOUT);
const resetError = buildActionCreator(RESET_ERRORS);

const userRegistrationStart = buildActionCreator(REGISTER_USER);
const userRegistrationFail = buildActionCreator(REGISTER_FAIL);
const userRegistrationSuccess = buildActionCreator(REGISTER_SUCCESS);

export const Actions = {
  loginStart,
  loginSuccess,
  loginError,
  signout,
  signoutSuccess,
  signoutError,
  resetError,
  userRegistrationStart,
  userRegistrationFail,
  userRegistrationSuccess
};
