import gql from 'graphql-tag';

export const GET_PRODUCT = gql`
  query getProductForProductDetailsDialog($productId: Int!) {
    product(productId: $productId) {
      id
      name
      description
      images {
        id
        thumbnailUrl
        imageUrl
      }
      image {
        id
        imageUrl
      }
      rank
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
