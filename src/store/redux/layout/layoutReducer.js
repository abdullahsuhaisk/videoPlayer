import { LAYOUT_WIDTH, LAYOUT_HEIGHT } from './layoutActions';

const initialState = {
  width: 0,
  height: 0
};

const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAYOUT_WIDTH:
      return { ...state, width: action.payload };
    case LAYOUT_HEIGHT:
      return { ...state, height: action.payload };
    default: {
      return state;
    }
  }
};

export default layoutReducer;
