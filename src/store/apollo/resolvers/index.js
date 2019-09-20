import { authResolvers } from './authResolvers';
import { productResolvers } from './productResolvers';
import { videoJsResolvers } from './videoJsResolvers';

const resolvers = {
  ...authResolvers,
  ...productResolvers,
  ...videoJsResolvers,
  Query: {
    ...authResolvers.Query,
    ...productResolvers.Query,
    ...videoJsResolvers.Query
  },
  Mutation: {
    ...authResolvers.Mutation,
    ...productResolvers.Mutation,
    ...videoJsResolvers.Mutation
  }
};

export { resolvers };
