import { InjectSelectedOperations } from '../actionUtils';
import { actions } from './overlayActions';

export const fieldUpdate = (newStatus) => {
  return (dispatch) => {
    dispatch(actions.fieldUpdate(newStatus));
  };
};

export const add = (overlay) => {
  return (dispatch) => {
    dispatch(actions.add(overlay));
  };
};

export const setActivePlayingOverlayIds = (ids) => {
  return (dispatch) => {
    dispatch(actions.setPlayingOverlaysIds(ids));
  };
};

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

export const InjectOverlayOperations = InjectSelectedOperations({
  mapStateToProps,
  mapDispatchToProps
});
