import { InjectProps } from '../propsUtils';
import { onFieldUpdate, onAdd, setActiveHotspotIds } from './hotspotOperations';

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

export const InjectHotspotProps = InjectProps(
  {
    mapStateToProps,
    mapDispatchToProps
  },
  'InjectHotspotProps'
);
