import { useEffect, useState } from 'react';

const getUrlProdLinkId = () => {
  const urlString = window.location.href;
  const url = new URL(urlString);
  return parseInt(
    (url.searchParams.get('prodLinkId') &&
      url.searchParams.get('prodLinkId')) ||
      1,
    10
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
  const [id, setId] = useState(getUrlProdLinkId());
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
