import gql from 'graphql-tag';

export const GET_PRODUCT = gql`
  query getProductForProductDetailsDialog($productId: Int!) {
    product(productId: $productId) {
      id
      name
      header
      description
      parentId
      description
      images {
        id
        thumbnailUrl
        imageUrl
        name
      }
      image {
        id
        imageUrl
        name
        thumbnailUrl
        type
      }
      rank
      price
      discount
      currentPrice @client
      currency {
        id
        symbol
        name
        code
      }
    }
  }
`;
