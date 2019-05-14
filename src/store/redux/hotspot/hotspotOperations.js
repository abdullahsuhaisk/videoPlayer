import { InjectSelectedOperations } from '../actionUtils';
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

const mapStateToProps = (state) => {
  return {
    hotspots: state.hotspots.hotspots,
    activeHotspotIds: state.hotspots.activeHotspotIds
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFieldUpdate: (newStatus) => dispatch(onFieldUpdate(newStatus)),
    onAdd: (newHotspots) => dispatch(onAdd(newHotspots)),
    setActiveHotspotIds: (ids) => dispatch(setActiveHotspotIds(ids))
  };
};

export const InjectHotspotOperations = InjectSelectedOperations({
  mapStateToProps,
  mapDispatchToProps
});
