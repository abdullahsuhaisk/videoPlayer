import gql from 'graphql-tag';

export const GET_HOTSPOTS = gql`
  query getHotspotsForHotspotScreen(
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
        fixedPosition {
          x
          y
        }
        dynamicPositions {
          sec
          x
          y
        }
        type
        product {
          id
          name
          image {
            id
            imageUrl
          }
        }
      }
    }
  }
`;
