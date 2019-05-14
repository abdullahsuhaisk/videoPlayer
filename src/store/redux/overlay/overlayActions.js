import { buildActionCreator } from '../propsUtils';
import {
  actionTypes as baseActionTypes,
  actions as baseActions
} from '../base/baseActions';

const PREFIX = 'OVERLAY';

const OVERLAY_FIELD_UPDATE = `${PREFIX}::FIELD_UPDATE`;
const OVERLAY_ADD = `${PREFIX}::ADD`;
const SET_PLAYING_OVERLAY_IDS = `${PREFIX}::SET_PLAYING_OVERLAY_IDS`;

const fieldUpdate = buildActionCreator(OVERLAY_FIELD_UPDATE);
const add = buildActionCreator(OVERLAY_ADD);
const setPlayingOverlaysIds = buildActionCreator(SET_PLAYING_OVERLAY_IDS);

export const overlayTypes = {
  playing: 'playing',
  paused: 'paused',
  tagged: 'tagged',
  login: 'login'
};

export const actionTypes = {
  OVERLAY_FIELD_UPDATE,
  OVERLAY_ADD,
  SET_PLAYING_OVERLAY_IDS,
  ...baseActionTypes
};

export const actions = {
  fieldUpdate,
  add,
  setPlayingOverlaysIds,
  ...baseActions
};
