import { InjectSelectedOperations } from '../actionUtils';
import { actions } from './tagActions';

export const onFieldUpdate = (newStatus) => {
  return (dispatch) => {
    dispatch(actions.onFieldUpdate(newStatus));
  };
};

const mapStateToProps = (state) => {
  return {
    tags: state.tag.tags
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFieldUpdate: (newStatus) => dispatch(onFieldUpdate(newStatus))
  };
};

export const InjectTagOperations = InjectSelectedOperations({
  mapStateToProps,
  mapDispatchToProps
});
