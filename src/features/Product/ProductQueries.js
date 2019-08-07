import gql from 'graphql-tag';

export const GET_PRODUCT = gql`
  query getProductForProductDetailsDialog($productId: Int!) {
    product(productId: $productId) {
      id
      name
      description
      image {
        id
        imageUrl
      }
      price
      discount
      currentPrice @client
      currency {
        id
        symbol
      }
    }
  }
`;
