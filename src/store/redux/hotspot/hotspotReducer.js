import { combineReducers } from 'redux';
import { actionTypes } from './hotspotActions';

const initialState = {
  'hotspot-1': {
    assetId: 12123,
    action: { name: 'openOverlay', params: ['overlay-2'] },
    in: 0,
    out: 65.3,
    top: 25,
    left: 25
  },
  'hotspot-2': {
    assetId: 12123,
    in: 98.2,
    out: 186.4,
    top: 5,
    left: 5
  }
};

const hotspots = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HOTSPOT_FIELD_UPDATE:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          [action.payload.field]: action.payload.value
        }
      };
    case actionTypes.HOTSPOT_ADD:
      return { ...state, [action.payload.id]: action.payload.data };
    default: {
      return state;
    }
  }
};

const activeHotspotIds = (state = [], action) => {
  if (action.type === actionTypes.SET_ACTIVE_HOTSPOT_IDS) {
    return action.payload;
  }

  return state;
};

export default combineReducers({
  hotspots,
  activeHotspotIds
});
