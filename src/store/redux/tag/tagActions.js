import { buildActionCreator } from '../actionUtils';

export const TAG_FIELD_UPDATE = 'TAG::UPDATE';

const onFieldUpdate = buildActionCreator(TAG_FIELD_UPDATE);

export const actions = {
  onFieldUpdate
};
