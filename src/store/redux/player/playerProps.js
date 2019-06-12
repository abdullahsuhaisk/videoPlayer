import { InjectProps } from '../propsUtils';
import {
  ready,
  started,
  seek,
  overlayContainerReady,
  currentTimeUpdate,
  changePlayingState
} from './playerOperations';

const mapStateToProps = (state) => {
  return {
    playerStarted: state.player.started,
    seekTo: state.player.seekTo,
    overlayContainerClass: state.player.overlayContainerClass,
    currentTime: state.player.currentTime,
    playerPlayingState: state.player.playingState
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ready: () => dispatch(ready),
    started: (hasStarted) => dispatch(started(hasStarted)),
    seek: (timeToSeek) => dispatch(seek(timeToSeek)),
    overlayContainerReady: (containerClass) =>
      dispatch(overlayContainerReady(containerClass)),
    currentTimeUpdate: (currentTime) =>
      dispatch(currentTimeUpdate(currentTime)),
    changePlayerPlayingState: (newPlayingState) =>
      dispatch(changePlayingState(newPlayingState))
  };
};

export const InjectPlayerProps = InjectProps(
  {
    mapStateToProps,
    mapDispatchToProps
  },
  'InjectPlayerProps'
);
