import { PLAYER_PLAY, PLAYER_PAUSE } from './playerActions';

const initialState = {
  playing: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAYER_PLAY:
      return { ...state, playing: true };
    case PLAYER_PAUSE:
      return { ...state, playing: false };
    default:
      return state;
  }
};

export default reducer;
