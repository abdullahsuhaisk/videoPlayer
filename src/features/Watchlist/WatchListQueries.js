import gql from 'graphql-tag';

export const ADD_WATCHED_LIST = gql`
  mutation AddWachtListToVideo($prodLinkId: Int!) {
    addProdLinkToWatchList(prodLinkId: $prodLinkId) {
      id
      name
      image {
        id
      }
    }
  }
`;
export const DELETE_WATCHED_LIST = gql`
  mutation deleteProdLinkFromWatchList($prodLinkId: Int!) {
    deleteProdLinkFromWatchList(prodLinkId: $prodLinkId) {
      id
      name
      image {
        id
      }
    }
  }
`;
export const GET_CONSUMER_WATCHLIST = gql`
  query getConsumerWhatchList {
    consumer {
      id
      watchList {
        id
        name
        header
        description
        numberOfViews
        numberOfLikes
        numberOfShares
        image {
          id
          thumbnailUrl
        }
        videoId
        video {
          id
          duration
          image {
            id
            thumbnailUrl
          }
          qualities {
            id
            url
          }
        }
        campaign {
          id
          name
          header
        }
        company {
          id
          name
          header
          logo {
            id
            thumbnailUrl
          }
        }
        brands {
          id
          name
          logo {
            id
            name
            thumbnailUrl
          }
        }
      }
    }
  }
`;
