import { actionTypes } from './navigationActions';

const initialNavigationState = {
  isOpenNavigationDialog: false,
  pages: ['Profile', 'Favourites', 'WatchList', 'WishList', 'Shopping Cart'],
  selectedPages: 'Profile'
};

const reducer = (state = initialNavigationState, action) => {
  switch (action.type) {
    case actionTypes.NAVIGATION_DIALOG_OPEN:
      return { ...state, isOpenNavigationDialog: true };
    case actionTypes.NAVIGATION_DIALOG_CLOSE:
      return { ...state, isOpenNavigationDialog: false };
    case actionTypes.NAVIGATION_PAGE_CHANGE:
      return { ...state, selectedPages: action.payload };
    default:
      return state;
  }
};

export default reducer;
