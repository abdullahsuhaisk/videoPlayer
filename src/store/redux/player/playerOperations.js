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

const mapStateToProps = (state) => {
  return {
    playing: state.player.playing
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ready: () => dispatch(ready),
    play: () => dispatch(play),
    pause: () => dispatch(pause)
  };
};

export const InjectPlayerOperations = InjectSelectedOperations({
  mapStateToProps,
  mapDispatchToProps
});
