import { actions } from './playerActions';

export const ready = (dispatch) => {
  dispatch(actions.ready());
};

export const started = (hasStarted) => {
  return (dispatch) => {
    dispatch(actions.started(hasStarted));
  };
};

export const seek = (timeToSeek) => {
  return (dispatch) => {
    dispatch(actions.seek(timeToSeek));
  };
};

export const overlayContainerReady = (containerClass) => {
  return (dispatch) => {
    dispatch(actions.overlayContainerReady(containerClass));
  };
};

export const currentTimeUpdate = (currentTime) => {
  return (dispatch) => {
    dispatch(actions.currentTimeUpdate(currentTime));
  };
};

export const changePlayingState = (newPlayingState) => {
  return (dispatch) => {
    dispatch(actions.changePlayingState(newPlayingState));
  };
};
