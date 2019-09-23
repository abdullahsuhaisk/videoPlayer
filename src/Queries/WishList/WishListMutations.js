import gql from 'graphql-tag';

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
export const DELETE_WISH_LIST = gql`
  mutation deleteConsumerWishList($whisListId: Int!) {
    deleteConsumerWishList(wishListId: $whisListId) {
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
`;
export const CREATE_NEW_WISHLIST = gql`
  mutation addNewConsumersWishList($name: String!) {
    createConsumerWishList(name: $name) {
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
`;

export const ADD_WISHLIST_MUTATION = gql`
  mutation addWishList($wishListId: Int!, $productId: Int!) {
    addProductToConsumerWishList(
      wishListId: $wishListId
      productId: $productId
    ) {
      id
      name
    }
  }
`;
export const DELETE_WISHLIST_ITEM = gql`
  mutation deleteWishListItem($wishListId: Int!, $productId: Int!) {
    deleteProductFromConsumerWishList(
      wishListId: $wishListId
      productId: $productId
    ) {
      id
      name
      isPrivate
      products {
        id
        name
        description
        parentId
        image {
          id
        }
        images {
          id
        }
        company {
          id
        }
        brand {
          id
        }
      }
    }
  }
`;
