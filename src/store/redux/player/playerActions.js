import { buildActionCreator } from '../propsUtils';
import {
  actionTypes as baseActionTypes,
  actions as baseActions
} from '../base/baseActions';

const PREFIX = 'PLAYER';

const PLAYER_READY = `${PREFIX}::READY`;
const PLAYER_PLAY = `${PREFIX}::PLAY`;
const PLAYER_PAUSE = `${PREFIX}::PAUSE`;
const PLAYER_STARTED = `${PREFIX}::STARTED`;
const PLAYER_SEEK = `${PREFIX}::SEEK`;
const PLAYER_OVERLAY_CONTAINER_READY = `${PREFIX}::OVERLAY_CONTAINER_READY`;
const PLAYER_CURRENT_TIME_UPDATE = `${PREFIX}::CURRENT_TIME_UPDATE`;

const ready = buildActionCreator(PLAYER_READY);
const play = buildActionCreator(PLAYER_PLAY);
const pause = buildActionCreator(PLAYER_PAUSE);
const started = buildActionCreator(PLAYER_STARTED);
const seek = buildActionCreator(PLAYER_SEEK);
const overlayContainerReady = buildActionCreator(
  PLAYER_OVERLAY_CONTAINER_READY
);
const currentTimeUpdate = buildActionCreator(PLAYER_CURRENT_TIME_UPDATE);

export const actionTypes = {
  PLAYER_READY,
  PLAYER_PLAY,
  PLAYER_PAUSE,
  PLAYER_STARTED,
  PLAYER_SEEK,
  PLAYER_OVERLAY_CONTAINER_READY,
  PLAYER_CURRENT_TIME_UPDATE,
  ...baseActionTypes
};

export const actions = {
  ready,
  play,
  pause,
  started,
  seek,
  overlayContainerReady,
  currentTimeUpdate,
  ...baseActions
};
