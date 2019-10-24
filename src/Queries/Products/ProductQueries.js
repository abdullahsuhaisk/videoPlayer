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
      brand {
        id
        name
        name
      }
      company {
        id
        name
        logo {
          id
          thumbnailUrl
        }
      }
      images(type: DEFAULT) {
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
