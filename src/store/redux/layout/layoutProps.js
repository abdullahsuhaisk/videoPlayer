import { InjectProps } from '../propsUtils';
import * as operations from './layoutOperations';

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
    onWidth: (width) => dispatch(operations.onWidth(width)),
    onHeight: (height) => dispatch(operations.onHeight(height)),
    onBaseWidth: (width) => dispatch(operations.onBaseWidth(width)),
    onBaseHeight: (height) => dispatch(operations.onBaseHeight(height)),
    onSafeArea: (safeArea) => dispatch(operations.onSafeArea(safeArea)),
    onAspectRatio: (aspectRatio) =>
      dispatch(operations.onAspectRatio(aspectRatio))
  };
};

export const InjectLayoutProps = InjectProps({
  mapStateToProps,
  mapDispatchToProps
});
