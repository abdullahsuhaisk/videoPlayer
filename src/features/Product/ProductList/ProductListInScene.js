import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import 'flickity-imagesloaded';
import { getProdLinkUniqueId } from '../../../hooks/ProdLinkHook';
import FlickityProductCard from '../../../components/Flickity/FlickityProductCard';
import ProductCardContentLoader from '../../../components/ContentLoader/ProductCardContentLoader';
import { GET_PRODUCTS_WITH_HOTSPOT } from './ProductQueries';

const GET_PLAYER = gql`
  query getPlayerForProductListInScene {
    player @client {
      currentTime
    }
  }
`;

// TODO: change prodLinkId
const ProductListInScene = () => {
  const PRODUCT_ID = getProdLinkUniqueId();
  return (
    <Query
      query={GET_PRODUCTS_WITH_HOTSPOT}
      variables={{ prodLinkUniqueId: PRODUCT_ID }}>
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
