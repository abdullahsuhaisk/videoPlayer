import gql from 'graphql-tag';

export const IMAGES = gql`
  fragment images on ImageType {
    images {
      id
      name
      imageUrl
      thumbnailUrl
    }
  }
`;
