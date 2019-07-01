import { InjectProps } from '../propsUtils';
import { addCart, removeCart } from './shoppingCartOperations';

const mapStateToProps = (state) => {
  const { shoppingCart } = state;
  return {
    basketProducts: shoppingCart.basketProducts
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addCart: (productId) => dispatch(addCart(productId)),
    removeCart: (productId) => dispatch(removeCart(productId))
  };
};

export const InjectShoppingProps = InjectProps(
  {
    mapStateToProps,
    mapDispatchToProps
  },
  'InjectShoppingProps'
);
