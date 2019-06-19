import { actions } from './productDetailActions';

export const openDialog = () => (dispatch) => {
  dispatch(actions.dialogOpen());
};

export const closeDialog = () => (dispatch) => {
  dispatch(actions.dialogClose());
};

export const getProductId = (dispatch) => {
  dispatch(actions.getProductId());
};
