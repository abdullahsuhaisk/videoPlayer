import gql from 'graphql-tag';

export const GET_PLAYER = gql`
  query getPlayerForHotspotScreen {
    player @client {
      playingState
      currentTime
      isStarted
      hotSpotShowing
    }
    productIdInDetails @client
  }
`;

export const GET_LAYOUT = gql`
  query getLayoutForScaler {
    layout @client {
      width
      height
      safeArea {
        top
        right
        bottom
        left
      }
    }
  }
`;
