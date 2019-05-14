import { buildActionCreator } from '../actionUtils';

export const HOTSPOT_FIELD_UPDATE = 'HOTSPOT::FIELD_UPDATE';
export const HOTSPOT_ADD = 'HOTSPOT::ADD';
export const SET_ACTIVE_HOTSPOT_IDS = 'HOTSPOT::SET_ACTIVE_HOTSPOT_IDS';

const onFieldUpdate = buildActionCreator(HOTSPOT_FIELD_UPDATE);
const onAdd = buildActionCreator(HOTSPOT_ADD);
const setActiveHotspotIds = buildActionCreator(SET_ACTIVE_HOTSPOT_IDS);

export const actions = {
  onFieldUpdate,
  onAdd,
  setActiveHotspotIds
};
