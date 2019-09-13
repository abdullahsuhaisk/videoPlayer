import React from 'react';
import { Query } from 'react-apollo';
import { getProdLinkUniqueId } from '../../../hooks/ProdLinkHook';

const withQueryProdLink = (WrappedComponent, QUERY, FETCPOLICY) => (props) => {
  // useEffect(() => {
  //   console.log('Query Hoc is working');
  // }, []);
  const uniqueId = getProdLinkUniqueId();
  return (
    <Query
      query={QUERY}
      variables={{ prodLinkUniqueId: uniqueId }}
      fetchPolicy={FETCPOLICY || 'cache-first'}>
      {({ data, loading, error }) => {
        if (loading || error) return null;
        return <WrappedComponent data={data} {...props} />;
      }}
    </Query>
  );
};

export default withQueryProdLink;
