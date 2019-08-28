import React from 'react';
import { withApollo } from 'react-apollo';
import { GET_NUMBER_OF_VIDEOTHINGS } from '../../../features/Watchlist/WatchListQueries';
import { getProdLinkId } from '../../../hooks/ProdLinkHook';

const Share = ({ client }) => {
  const [shareCount, setShareCount] = React.useState(null);
  const prodLinkId = getProdLinkId();
  React.useEffect(() => {
    client
      .query({
        query: GET_NUMBER_OF_VIDEOTHINGS,
        variables: { prodLinkId }
      })
      .then(({ data }) => {
        setShareCount(data.prodLink && data.prodLink.numberOfShares);
      });
  }, []);

  return (
    <div
      className="stats--content"
      onClick={() => {
        console.log('Clicked');
      }}>
      <i className="stats--content--shareIcon loved"></i> {shareCount}
    </div>
  );
};

export default withApollo(Share);
