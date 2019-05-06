import { buildActionCreator } from '../actionUtils';

export const HOTSPOT_FIELD_UPDATE = 'HOTSPOT::UPDATE';
export const HOTSPOT_ADD = 'HOTSPOT::ADD';

const onFieldUpdate = buildActionCreator(HOTSPOT_FIELD_UPDATE);
const onAdd = buildActionCreator(HOTSPOT_ADD);

export const actions = {
  onFieldUpdate,
  onAdd
};
