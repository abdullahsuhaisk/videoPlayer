import { HOTSPOT_FIELD_UPDATE, HOTSPOT_ADD } from './hotspotActions';

const initialState = {
  'hotspot-1': {
    hotspotCursor: 12123,
    action: { name: 'openOverlay', params: [5432] },
    in: 0,
    out: 15,
    top: 25,
    left: 25
  }
};

const updateHotspot = (hotspots, payload) => {
  return hotspots.map((item) => {
    if (item.id !== payload.id) return item;

    return {
      ...item,
      [payload.field]: payload.value
    };
  });
};

const hotspotReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOTSPOT_FIELD_UPDATE:
      return {
        hotspots: updateHotspot(state, action.payload)
      };
    case HOTSPOT_ADD:
      return { ...state, [action.payload.id]: action.payload.data };
    default: {
      return state;
    }
  }
};

export default hotspotReducer;
