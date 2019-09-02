import gql from 'graphql-tag';

export const GET_COUNTRIES = gql`
  query getCountries {
    countries {
      id
      name
      alpha2Code
      alpha3Code
      region
      subregion
      timezone
      nativeName
      numericCode
    }
  }
`;

export const GET_PRODUCT_ID = gql`
  query getProduct {
    productId @client
  }
`;

export const LIKE_PRODLINK = gql`
  mutation LikeProdLink($prodLinkId: Int!) {
    likeProdLink(prodLinkId: $prodLinkId) {
      id
      name
      header
      description
    }
  }
`;

export const UNLIKE_PRODLINK = gql`
  mutation UnLikeProdLink($prodLinkId: Int!) {
    unlikeProdLink(prodLinkId: $prodLinkId) {
      id
      name
      header
      description
    }
  }
`;

// const likeFragment = '';

export const ADD_PRODLINK_TO_FAVORITE = gql`
  mutation AddProdLinkToFavorite($prodLinkId: Int!) {
    addProdLinkToFavorite(prodLinkId: $prodLinkId) {
      id
      name
      header
      numberOfViews
      numberOfLikes
      numberOfShares
    }
  }
`;
export const DELETE_PRODLINK_TO_FAVORITE = gql`
  mutation deleteProdLinkFromFavorite($prodLinkId: Int!) {
    deleteProdLinkFromFavorite(prodLinkId: $prodLinkId) {
      id
      name
      header
      numberOfViews
      numberOfLikes
      numberOfShares
    }
  }
`;
