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
        if (loading) {
          return <ProductCardContentLoader />;
        }
        if (error) return null;
        const prodLinkIdString = player.prodLinkUniqueId;
        console.log(player);
        const prodLinkIdw = prodLinkIdString;
        // console.log(prodLinkId);
        return (
          <Query
            query={GET_PRODUCTS}
            variables={{ prodLinkUniqueId: prodLinkIdw }}>
            {({ loading, error, data }) => {
              if (loading || error) {
                return null;
              }
              const { hotSpots } = data.prodLink;
              // console.log(hotSpots);
              const products = hotSpots
                .map((hotSpot) => {
                  // console.log(hotSpot.product);
                  return hotSpot.product;
                })
                .reduce((acc, product) => {
                  // console.log(acc);
                  if (acc.length > 0) {
                    // console.log(acc);
                    for (let i = 0; i < acc.length; i += 1) {
                      if (acc[i].id === product.id) {
                        break;
                      }
                      acc.push(product);
                    }
                  } else {
                    acc.push(product);
                  }
                  // console.log(product);
                  return acc;
                }, []);
              // console.log(products);

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
