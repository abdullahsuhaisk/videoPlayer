import gql from 'graphql-tag';

const typeDefs = gql`
  type Player {
    isReady: Boolean!
    isStarted: Boolean!
    playingState: String!
    currentTime: Float!
    seekTo: Float!
    overlayContainerClassName: String!
  }

  type SafeArea {
    top: Float!
    right: Float!
    bottom: Float!
    left: Float!
  }

  type Layout {
    width: Float!
    height: Float!
    safeArea: SafeArea!
  }

  type UserInfo {
    displayName: String!
    email: String!
    avatarUrl: String!
  }

  extend type ProductType {
    currentPrice: Float!
  }

  extend type Query {
    player: Player!
    layout: Layout!
    isLoggedIn: Boolean!
    isLoginFormShowing: Boolean!
    isRegisterFormShowing: Boolean!
    isForgotPasswordFormShowing: Boolean!
    userInfo: UserInfo
    productIdInDetails: Int
    navigationDialogShowing: Boolean!
  }

  extend type Mutation {
    login(email: String!, password: String!): UserInfo
    loginWithGoogle: UserInfo
    loginWithFacebook: UserInfo
    logout: UserInfo
    register(email: String!, password: String!): UserInfo
    sendPasswordResetEmail(email: String!): UserInfo
  }
`;

export { typeDefs };
