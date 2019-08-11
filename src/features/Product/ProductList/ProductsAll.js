import React from 'react';
import gql from 'graphql-tag';
import { Query, ApolloConsumer } from 'react-apollo';
import Flickity from 'react-flickity-component';

// import ProductCarousel from './ProductCarousel';
import ProductCard from './ProductCard';
import 'flickity-imagesloaded';
// import { getProdLinkIdApollo } from '../../../hooks/ProdLinkHook';

const GET_PRODUCTS = gql`
  query getProductsForProductList($prodLinkId: Int!) {
    prodLink(prodLinkId: $prodLinkId) {
      id
      hotSpots {
        id
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
const GET_PRODLINK_ID = gql`
  query getPlayerProdLink {
    player @client {
      prodLinkId
    }
  }
`;
// TODO: change prodLinkId
const ProductsAll = () => {
  return (
    <Query query={GET_PRODLINK_ID}>
      {({ data: { player }, error }) => {
        if (error) return null;
        const prodLinkIdString = player.prodLinkId;
        const prodLinkId = parseInt(prodLinkIdString, 10);
        // console.log(prodLinkId);
        return (
          <Query query={GET_PRODUCTS} variables={{ prodLinkId }}>
            {({ loading, error, data }) => {
              console.log(data);
              if (loading || error) {
                return null;
              }

              const { hotSpots } = data.prodLink;

              const products = hotSpots
                .map((hotSpot) => hotSpot.product)
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
              {
                /* console.log(products); */
              }

              const flickityOptions = {
                cellAlign: 'left',
                contain: true,
                resize: false,
                imagesLoaded: true,
                lazyLoad: true,
                percentPosition: false
              };
              let containerClasses = 'VideoPlayerContainer';
              containerClasses += products.length > 4 ? ' swipeGradient' : '';
              return (
                <Flickity
                  className={containerClasses}
                  reloadOnUpdate={true}
                  options={flickityOptions}>
                  {products.map((product) => (
                    <ProductCard product={product} key={product.id} />
                  ))}
                </Flickity>
              );
            }}
          </Query>
        );
      }}
    </Query>
  );
};

export default ProductsAll;
