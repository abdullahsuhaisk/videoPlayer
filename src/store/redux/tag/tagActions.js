import { buildActionCreator } from '../actionUtils';

export const TAG_FIELD_UPDATE = 'TAG::UPDATE';
export const TAG_ADD = 'TAG::ADD';

const onFieldUpdate = buildActionCreator(TAG_FIELD_UPDATE);
const onAdd = buildActionCreator(TAG_ADD);

export const actions = {
  onFieldUpdate,
  onAdd
};
