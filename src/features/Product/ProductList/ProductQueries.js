import gql from 'graphql-tag';

export const GET_PRODUCTS = gql`
  query getProductsForProductList($prodLinkId: Int, $prodLinkUniqueId: String) {
    prodLink(prodLinkId: $prodLinkId, prodLinkUniqueId: $prodLinkUniqueId) {
      id
      uniqueId
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
      hotSpots {
        id
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
  }
`;
export const GET_PRODUCTS_WITH_HOTSPOT = gql`
  query getProductsForProductListInScene(
    $prodLinkId: Int
    $prodLinkUniqueId: String
  ) {
    prodLink(prodLinkId: $prodLinkId, prodLinkUniqueId: $prodLinkUniqueId) {
      id
      uniqueId
      hotSpots {
        id
        in
        out
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
  }
`;
