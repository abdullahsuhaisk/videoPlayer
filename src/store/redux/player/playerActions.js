import { buildActionCreator } from '../actionUtils';

export const PLAYER_PLAY = 'PLAYER_PLAY';
export const PLAYER_PAUSE = 'PLAYER_PAUSE';

const play = buildActionCreator(PLAYER_PLAY);
const pause = buildActionCreator(PLAYER_PAUSE);

export const actions = { play, pause };
