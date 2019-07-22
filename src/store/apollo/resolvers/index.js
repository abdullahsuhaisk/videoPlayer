import { authResolvers } from './authResolvers';
import { productResolvers } from './productResolvers';

const resolvers = {
  ...authResolvers,
  ...productResolvers,
  Query: {
    ...authResolvers.Query,
    ...productResolvers.Query
  },
  Mutation: {
    ...authResolvers.Mutation,
    ...productResolvers.Mutation
  }
};

export { resolvers };
