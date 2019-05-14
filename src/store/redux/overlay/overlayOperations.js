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
