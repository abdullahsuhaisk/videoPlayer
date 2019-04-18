import { buildActionCreator } from '../actionUtils';

export const PLAYER_READY = 'PLAYER::READY';
export const PLAYER_PLAY = 'PLAYER::PLAY';
export const PLAYER_PAUSE = 'PLAYER::PAUSE';
export const PLAYER_OVERLAY_CONTAINER_READY = 'PLAYER::OVERLAY_CONTAINER_READY';

const ready = buildActionCreator(PLAYER_READY);
const play = buildActionCreator(PLAYER_PLAY);
const pause = buildActionCreator(PLAYER_PAUSE);
const overlayContainerReady = buildActionCreator(
  PLAYER_OVERLAY_CONTAINER_READY
);

export const actions = { ready, play, pause, overlayContainerReady };
