import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import 'flickity-imagesloaded';
import FlickityProductCard from '../../../components/Flickity/FlickityProductCard';
// import ProductCardContentLoader from '../../../components/ContentLoader/ProductCardContentLoader';
import withQueryProdLink from '../../../components/HOCS/Grapqhl/ProdLinkQueryHoc';
import { GET_PRODUCTS_WITH_HOTSPOT } from '../../../Queries/Products/ProductQueries';

const GET_PLAYER = gql`
  query getPlayerForProductListInScene {
    player @client {
      currentTime
    }
  }
`;

// TODO: change prodLinkId
const ProductListInScene = ({ data }) => {
  const prodLink = data && data.prodLink;
  const hotSpots = prodLink && prodLink.hotSpots;
  return (
    <Query query={GET_PLAYER}>
      {({
        data: {
          player: { currentTime }
        }
      }) => {
        const products =
          hotSpots &&
          hotSpots
            .filter(
              (hotSpot) =>
                currentTime >= hotSpot.in - 3 && currentTime <= hotSpot.out + 3
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
          <FlickityProductCard
            products={products && products}
            key={products && products.id}
          />
        );
      }}
    </Query>
  );
};

export default withQueryProdLink(ProductListInScene, GET_PRODUCTS_WITH_HOTSPOT);
