import { useEffect, useState } from 'react';
import gql from 'graphql-tag';

const GETPRODLINKIDFROMUNIQUEID = gql`
  query getProdLinkIdFromUniqueId($prodLinkId: Int, $prodLinkUniqueId: String) {
    prodLink(prodLinkId: $prodLinkId, prodLinkUniqueId: $prodLinkUniqueId) {
      id
      uniqueId
    }
  }
`;

const getLocationId = (location) => {
  // http://localhost:3000/prodLinkId/9
  // http://localhost:3000/prodLinkId/avvcvxcvxc
  // location is like "prodLinkId"
  const urlString = window.location.href;
  const locationLengt = location.length;
  const searchStartPoint = urlString.search(location) + locationLengt + 1;
  const urlResult = urlString.substr(searchStartPoint, 13);
  return urlResult; // a34234nbsad
};

const setProdLinkIdToApollo = async (client) => {
  const prodLinkUniqueId = await getLocationId('prodLinkId');
  client.writeData({
    data: {
      player: {
        prodLinkUniqueId,
        __typename: 'Player'
      }
    }
  });
  client
    .query({
      query: GETPRODLINKIDFROMUNIQUEID,
      variables: { prodLinkUniqueId }
    })
    .then(({ data: { prodLink } }) => {
      client.writeData({
        data: {
          player: {
            prodLinkId: prodLink.id,
            __typename: 'Player'
          }
        }
      });
    });
  return prodLinkUniqueId;
};

export function getProdLinkIdApollo(client) {
  const [id, setId] = useState(getLocationId('prodLinkId'));
  useEffect(() => {
    setProdLinkIdToApollo(client).then((res) => {
      setId(res);
    });
  }, [id]);
  return id;
}

export const getProdLinkId = () => {
  // console.log(client);
  // const prodLinkUniqueId = getLocationId('prodLinkId');
  const [prodId, setProdId] = useState(getLocationId('prodLinkId'));
  useEffect(() => {
    setProdId(getLocationId('prodLinkId'));
  }, [prodId]);
  return parseInt(prodId, 10);

  // useEffect(() => {
  //   client
  //     .query({
  //       query: GETPRODLINKIDFROMUNIQUEID,
  //       variables: { prodLinkUniqueId }
  //     })
  //     .then(({ data: { prodLink } }) => setProdId(prodLink.id));
  // }, []);
  // return prodId;
};

export const getProdLinkUniqueId = () => {
  const [prodLinkUniqueId, setProdLinkUniqueId] = useState(
    getLocationId('prodLinkId')
  );
  useEffect(() => {
    setProdLinkUniqueId(getLocationId('prodLinkId'));
  }, [prodLinkUniqueId]);
  return prodLinkUniqueId;
};

export function getParams(params) {
  const query = window.location.search.substring(1);
  // console.log(window.location.search);
  // console.log(query);
  const vars = query.split('&');
  // console.log(vars);
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=');
    if (pair[0] === params) {
      return pair[1];
    }
  }
  return false;
}

// export const setProdLinkId = (Id) => {
//   const [prodId, setProdId] = useState(Id);
//   useEffect(() => {
//     window.history.pushState('', '', Id);
//   }, [Id]);
//   return prodId;
// };
// http://localhost:3000/?prodLinkId=5

// const getUrlProdLinkId = () => {
//   const urlString = window.location.href;
//   const url = new URL(urlString);
//   return parseInt(
//     (url.searchParams.get('prodLinkId') &&
//       url.searchParams.get('prodLinkId')) ||
//       1,
//     10
//   );
// };
