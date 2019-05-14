import { InjectProps } from '../propsUtils';
import * as operations from './playerOperations';

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
    ready: () => dispatch(operations.ready),
    play: () => dispatch(operations.play),
    pause: () => dispatch(operations.pause),
    seek: (timeToSeek) => dispatch(operations.seek(timeToSeek)),
    overlayContainerReady: (containerClass) =>
      dispatch(operations.overlayContainerReady(containerClass)),
    currentTimeUpdate: (currentTime) =>
      dispatch(operations.currentTimeUpdate(currentTime))
  };
};

export const InjectPlayerProps = InjectProps({
  mapStateToProps,
  mapDispatchToProps
});
