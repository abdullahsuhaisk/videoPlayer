import gql from 'graphql-tag';

export const IS_LOGGED_IN = gql`
  query isLoggedIn {
    isLoggedIn @client
  }
`;

export const CART_FRAGMENT = gql`
  fragment cart on CartType {
    items {
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
        currentPrice @client
      }
      quantity
    }
  }
`;

export const ADD_PRODUCT_TO_CART = gql`
  mutation addProductToCart($productId: Int!) {
    addProductToCart(productId: $productId) {
      ...cart
    }
  }
  ${CART_FRAGMENT}
`;

export const REMOVE_ITEM = gql`
  mutation removeItem($productId: Int!) {
    deleteProductInCart(productId: $productId) {
      ...cart
    }
  }
  ${CART_FRAGMENT}
`;

export const GET_CONSUMER = gql`
  query getConsumer {
    consumer {
      id
      cart {
        ...cart
      }
    }
  }
  ${CART_FRAGMENT}
`;

export const UPDATE_PRODUCT_IN_CART = gql`
  mutation updateProductInCart($productId: Int!, $quantity: Int!) {
    updateProductInCart(productId: $productId, quantity: $quantity) {
      ...cart
    }
  }
  ${CART_FRAGMENT}
`;
