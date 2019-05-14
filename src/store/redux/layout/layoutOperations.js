import { actions } from './layoutActions';

export const onWidth = (newWidth) => {
  return (dispatch) => {
    dispatch(actions.onWidth(newWidth));
  };
};

export const onHeight = (newHeight) => {
  return (dispatch) => {
    dispatch(actions.onHeight(newHeight));
  };
};

export const onBaseWidth = (newWidth) => {
  return (dispatch) => {
    dispatch(actions.onBaseWidth(newWidth));
  };
};
export const onBaseHeight = (newHeight) => {
  return (dispatch) => {
    dispatch(actions.onBaseHeight(newHeight));
  };
};

export const onSafeArea = (safeArea) => {
  return (dispatch) => {
    dispatch(actions.onSafeArea(safeArea));
  };
};

export const onAspectRatio = (aspectRatio) => {
  return (dispatch) => {
    dispatch(actions.onAspectRatio(aspectRatio));
  };
};
