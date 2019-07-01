import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import ShoppingButton from '../../components/Button/ShoppingButton';
import { InjectNavigationProps } from '../../store/redux/navigation/navigationProps';
import { InjectPlayerProps } from '../../store/redux/providers';
import { playingState } from '../../store/redux/player/playerActions';
import NavigationDialog from './NavigationDialog';

const NavigationScreen = ({
  playerPlayingState,
  playerStarted,
  openNavigationDialog,
  isOpenNavigationDialog,
  closeNavigationDialog,
  pages
}) => {
  const wrapperStyle = {
    Wrapper: {
      zIndex: '1',
      top: '50px',
      left: '100px',
      width: '80%',
      height: '80%',
      borderRadius: '8px'
    },
    CloseButton: { color: 'white' }
  };

  return (
    <>
      {playerStarted && playerPlayingState === playingState.PAUSED && (
        <ShoppingButton openNavigationDialog={openNavigationDialog} />
      )
      // TODO: Shopping button must move to Player
      }
      {playerStarted &&
        playerPlayingState === playingState.PAUSED &&
        isOpenNavigationDialog && (
          <NavigationDialog
            onClose={closeNavigationDialog}
            styles={wrapperStyle}
            pages={pages}
          />
        )}
    </>
  );
};

NavigationScreen.propTypes = {
  playerPlayingState: PropTypes.string.isRequired,
  playerStarted: PropTypes.bool.isRequired,
  openNavigationDialog: PropTypes.func.isRequired,
  isOpenNavigationDialog: PropTypes.bool.isRequired,
  pages: PropTypes.array.isRequired,
  closeNavigationDialog: PropTypes.func.isRequired
};

export default compose(
  InjectPlayerProps({
    selectProps: ({ playerPlayingState, playerStarted }) => ({
      playerPlayingState,
      playerStarted
    })
  }),
  InjectNavigationProps({
    selectProps: ({ pages, isOpenNavigationDialog }) => ({
      pages,
      isOpenNavigationDialog
    }),
    selectActions: ({ openNavigationDialog, closeNavigationDialog }) => ({
      openNavigationDialog,
      closeNavigationDialog
    })
  })
)(NavigationScreen);
