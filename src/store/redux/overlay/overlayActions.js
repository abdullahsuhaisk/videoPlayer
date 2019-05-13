import { buildActionCreator } from '../actionUtils';

export const OVERLAY_FIELD_UPDATE = 'OVERLAY::FIELD_UPDATE';
export const OVERLAY_ADD = 'OVERLAY::ADD';

export const SET_PLAYING_OVERLAY_IDS = 'OVERLAY::SET_PLAYING_OVERLAY_IDS';

const fieldUpdate = buildActionCreator(OVERLAY_FIELD_UPDATE);
const add = buildActionCreator(OVERLAY_ADD);

const setPlayingOverlaysIds = buildActionCreator(SET_PLAYING_OVERLAY_IDS);

export const actions = {
  fieldUpdate,
  add,
  setPlayingOverlaysIds
};

export const overlayTypes = {
  playing: 'playing',
  paused: 'paused',
  tagged: 'tagged',
  login: 'login'
};
