import { buildActionCreator } from '../actionUtils';

export const PLAYER_READY = 'PLAYER_READY';
export const PLAYER_PLAY = 'PLAYER_PLAY';
export const PLAYER_PAUSE = 'PLAYER_PAUSE';

const ready = buildActionCreator(PLAYER_READY);
const play = buildActionCreator(PLAYER_PLAY);
const pause = buildActionCreator(PLAYER_PAUSE);

export const actions = { ready, play, pause };
