import { actionTypes } from './uiActions';

const initalUiState = {
  isOpen: false,
  productId: null
};

const reducer = (state = initalUiState, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_DETAIL_DIALOG_OPEN:
      return { ...state, isOpen: true };
    case actionTypes.PRODUCT_DETAIL_DIALOG_CLOSE:
      return { ...state, isOpen: false };
    case actionTypes.PRODUCT_GET_ID:
      return { ...state, productId: action.payload };
    default:
      return state;
  }
};

export default reducer;
