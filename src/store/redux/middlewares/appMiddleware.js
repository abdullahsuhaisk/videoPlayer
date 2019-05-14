import { actionTypes as firebaseActions } from 'react-redux-firebase';

export default (store) => (next) => async (action) => {
  if (action.type === firebaseActions.LOGIN) {
    // next(action);
    // return store.dispatch();
  }
  if (action.type === firebaseActions.AUTH_EMPTY_CHANGE) {
    // next(action);
    // return store.dispatch();
  }
  return next(action);
};
