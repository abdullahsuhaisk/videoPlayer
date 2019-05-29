import { InjectProps } from '../propsUtils';
import {
  fieldUpdate,
  add,
  setActivePlayingOverlayIds
} from './overlayOperations';

const mapStateToProps = (state) => {
  return {
    overlays: state.overlays.overlays,
    activePlayingOverlayIds: state.overlays.activePlayingOverlayIds
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fieldUpdate: (newStatus) => dispatch(fieldUpdate(newStatus)),
    add: (overlay) => dispatch(add(overlay)),
    setActivePlayingOverlayIds: (ids) =>
      dispatch(setActivePlayingOverlayIds(ids))
  };
};

export const InjectOverlayProps = InjectProps(
  {
    mapStateToProps,
    mapDispatchToProps
  },
  'InjectOverlayProps'
);
