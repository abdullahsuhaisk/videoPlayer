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
      wishLists {
        id
        name
        isPrivate
        products {
          id
          name
          price
          stockCount
          currentPrice @client
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
            imageUrl
            thumbnailUrl
          }
          brand {
            id
            name
          }
          currency {
            id
            symbol
          }
        }
      }
    }
  }
`;
export const GET_WISHLISTS_IMAGE = gql`
  query getConsumerWishList {
    consumer {
      id
      wishLists {
        id
        products {
          id
          name
          images {
            id
            thumbnailUrl
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
