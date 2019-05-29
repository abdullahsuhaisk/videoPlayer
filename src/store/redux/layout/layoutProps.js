import { InjectProps } from '../propsUtils';
import {
  onWidth,
  onHeight,
  onBaseWidth,
  onBaseHeight,
  onSafeArea,
  onAspectRatio
} from './layoutOperations';

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

export const InjectLayoutProps = InjectProps(
  {
    mapStateToProps,
    mapDispatchToProps
  },
  'InjectLayoutProps'
);
