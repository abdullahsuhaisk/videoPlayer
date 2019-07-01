import { InjectProps } from '../propsUtils';
import {
  closeNavigationDialog,
  openNavigationDialog,
  setNavigationPage
} from './navigationOperations';

const mapStateToProps = (state) => {
  const { navigation } = state;
  return {
    isOpenNavigationDialog: navigation.isOpenNavigationDialog,
    pages: navigation.pages,
    selectedPages: navigation.selectedPages
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openNavigationDialog: () => dispatch(openNavigationDialog()),
    closeNavigationDialog: () => dispatch(closeNavigationDialog()),
    setNavigationPage: (page) => dispatch(setNavigationPage(page))
  };
};

export const InjectNavigationProps = InjectProps(
  {
    mapStateToProps,
    mapDispatchToProps
  },
  'InjectNavigationProps'
);
