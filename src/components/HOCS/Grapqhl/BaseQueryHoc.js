import React from 'react';
import { Query } from 'react-apollo';

const BaseQueryHoc = (WrappedComponent, QUERY, FETCPOLICY) => (props) => {
  return (
    <Query query={QUERY} fetchPolicy={FETCPOLICY || 'cache-first'}>
      {({ data, loading, error, client }) => {
        if (loading || error) return null;
        return <WrappedComponent data={data} {...props} client={client} />;
      }}
    </Query>
  );
};
export default BaseQueryHoc;
