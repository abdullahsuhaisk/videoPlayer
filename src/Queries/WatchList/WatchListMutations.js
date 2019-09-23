import gql from 'graphql-tag';

export const ADD_WATCH_LIST = gql`
  mutation AddWachtListToVideo($prodLinkId: Int!) {
    addProdLinkToWatchList(prodLinkId: $prodLinkId) {
      id
      uniqueId
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
      uniqueId
      name
      image {
        id
      }
    }
  }
`;
