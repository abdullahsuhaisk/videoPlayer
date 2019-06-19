import { InjectProps } from '../propsUtils';
import { openDialog, closeDialog, getProductId } from './uiOperations';

const mapStateToProps = (state) => {
  const { ui } = state;
  return {
    isOpen: ui.isOpen,
    productId: ui.productId
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    openDialog: () => dispatch(openDialog),
    closeDialog: () => dispatch(closeDialog),
    getProductId: (productId) => dispatch(getProductId(productId))
  };
};
export const InjectUiProps = InjectProps(
  {
    mapStateToProps,
    mapDispatchToProps
  },
  'InjectUiProps'
);
