import { buildActionCreator } from '../propsUtils';
import {
  actionTypes as baseActionTypes,
  actions as baseActions
} from '../base/baseActions';

const PREFIX = 'NAVIGATION';

const NAVIGATION_DIALOG_OPEN = `${PREFIX}::OPEN`;
const NAVIGATION_DIALOG_CLOSE = `${PREFIX}::CLOSE`;
const NAVIGATION_PAGE_CHANGE = `${PREFIX}::PAGE_CHANGE`;

const navigationDialogOpen = buildActionCreator(NAVIGATION_DIALOG_OPEN);
const navigationDialogClose = buildActionCreator(NAVIGATION_DIALOG_CLOSE);
const navigationPageChange = buildActionCreator(NAVIGATION_PAGE_CHANGE);

export const actionTypes = {
  NAVIGATION_DIALOG_OPEN,
  NAVIGATION_DIALOG_CLOSE,
  NAVIGATION_PAGE_CHANGE,
  ...baseActionTypes
};

export const actions = {
  navigationDialogOpen,
  navigationDialogClose,
  navigationPageChange,
  ...baseActions
};
