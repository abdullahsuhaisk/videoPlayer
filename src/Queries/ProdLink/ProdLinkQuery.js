import gql from 'graphql-tag';
import { IMAGES } from '../Fragments/image';

export const GET_HEADER_COMPANY_CAMPAING = gql`
  query get_header($prodLinkId: Int, $prodLinkUniqueId: String) {
    prodLink(prodLinkId: $prodLinkId, prodLinkUniqueId: $prodLinkUniqueId) {
      id
      header
      image {
        id
        thumbnailUrl
      }
      company {
        name
        header
      }
      campaign {
        id
        header
        name
      }
    }
  }
`;

export const GET_ALL = gql`
  query get_AllHOTSPOTS($prodLinkId: Int, $prodLinkUniqueId: String) {
    prodLink(prodLinkId: $prodLinkId, prodLinkUniqueId: $prodLinkUniqueId) {
      id
      uniqueId
      header
      hotSpots {
        id
        productId
        product {
          id
          name
          header
          image {
            id
            imageUrl
            thumbnailUrl
          }
          images {
            id
            name
            imageUrl
            thumbnailUrl
          }
          imageCount
        }
        type
        fixedPosition {
          x
          y
        }
        dynamicPositions {
          sec
          x
          y
        }
      }
      image {
        id
        thumbnailUrl
      }
      company {
        name
        header
      }
      campaign {
        id
        header
        name
      }
    }
  }
`;
