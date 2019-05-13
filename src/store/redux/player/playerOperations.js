import { InjectSelectedOperations } from '../actionUtils';
import { actions } from './playerActions';

export const ready = (dispatch) => {
  dispatch(actions.ready());
};

export const play = (dispatch) => {
  dispatch(actions.play());
};

export const pause = (dispatch) => {
  dispatch(actions.pause());
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

const mapStateToProps = (state) => {
  return {
    playing: state.player.playing,
    seekTo: state.player.seekTo,
    overlayContainerClass: state.player.overlayContainerClass,
    currentTime: state.player.currentTime
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ready: () => dispatch(ready),
    play: () => dispatch(play),
    pause: () => dispatch(pause),
    seek: (timeToSeek) => dispatch(seek(timeToSeek)),
    overlayContainerReady: (containerClass) =>
      dispatch(overlayContainerReady(containerClass)),
    currentTimeUpdate: (currentTime) => dispatch(currentTimeUpdate(currentTime))
  };
};

export const InjectPlayerOperations = InjectSelectedOperations({
  mapStateToProps,
  mapDispatchToProps
});
