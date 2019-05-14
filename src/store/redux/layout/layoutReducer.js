import { actionTypes } from './layoutActions';

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
    case actionTypes.LAYOUT_WIDTH:
      return { ...state, width: action.payload };
    case actionTypes.LAYOUT_HEIGHT:
      return { ...state, height: action.payload };
    case actionTypes.LAYOUT_BASE_WIDTH:
      return { ...state, baseWidth: action.payload };
    case actionTypes.LAYOUT_BASE_HEIGHT:
      return { ...state, baseHeight: action.payload };
    case actionTypes.LAYOUT_SAFE_AREA:
      return { ...state, safeArea: action.payload };
    case actionTypes.LAYOUT_ASPECT_RATIO:
      return { ...state, aspectRatio: action.payload };
    default: {
      return state;
    }
  }
};

export default layoutReducer;
