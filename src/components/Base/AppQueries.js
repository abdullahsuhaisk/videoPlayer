import gql from 'graphql-tag';

export const VIDEO_FRAGMENT = gql`
  fragment videoFr on VideoType {
    id
    name
    header
    description
    qualities {
      id
      url
      quality
      type
      storageId
      storageBucket
      storageGeneration
      storageName
    }
  }
`;

export const GET_VIDEO = gql`
  query getVideoForApp($prodLinkId: Int, $prodLinkUniqueId: String) {
    prodLink(prodLinkId: $prodLinkId, prodLinkUniqueId: $prodLinkUniqueId) {
      id
      uniqueId
      name
      header
      description
      creationTime
      numberOfViews
      numberOfLikes
      numberOfShares
      numberOfComments
      numberOfProducts
      videoId
      companyId
      campaignId
      brands {
        id
        name
        header
        description
        logo {
          id
          name
          header
          thumbnailUrl
          imageUrl
        }
      }
      company {
        id
        name
        header
        description
        logo {
          id
          imageUrl
          thumbnailUrl
        }
      }
      video {
        ...videoFr
      }
      image {
        id
        imageUrl
        thumbnailUrl
        name
        header
        description
        type
        creationTime
      }
    }
  }
  ${VIDEO_FRAGMENT}
`;

export const GET_VIDEO_QUALITIES = gql`
  query getVideoForApp($prodLinkId: Int, $prodLinkUniqueId: String) {
    prodLink(prodLinkId: $prodLinkId, prodLinkUniqueId: $prodLinkUniqueId) {
      video {
        ...videoFr
      }
    }
  }
  ${VIDEO_FRAGMENT}
`;
export const GET_PLAYER = gql`
  query getPlayerForOverlayScreen {
    player @client {
      playingState
      currentTime
      currentQuality
    }
  }
`;
