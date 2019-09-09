import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import FlickityProductCard from '../../../components/Flickity/FlickityProductCard';
import ProductCardContentLoader from '../../../components/ContentLoader/ProductCardContentLoader';
import 'flickity-imagesloaded';
import { GET_PRODUCTS } from './ProductQueries';

const GET_PRODLINK_ID = gql`
  query getPlayerProdLink {
    player @client {
      prodLinkUniqueId
      prodLinkId
    }
  }
`;
// TODO: change prodLinkId
const ProductsAll = () => {
  return (
    <Query query={GET_PRODLINK_ID}>
      {({ data: { player }, error, loading }) => {
        {
          /* if (loading) {
          return <ProductCardContentLoader />;
        } */
        }
        if (error) return null;
        const prodLinkIdString = player.prodLinkUniqueId;
        {
          /* console.log(player); */
        }

        // console.log(prodLinkId);
        return (
          <Query
            query={GET_PRODUCTS}
            variables={{ prodLinkUniqueId: prodLinkIdString }}>
            {({ loading, error, data }) => {
              if (loading || error) {
                return null;
              }
              const { hotSpots } = data.prodLink;
              const products = [];
              if (hotSpots && hotSpots[0]) {
                hotSpots
                  .map((hotSpot) => {
                    return hotSpot.product;
                  })
                  .map((product) =>
                    products.length > 0
                      ? products.includes(product)
                        ? null
                        : products.push(product)
                      : products.push(product)
                  );
              }

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

export default ProductsAll;
