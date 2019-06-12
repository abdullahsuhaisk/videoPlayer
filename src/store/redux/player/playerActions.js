import { buildActionCreator } from '../propsUtils';
import {
  actionTypes as baseActionTypes,
  actions as baseActions
} from '../base/baseActions';

const PREFIX = 'PLAYER';

const PLAYER_READY = `${PREFIX}::READY`;
const PLAYER_STARTED = `${PREFIX}::STARTED`;
const PLAYER_SEEK = `${PREFIX}::SEEK`;
const PLAYER_OVERLAY_CONTAINER_READY = `${PREFIX}::OVERLAY_CONTAINER_READY`;
const PLAYER_CURRENT_TIME_UPDATE = `${PREFIX}::CURRENT_TIME_UPDATE`;
const PLAYER_PLAYING_STATE_CHANGE = `${PREFIX}::PLAYING_STATE_CHANGE`;

const ready = buildActionCreator(PLAYER_READY);
const started = buildActionCreator(PLAYER_STARTED);
const seek = buildActionCreator(PLAYER_SEEK);
const overlayContainerReady = buildActionCreator(
  PLAYER_OVERLAY_CONTAINER_READY
);
const currentTimeUpdate = buildActionCreator(PLAYER_CURRENT_TIME_UPDATE);
const changePlayingState = buildActionCreator(PLAYER_PLAYING_STATE_CHANGE);

export const actionTypes = {
  PLAYER_READY,
  PLAYER_STARTED,
  PLAYER_SEEK,
  PLAYER_OVERLAY_CONTAINER_READY,
  PLAYER_CURRENT_TIME_UPDATE,
  PLAYER_PLAYING_STATE_CHANGE,
  ...baseActionTypes
};

export const actions = {
  ready,
  started,
  seek,
  overlayContainerReady,
  currentTimeUpdate,
  changePlayingState,
  ...baseActions
};

export const playingState = {
  PLAYING: 'PLAYING',
  PAUSED: 'PAUSED',
  SCRUBBING: 'SCRUBBING'
};
