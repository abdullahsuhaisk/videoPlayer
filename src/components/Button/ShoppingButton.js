import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { InjectPlayerProps } from '../../store/redux/providers';
import { playingState } from '../../store/redux/player/playerActions';

const ShoppingButtonWrapper = styled.div((props) => ({
  display: 'inline-block',
  pointerEvents: 'auto',
  top: '32px',
  left: '32px',
  cursor: 'pointer',
  position: 'absolute',
  borderRadius: '50%',
  border: '1px solid #494949',
  '.vb--icon': {
    background: 'url(/images/cart-simple.svg) center / cover no-repeat ',
    display: 'inline-block',
    width: '24px',
    height: '24px'
  }
}));
// TODO: Onclick method must override, it will entegrated redux
const ShoppingButton = ({ playerPlayingState, playerStarted }) => {
  return (
    <>
      {playerStarted && playerPlayingState === playingState.PAUSED && (
        <ShoppingButtonWrapper>
          <div className="vb--icon" onClick={() => alert('clicked')} />
        </ShoppingButtonWrapper>
      )}
    </>
  );
};

ShoppingButton.propTypes = {
  playerPlayingState: PropTypes.string.isRequired,
  playerStarted: PropTypes.bool.isRequired
};

ShoppingButton.defaultProps = {};

export default InjectPlayerProps({
  selectProps: ({ playerPlayingState, playerStarted }) => ({
    playerPlayingState,
    playerStarted
  })
})(ShoppingButton);
