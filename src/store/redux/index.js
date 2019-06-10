/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import {
  getFirebase,
  reactReduxFirebase,
  firebaseReducer
} from 'react-redux-firebase';

// App reducers

import loginInfoReducer from './auth/authReducer';
import base from './base/baseReducer';
import firebaseConfig from '../../common/firebase';
import player from './player/playerReducer';
import layout from './layout/layoutReducer';
import hotspots from './hotspot/hotspotReducer';
import overlays from './overlay/overlayReducer';
import productReducer from './product/productReducer';

// App middleware
import appMiddleware from './middlewares/appMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    loginInfo: loginInfoReducer,
    base,
    firebase: firebaseReducer,
    layout,
    hotspots,
    overlays,
    player,
    products: productReducer
  }),
  composeEnhancers(
    reactReduxFirebase(firebaseConfig, { attachAuthIsReady: true }),
    applyMiddleware(
      reduxThunk.withExtraArgument({ getFirebase }),
      appMiddleware
    )
    // redux binding for firebase
  )
);
// configureAxios(axios, store);
export default store;
