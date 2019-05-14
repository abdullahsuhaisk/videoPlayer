import { buildActionCreator } from '../propsUtils';
import {
  actionTypes as baseActionTypes,
  actions as baseActions
} from '../base/baseActions';

const PREFIX = 'HOTSPOT';

const HOTSPOT_FIELD_UPDATE = `${PREFIX}::FIELD_UPDATE`;
const HOTSPOT_ADD = `${PREFIX}::ADD`;
const SET_ACTIVE_HOTSPOT_IDS = `${PREFIX}::SET_ACTIVE_HOTSPOT_IDS`;

const onFieldUpdate = buildActionCreator(HOTSPOT_FIELD_UPDATE);
const onAdd = buildActionCreator(HOTSPOT_ADD);
const setActiveHotspotIds = buildActionCreator(SET_ACTIVE_HOTSPOT_IDS);

export const actionTypes = {
  HOTSPOT_FIELD_UPDATE,
  HOTSPOT_ADD,
  SET_ACTIVE_HOTSPOT_IDS,
  ...baseActionTypes
};

export const actions = {
  onFieldUpdate,
  onAdd,
  setActiveHotspotIds,
  ...baseActions
};
