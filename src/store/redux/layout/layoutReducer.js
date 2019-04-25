import {
  LAYOUT_WIDTH,
  LAYOUT_HEIGHT,
  LAYOUT_BASE_WIDTH,
  LAYOUT_BASE_HEIGHT,
  LAYOUT_SAFE_AREA,
  LAYOUT_ASPECT_RATIO
} from './layoutActions';

const initialState = {
  width: 0,
  height: 0,
  baseWidth: 1000,
  baseHeight: 564,
  safeArea: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  aspectRatio: 16 / 9
};

const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAYOUT_WIDTH:
      return { ...state, width: action.payload };
    case LAYOUT_HEIGHT:
      return { ...state, height: action.payload };
    case LAYOUT_BASE_WIDTH:
      return { ...state, baseWidth: action.payload };
    case LAYOUT_BASE_HEIGHT:
      return { ...state, baseHeight: action.payload };
    case LAYOUT_SAFE_AREA:
      return { ...state, safeArea: action.payload };
    case LAYOUT_ASPECT_RATIO:
      return { ...state, aspectRatio: action.payload };
    default: {
      return state;
    }
  }
};

export default layoutReducer;
