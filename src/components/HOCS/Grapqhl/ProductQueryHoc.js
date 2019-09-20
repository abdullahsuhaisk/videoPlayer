import React from 'react';
import { Query } from 'react-apollo';

const ProductQueryHoc = (WrappedComponent, QUERY, FETCPOLICY) => (props) => {
  return (
    <Query
      query={QUERY}
      variables={{ productId: props && props.productId }}
      fetchPolicy={FETCPOLICY || 'cache-first'}>
      {({ data, loading, error, client }) => {
        if (loading || error) return null;
        console.log(data);
        return <WrappedComponent data={data} {...props} client={client} />;
      }}
    </Query>
  );
};

export default ProductQueryHoc;
