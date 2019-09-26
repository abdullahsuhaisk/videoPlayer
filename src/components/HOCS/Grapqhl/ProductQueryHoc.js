import React from 'react';
import { Query } from 'react-apollo';
import { GET_PLAYER } from '../../../Queries/Player/PlayerQueries';

const ProductQueryHoc = (WrappedComponent, QUERY, FETCPOLICY) => (props) => {
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

  if (props.productId === undefined)
    return (
      <Query query={GET_PLAYER}>
        {({ data: { productIdInDetails } }) => {
          return renderQuery(productIdInDetails);
        }}
      </Query>
    );
  if (props.productId) {
    return { renderQuery };
  }
  return console.log('Something bad in ProductQueryHoc');
};

export default ProductQueryHoc;
