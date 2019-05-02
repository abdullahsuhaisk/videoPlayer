import { TAG_FIELD_UPDATE, TAG_ADD } from './tagActions';
import { combineReducers } from '../../../../../../../AppData/Local/Microsoft/TypeScript/3.4.3/node_modules/redux';

const initialState = [
  {
    id: 'tag-1',
    assetId: 12123,
    overlayId: 5432,
    in: 0,
    out: 15,
    pos: {
      x: 25,
      y: 25
    }
  }
];

const updateTag = (tags, payload) => {
  return tags.map((item) => {
    if (item.id !== payload.id) return item;

    return {
      ...item,
      [payload.field]: payload.value
    };
  });
};

const tagReducer = (state = initialState, action) => {
  switch (action.type) {
    case TAG_FIELD_UPDATE:
      return {
        tags: updateTag(state, action.payload)
      };
    case TAG_ADD:
      return { ...state.concat(action.payload) };
    default: {
      return state;
    }
  }
};

export default tagReducer;
