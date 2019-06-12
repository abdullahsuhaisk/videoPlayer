import { actionTypes } from './playerActions';

const initialState = {
  ready: false,
  playing: false,
  started: false,
  seekTo: -1,
  overlayContainerClass: null,
  currentTime: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PLAYER_READY:
      return { ...state, ready: true };
    case actionTypes.PLAYER_PLAY:
      return { ...state, playing: true };
    case actionTypes.PLAYER_PAUSE:
      return { ...state, playing: false };
    case actionTypes.PLAYER_STARTED:
      return { ...state, started: action.payload };
    case actionTypes.PLAYER_SEEK:
      return { ...state, seekTo: action.payload };
    case actionTypes.PLAYER_OVERLAY_CONTAINER_READY:
      return { ...state, overlayContainerClass: action.payload };
    case actionTypes.PLAYER_CURRENT_TIME_UPDATE:
      return { ...state, currentTime: action.payload };
    default:
      return state;
  }
};

export default reducer;
