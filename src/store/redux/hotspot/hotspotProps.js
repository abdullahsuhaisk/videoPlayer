import { InjectProps } from '../propsUtils';
import * as operations from './hotspotOperations';

const mapStateToProps = (state) => {
  return {
    hotspots: state.hotspots.hotspots,
    activeHotspotIds: state.hotspots.activeHotspotIds
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFieldUpdate: (newStatus) => dispatch(operations.onFieldUpdate(newStatus)),
    onAdd: (newHotspots) => dispatch(operations.onAdd(newHotspots)),
    setActiveHotspotIds: (ids) => dispatch(operations.setActiveHotspotIds(ids))
  };
};

export const InjectHotspotProps = InjectProps({
  mapStateToProps,
  mapDispatchToProps
});
