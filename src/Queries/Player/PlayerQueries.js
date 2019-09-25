import gql from 'graphql-tag';

export const GET_PLAYER = gql`
  query getPlayerForHotspotScreen {
    player @client {
      playingState
      currentTime
    }
    productIdInDetails @client
  }
`;
