import gql from 'graphql-tag';

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
