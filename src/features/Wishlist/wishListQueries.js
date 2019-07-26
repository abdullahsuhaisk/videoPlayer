import gql from 'graphql-tag';

export const IS_LOGGED_IN = gql`
  query isLoggedIn {
    isLoggedIn @client
  }
`;

export const GET_CONSUMER_WISHLIST = gql`
  query getConsumerWishList {
    consumer {
      id
      whisLists {
        id
        name
        isPrivate
        products {
          id
          name
          price
          stockCount
          discount
          rank
          header
          description
          parentId
          image {
            id
            thumbnailUrl
            imageUrl
          }
          images {
            id
          }
        }
      }
    }
  }
`;

export const WISH_LIST = gql`
  fragment wish on WishListType {
    consumer {
      id
      whisLists {
        id
        name
        isPrivate
        products {
          id
          name
          price
          stockCount
          discount
          rank
          header
          description
          parentId
          image {
            id
            thumbnailUrl
            imageUrl
          }
          images {
            id
          }
        }
      }
    }
  }
`;
