import { TAG_FIELD_UPDATE } from './tagActions';

const initialState = {
  tags: []
};

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
        tags: updateTag(state.tags, action.payload)
      };
    default: {
      return state;
    }
  }
};

export default tagReducer;
