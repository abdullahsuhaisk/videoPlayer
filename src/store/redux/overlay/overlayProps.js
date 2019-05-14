import { InjectProps } from '../propsUtils';
import * as operations from './overlayOperations';

const mapStateToProps = (state) => {
  return {
    overlays: state.overlays.overlays,
    activePlayingOverlayIds: state.overlays.activePlayingOverlayIds
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fieldUpdate: (newStatus) => dispatch(operations.fieldUpdate(newStatus)),
    add: (overlay) => dispatch(operations.add(overlay)),
    setActivePlayingOverlayIds: (ids) =>
      dispatch(operations.setActivePlayingOverlayIds(ids))
  };
};

export const InjectOverlayProps = InjectProps({
  mapStateToProps,
  mapDispatchToProps
});
