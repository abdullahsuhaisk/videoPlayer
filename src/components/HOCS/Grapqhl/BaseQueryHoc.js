import React from 'react';
import { Query } from 'react-apollo';

const BaseQueryHoc = (WrappedComponent, QUERY, FETCPOLICY) => (props) => {
  return (
    <Query query={QUERY} fetchPolicy={FETCPOLICY || 'cache-first'}>
      {({ data, loading, error }) => {
        if (loading || error) return null;
        return <WrappedComponent data={data} {...props} />;
      }}
    </Query>
  );
};
export default BaseQueryHoc;
