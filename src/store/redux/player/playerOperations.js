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

export const overlayContainerReady = (containerClass) => {
  return (dispatch) => {
    dispatch(actions.overlayContainerReady(containerClass));
  };
};

const mapStateToProps = (state) => {
  return {
    playing: state.player.playing,
    overlayContainerClass: state.player.overlayContainerClass
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ready: () => dispatch(ready),
    play: () => dispatch(play),
    pause: () => dispatch(pause),
    overlayContainerReady: (containerClass) =>
      dispatch(overlayContainerReady(containerClass))
  };
};

export const InjectPlayerOperations = InjectSelectedOperations({
  mapStateToProps,
  mapDispatchToProps
});
