import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ShoppingButton from '../../Button/ShoppingButton';
import NavigationDialog from './NavigationDialog';
import { PLAYER } from '../../../common/constants';

const GET_NAVIGATION_SCREEN_STATE = gql`
  query getNavigationScreenState {
    player @client {
      isStarted
      playingState
    }
    navigationDialogShowing @client
  }
`;

const NavigationScreen = () => {
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
    <Query query={GET_NAVIGATION_SCREEN_STATE}>
      {({ data: { player, navigationDialogShowing } }) => {
        return (
          <>
            {player &&
              player.isStarted &&
              player.playingState === PLAYER.PAUSED && <ShoppingButton />}
            {navigationDialogShowing && (
              <NavigationDialog styles={wrapperStyle} />
            )}
          </>
        );
      }}
    </Query>
  );
};

export default NavigationScreen;
