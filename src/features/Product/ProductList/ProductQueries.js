import gql from 'graphql-tag';

export const GET_SUGGESTED_PRODUCTS = gql`
  query getProductsForProductList($prodLinkId: Int!) {
    prodLink(prodLinkId: $prodLinkId) {
      id
      suggestedProducts {
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
        stockCount
        currency {
          id
          name
          code
          symbol
        }
      }
    }
  }
`;
