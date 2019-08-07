import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ProductCarousel from './ProductCarousel';
import ProductCard from './ProductCard';
import Flickity from 'react-flickity-component';
import 'flickity-imagesloaded';

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

// TODO: change prodLinkId
const ProductsAll = () => {
  return (
    <Query query={GET_PRODUCTS} variables={{ prodLinkId: 1 }}>
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
          /* return <ProductCarousel products={products} />; */
        }
        const flickityOptions = {
          cellAlign: 'left',
          contain: true,
          resize: false,
          imagesLoaded: true,
          lazyLoad: true,
          percentPosition: false
        };
        return (
          <Flickity
            className="VideoPlayerContainer"
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
};

export default ProductsAll;
