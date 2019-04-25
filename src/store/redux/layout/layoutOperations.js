import { InjectSelectedOperations } from '../actionUtils';
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

const mapStateToProps = (state) => {
  return {
    width: state.layout.width,
    height: state.layout.height,
    baseWidth: state.layout.baseWidth,
    baseHeight: state.layout.baseHeight,
    safeArea: state.layout.safeArea,
    aspectRatio: state.layout.aspectRatio
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onWidth: (width) => dispatch(onWidth(width)),
    onHeight: (height) => dispatch(onHeight(height)),
    onBaseWidth: (width) => dispatch(onBaseWidth(width)),
    onBaseHeight: (height) => dispatch(onBaseHeight(height)),
    onSafeArea: (safeArea) => dispatch(onSafeArea(safeArea)),
    onAspectRatio: (aspectRatio) => dispatch(onAspectRatio(aspectRatio))
  };
};

export const InjectLayoutOperations = InjectSelectedOperations({
  mapStateToProps,
  mapDispatchToProps
});
