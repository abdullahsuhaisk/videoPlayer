import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import 'flickity-imagesloaded';
import { getProdLinkId } from '../../../hooks/ProdLinkHook';
import FlickityProductCard from '../../../components/Flickity/FlickityProductCard';
import ProductCardContentLoader from '../../../components/ContentLoader/ProductCardContentLoader';

const GET_PLAYER = gql`
  query getPlayerForProductListInScene {
    player @client {
      currentTime
    }
  }
`;
const GET_PRODUCTS = gql`
  query getProductsForProductListInScene($prodLinkId: Int!) {
    prodLink(prodLinkId: $prodLinkId) {
      id
      hotSpots {
        id
        in
        out
        product {
          id
          name
          brand {
            id
            name
          }
          image {
            id
            thumbnailUrl
          }
          price
          discount
          currentPrice @client
          stockCount
          currency {
            id
            name
            code
            symbol
          }
        }
      }
    }
  }
`;
// TODO: change prodLinkId
const ProductListInScene = () => {
  const PRODUCT_ID = getProdLinkId();
  return (
    <Query query={GET_PRODUCTS} variables={{ prodLinkId: PRODUCT_ID }}>
      {({ loading, error, data }) => {
        if (loading) {
          return <ProductCardContentLoader single />;
        }
        if (error) {
          return null;
        }
        const { hotSpots } = data.prodLink;
        return (
          <Query query={GET_PLAYER}>
            {({
              data: {
                player: { currentTime }
              }
            }) => {
              const products = hotSpots
                .filter(
                  (hotSpot) =>
                    currentTime >= hotSpot.in - 3 &&
                    currentTime <= hotSpot.out + 3
                )
                .map((hotSpot) => {
                  return hotSpot.product;
                })
                .reduce((acc, product) => {
                  if (acc.length > 0) {
                    for (let i = 0; i < acc.length; i += 1) {
                      if (acc[i].id === product.id) {
                        break;
                      }
                      acc.push(product);
                    }
                  } else {
                    acc.push(product);
                  }
                  return acc;
                }, []);
              return (
                <FlickityProductCard products={products} key={products.id} />
              );
            }}
          </Query>
        );
      }}
    </Query>
  );
};

export default ProductListInScene;
