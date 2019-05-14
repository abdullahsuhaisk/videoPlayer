import { InjectProps } from '../propsUtils';
import { resetError } from './baseOperations';

const mapStateToProps = (state) => {
  return state.base;
};

const mapDispatchToProps = (dispatch) => ({
  resetError: () => dispatch(resetError())
});

export const InjectBaseProps = InjectProps({
  mapStateToProps,
  mapDispatchToProps
});
