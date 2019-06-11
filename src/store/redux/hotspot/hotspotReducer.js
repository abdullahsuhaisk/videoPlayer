import { combineReducers } from 'redux';
import { actionTypes } from './hotspotActions';

const initialState = {
  'hotspot-1': {
    in: 32.5,
    out: 105.3,
    productId: 'product-1'
  },
  'hotspot-2': {
    in: 82.5,
    out: 125.3,
    productId: 'product-2'
  },
  'hotspot-3': {
    in: 128.2,
    out: 216.4,
    productId: 'product-3'
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
