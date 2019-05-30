import { InjectProps } from '../propsUtils';
import './productOperations';

const mapStateToProps = (state) => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export const InjectProductProps = InjectProps(
  {
    mapStateToProps,
    mapDispatchToProps
  },
  'InjectProductProps'
);
