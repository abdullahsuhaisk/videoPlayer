import { HOTSPOT_FIELD_UPDATE, HOTSPOT_ADD } from './hotspotActions';

const initialState = {
  'hotspot-1': {
    assetId: 12123,
    action: { name: 'openOverlay', params: ['overlay-2'] },
    in: 0,
    out: 15,
    top: 25,
    left: 25
  }
};

const hotspotReducer = (state = initialState, action) => {
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

export default hotspotReducer;
