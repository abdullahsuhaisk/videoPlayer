import { actionTypes } from './productDetailActions';

const initalUiState = {
  isOpenProductDetailDialog: false,
  productId: null
};

const reducer = (state = initalUiState, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_DETAIL_DIALOG_OPEN:
      return { ...state, isOpenProductDetailDialog: true };
    case actionTypes.PRODUCT_DETAIL_DIALOG_CLOSE:
      return { ...state, isOpenProductDetailDialog: false, productId: null };
    case actionTypes.PRODUCT_GET_ID:
      return { ...state, productId: action.payload };
    default:
      return state;
  }
};

export default reducer;
