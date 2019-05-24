import { combineReducers } from 'redux';
import { actionTypes } from './overlayActions';

const initialState = {
  'overlay-1': {
    templateId: 12123,
    type: 'login',
    pause: true
  },
  'overlay-2': {
    templateId: 12123,
    type: 'tagged',
    pause: true
  },
  'overlay-3': {
    templateId: 12123,
    type: 'paused'
  },
  'overlay-4': {
    templateId: 12123,
    type: 'playing',
    in: 22.22,
    out: 60
  },
  'overlay-5': {
    templateId: 12123,
    type: 'playing',
    in: 45.55,
    out: 95.15
  }
};

const overlays = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OVERLAY_FIELD_UPDATE:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          [action.payload.field]: action.payload.value
        }
      };
    case actionTypes.OVERLAY_ADD:
      return {
        ...state,
        [action.payload.id]: action.payload.data
      };
    default:
      return state;
  }
};

const activePlayingOverlayIds = (state = [], action) => {
  if (action.type === actionTypes.SET_PLAYING_OVERLAY_IDS) {
    return action.payload;
  }

  return state;
};

export default combineReducers({
  overlays,
  activePlayingOverlayIds
});