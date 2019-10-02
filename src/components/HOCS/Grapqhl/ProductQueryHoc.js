import React from 'react';
import { Query } from 'react-apollo';
import { GET_PLAYER } from '../../../Queries/Player/PlayerQueries';

const ProductQueryHoc = (WrappedComponent, QUERY, SHOPPINGCART, FETCPOLICY) => (
  props
) => {
  const renderQuery = (productIdInDetails) => {
    return (
      <Query
        query={QUERY}
        variables={{
          productId: !productIdInDetails
            ? props && props.productId
            : productIdInDetails
        }}
        fetchPolicy={FETCPOLICY || 'cache-first'}>
        {({ data, loading, error, client }) => {
          if (loading || error) return null;
          const { product } = data;

          return (
            <WrappedComponent
              data={data}
              {...props}
              client={client}
              product={product}
            />
          );
        }}
      </Query>
    );
  };
  const renderShoppingCartProductCart = () => {
    return (
      <Query
        query={QUERY}
        variables={{
          productId: props.productId
        }}
        fetchPolicy={FETCPOLICY || 'cache-first'}>
        {({ data, loading, error, client }) => {
          if (loading || error) return null;
          const { product } = data;
          return (
            <WrappedComponent
              data={data}
              {...props}
              client={client}
              product={product}
            />
          );
        }}
      </Query>
    );
  };

  if (props.productId && SHOPPINGCART === true) {
    return renderShoppingCartProductCart();
  }
  if (props.productId === undefined)
    return (
      <Query query={GET_PLAYER}>
        {({ data: { productIdInDetails } }) => {
          return renderQuery(productIdInDetails);
        }}
      </Query>
    );
  if (props.productId) {
    return renderQuery();
  }
  return console.log('Something bad in ProductQueryHoc');
};

export default ProductQueryHoc;
