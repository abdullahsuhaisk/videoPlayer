import gql from 'graphql-tag';

export const GET_VIDEO = gql`
  query getVideoForApp($prodLinkId: Int!) {
    prodLink(prodLinkId: $prodLinkId) {
      id
      name
      header
      description
      creationTime
      numberOfViews
      numberOfLikes
      numberOfShares
      numberOfComments
      numberOfProducts
      videoId
      companyId
      campaignId
      brands {
        id
        name
        header
        description
        logo {
          id
          name
          header
          thumbnailUrl
          imageUrl
        }
      }
      company {
        id
        name
        header
        description
        logo {
          id
          imageUrl
          thumbnailUrl
        }
      }
      campaign {
        id
        name
        header
        description
        creationTime
      }
      video {
        id
        name
        header
        description
        qualities {
          id
          url
        }
      }
      image {
        id
        imageUrl
        thumbnailUrl
        name
        header
        description
        type
        creationTime
      }
      hotSpots {
        id
        product {
          id
          name
          brand {
            id
            name
          }
          image {
            id
            thumbnailUrl
          }
          price
          discount
          stockCount
          currency {
            id
            name
            code
            symbol
          }
        }
      }
    }
  }
`;

export const GET_PLAYER = gql`
  query getPlayerForOverlayScreen {
    player @client {
      playingState
      currentTime
    }
  }
`;
