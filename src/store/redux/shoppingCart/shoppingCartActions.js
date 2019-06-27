import { buildActionCreator } from '../propsUtils';
import {
  actionTypes as baseActionTypes,
  actions as baseActions
} from '../base/baseActions';

const PREFIX = 'SHOPPING_CART';

const SHOPPING_CART_ADD_ITEM = `${PREFIX}::ADD`;
const SHOPPING_CART_REMOVE_ITEM = `${PREFIX}::REMOVE`;
const SHOPPING_CART_UPDATE_TOTAL_PRICE = `${PREFIX}::UPDATE_TOTAL_PRICE`;

const addShoppingCart = buildActionCreator(SHOPPING_CART_ADD_ITEM);
const removeShoppingCart = buildActionCreator(SHOPPING_CART_REMOVE_ITEM);
const updateTotalPrice = buildActionCreator(SHOPPING_CART_UPDATE_TOTAL_PRICE);

export const actionTypes = {
  SHOPPING_CART_ADD_ITEM,
  SHOPPING_CART_REMOVE_ITEM,
  SHOPPING_CART_UPDATE_TOTAL_PRICE,
  ...baseActionTypes
};

export const actions = {
  addShoppingCart,
  removeShoppingCart,
  updateTotalPrice,
  ...baseActions
};
