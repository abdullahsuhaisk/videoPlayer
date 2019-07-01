import { actions } from './shoppingCartActions';

export const addCart = (productId) => (dispatch) => {
  dispatch(actions.addShoppingCart(productId));
};

export const removeCart = (productId) => (dispatch) => {
  dispatch(actions.removeShoppingCart(productId));
};
