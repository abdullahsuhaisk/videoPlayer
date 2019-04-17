/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import {
  getFirebase,
  reactReduxFirebase,
  firebaseReducer
} from 'react-redux-firebase';
import user from './auth/authReducer';
import base from './base';
import firebaseConfig from '../../interactive-overlay/common/firebase';

// DONE: @lamine -> eslint config
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    user,
    base,
    firebase: firebaseReducer
  }),
  composeEnhancers(
    applyMiddleware(reduxThunk.withExtraArgument({ getFirebase })),
    reactReduxFirebase(firebaseConfig, { attachAuthIsReady: true }) // redux binding for firebase
  )
);
export default store;
