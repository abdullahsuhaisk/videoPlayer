import { actions } from './productDetailActions';

export const openDialog = () => (dispatch) => {
  dispatch(actions.dialogOpen());
};

export const closeDialog = () => (dispatch) => {
  dispatch(actions.dialogClose());
};

export const setProductId = (productId) => (dispatch) => {
  dispatch(actions.setProductId(productId));
};
