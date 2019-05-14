import { combineReducers } from 'redux';
import { actionTypes } from './baseActions';

const InitialState = {};

const vpEntitiesReducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionTypes.VIDEOPLAYER_INIT:
      return {
        ...action.payload
      };
    default:
      return state;
  }
};

const initialState = {
  status: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ASYNC_OP_START:
      return {
        ...state,
        status: 'processing'
      };
    case actionTypes.ASYNC_OP_END:
      return {
        ...state,
        status: action.payload.status
      };

    case actionTypes.ASYNC_OP_RESET_STATUS:
      return {
        ...state,
        status: ''
      };
    default:
      return state;
  }
}

export default combineReducers({
  asynOperation: reducer,
  videoPlayerEntities: vpEntitiesReducer
});
