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

const mapStateToProps = (state) => {
  return {
    hotspots: state.hotspots
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFieldUpdate: (newStatus) => dispatch(onFieldUpdate(newStatus)),
    onAdd: (newHotspots) => dispatch(onAdd(newHotspots))
  };
};

export const InjectHotspotOperations = InjectSelectedOperations({
  mapStateToProps,
  mapDispatchToProps
});
