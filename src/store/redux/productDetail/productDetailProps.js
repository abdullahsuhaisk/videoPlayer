import { InjectProps } from '../propsUtils';
import {
  openDialog,
  closeDialog,
  setProductId
} from './productDetailOperations';

const mapStateToProps = (state) => {
  const { productDetail } = state;
  return {
    isOpenProductDetailDialog: productDetail.isOpenProductDetailDialog,
    productId: productDetail.productId
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    openProductDetailDialog: () => dispatch(openDialog()),
    closeProductDetailDialog: () => dispatch(closeDialog()),
    setProductId: (productId) => dispatch(setProductId(productId))
  };
};
export const InjectProductDetailProps = InjectProps(
  {
    mapStateToProps,
    mapDispatchToProps
  },
  'InjectProductDetailProps'
);
