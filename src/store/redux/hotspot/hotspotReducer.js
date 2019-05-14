import { combineReducers } from 'redux';
import {
  HOTSPOT_FIELD_UPDATE,
  HOTSPOT_ADD,
  SET_ACTIVE_HOTSPOT_IDS
} from './hotspotActions';

const initialState = {
  'hotspot-1': {
    assetId: 12123,
    action: { name: 'openOverlay', params: ['overlay-2'] },
    in: 32.5,
    out: 65.3,
    top: 25,
    left: 25
  },
  'hotspot-2': {
    assetId: 12123,
    in: 40.3,
    out: 110.6,
    top: 5,
    left: 5
  }
};

const hotspots = (state = initialState, action) => {
  switch (action.type) {
    case HOTSPOT_FIELD_UPDATE:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          [action.payload.field]: action.payload.value
        }
      };
    case HOTSPOT_ADD:
      return { ...state, [action.payload.id]: action.payload.data };
    default: {
      return state;
    }
  }
};

const activeHotspotIds = (state = [], action) => {
  if (action.type === SET_ACTIVE_HOTSPOT_IDS) {
    return action.payload;
  }

  return state;
};

export default combineReducers({
  hotspots,
  activeHotspotIds
});
