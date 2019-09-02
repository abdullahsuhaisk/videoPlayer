const productResolvers = {
  ProductType: {
    currentPrice: (product) => {
      if (!product.discount) {
        return product.price;
      }

      return parseFloat(
        (product.price - product.price * (product.discount / 100)).toFixed(2)
      );
    }
  },
  Query: {},
  Mutation: {}
};

export { productResolvers };
