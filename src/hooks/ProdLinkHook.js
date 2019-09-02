import { useEffect, useState } from 'react';

const getUrlProdLinkId = () => {
  const urlString = window.location.href;
  const url = new URL(urlString);
  return (
    (url.searchParams.get('prodLinkId') &&
      url.searchParams.get('prodLinkId')) ||
    1
  );
};

const setProdLinkIdToApollo = async (client) => {
  const prodLinkId = getUrlProdLinkId();
  client.writeData({
    data: {
      player: {
        prodLinkId,
        __typename: 'Player'
      }
    }
  });
  return parseInt(prodLinkId, 10);
};

export function getProdLinkIdApollo(client) {
  const [id, setId] = useState(1);
  useEffect(() => {
    setProdLinkIdToApollo(client).then((res) => {
      setId(res);
    });
  }, [id]);
  return id;
}

export const getProdLinkId = () => {
  const [prodId, setProdId] = useState(getUrlProdLinkId());
  useEffect(() => {
    setProdId(getUrlProdLinkId);
  }, [prodId]);
  return parseInt(prodId, 10);
};
// http://localhost:3000/?prodLinkId=5
