import { useEffect, useState } from 'react';

const setProdLinkId = async (client) => {
  const urlString = window.location.href;
  const url = new URL(urlString);
  const c = url.searchParams.get('prodLinkId')
    ? url.searchParams.get('prodLinkId')
    : 1;
  client.writeData({
    data: {
      player: {
        prodLinkId: c,
        __typename: 'Player'
      }
    }
  });
  return parseInt(c, 10);
};

export function getProdLinkId(client) {
  const [id, setId] = useState(null);
  useEffect(() => {
    setProdLinkId(client).then((res) => {
      setId(res);
    });
  }, [id]);
  return id;
}

// http://localhost:3000/?prodLinkId=5
