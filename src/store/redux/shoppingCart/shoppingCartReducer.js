import { actionTypes } from './shoppingCartActions';

const initialShoppingCartReducer = {
  basketProducts: [],
  totalPrice: 0
};

const reducer = (state = initialShoppingCartReducer, action) => {
  switch (action.type) {
    case actionTypes.SHOPPING_CART_ADD_ITEM:
      return {
        ...state,
        basketProducts: [...state.basketProducts, action.payload]
      };
    case actionTypes.SHOPPING_CART_REMOVE_ITEM:
      return {
        ...state,
        basketProducts: [
          ...state.basketProducts.filter((item) => item !== action.payload)
        ]
      };
    default:
      return state;
  }
};
export default reducer;
