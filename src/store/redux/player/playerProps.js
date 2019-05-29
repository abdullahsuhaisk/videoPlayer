import { InjectProps } from '../propsUtils';
import {
  ready,
  play,
  pause,
  seek,
  overlayContainerReady,
  currentTimeUpdate
} from './playerOperations';

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

export const InjectPlayerProps = InjectProps(
  {
    mapStateToProps,
    mapDispatchToProps
  },
  'InjectPlayerProps'
);
