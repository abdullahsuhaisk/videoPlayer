import {
  PLAYER_PLAY,
  PLAYER_PAUSE,
  PLAYER_READY,
  PLAYER_OVERLAY_CONTAINER_READY,
  PLAYER_CURRENT_TIME_UPDATE
} from './playerActions';

const initialState = {
  ready: false,
  playing: false,
  overlayContainerClass: null,
  currentTime: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAYER_READY:
      return { ...state, ready: true };
    case PLAYER_PLAY:
      return { ...state, playing: true };
    case PLAYER_PAUSE:
      return { ...state, playing: false };
    case PLAYER_OVERLAY_CONTAINER_READY:
      return { ...state, overlayContainerClass: action.payload };
    case PLAYER_CURRENT_TIME_UPDATE:
      return { ...state, currentTime: action.payload };
    default:
      return state;
  }
};

export default reducer;
