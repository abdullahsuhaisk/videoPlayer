import { actions } from './hotspotActions';

export const onFieldUpdate = (newStatus) => {
  return (dispatch) => {
    dispatch(actions.onFieldUpdate(newStatus));
  };
};

export const onAdd = (newHotspots) => {
  return (dispatch) => {
    dispatch(actions.onAdd(newHotspots));
  };
};

export const setActiveHotspotIds = (ids) => {
  return (dispatch) => {
    dispatch(actions.setActiveHotspotIds(ids));
  };
};
