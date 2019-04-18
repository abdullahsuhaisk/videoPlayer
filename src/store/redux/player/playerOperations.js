import { InjectSelectedOperations } from '../actionUtils';
import { actions } from './playerActions';

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
    onPlay: () => dispatch(play),
    onPause: () => dispatch(pause)
  };
};

export const InjectPlayerOperations = InjectSelectedOperations({
  mapStateToProps,
  mapDispatchToProps
});
