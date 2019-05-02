import { InjectSelectedOperations } from '../actionUtils';
import { actions } from './tagActions';

export const onFieldUpdate = (newStatus) => {
  return (dispatch) => {
    dispatch(actions.onFieldUpdate(newStatus));
  };
};

export const onAdd = (newTags) => {
  return (dispatch) => {
    dispatch(actions.onAdd(newTags));
  };
};

const mapStateToProps = (state) => {
  return {
    tags: state.tags
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFieldUpdate: (newStatus) => dispatch(onFieldUpdate(newStatus)),
    onAdd: (newTags) => dispatch(onAdd(newTags))
  };
};

export const InjectTagOperations = InjectSelectedOperations({
  mapStateToProps,
  mapDispatchToProps
});
