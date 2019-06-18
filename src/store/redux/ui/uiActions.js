import { buildActionCreator } from '../propsUtils';
import {
  actionTypes as baseActionTypes,
  actions as baseActions
} from '../base/baseActions';

const PREFIX = 'UI';

const PRODUCT_DETAIL_DIALOG_OPEN = `${PREFIX}::OPEN`;
const PRODUCT_DETAIL_DIALOG_CLOSE = `${PREFIX}::CLOSE`;
const PRODUCT_GET_ID = `${PREFIX}::PRODUCT_ID`;

const dialogOpen = buildActionCreator(PRODUCT_DETAIL_DIALOG_OPEN);
const dialogClose = buildActionCreator(PRODUCT_DETAIL_DIALOG_CLOSE);
const getProductId = buildActionCreator(PRODUCT_GET_ID);

export const actionTypes = {
  PRODUCT_DETAIL_DIALOG_OPEN,
  PRODUCT_DETAIL_DIALOG_CLOSE,
  PRODUCT_GET_ID,
  ...baseActionTypes
};

export const actions = {
  dialogOpen,
  dialogClose,
  getProductId,
  ...baseActions
};

export const uıState = {};
