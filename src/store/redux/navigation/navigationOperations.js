import { actions } from './navigationActions';

export const openNavigationDialog = (dispatch) => {
  dispatch(actions.navigationDialogOpen());
};

export const closeNavigationDialog = (dispatch) => {
  dispatch(actions.navigationDialogClose());
};

export const setNavigationPage = (NavigationPage) => (dispatch) => {
  dispatch(actions.navigationPageChange(NavigationPage));
};
