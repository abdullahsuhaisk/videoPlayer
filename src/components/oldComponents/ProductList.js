import React from 'react';
import gql from 'graphql-tag';
import Flickity from 'react-flickity-component';
import { Query } from 'react-apollo';
import 'flickity-imagesloaded';

import ProductCard from '../../features/Product/ProductList/ProductCard';

import { GET_PRODUCTS } from '../../Queries/Products/ProductQueries';

// TODO: change prodLinkId
const ProductList = () => {
  return (
    <Query query={GET_PRODUCTS} variables={{ prodLinkId: 1 }}>
      {({ loading, error, data }) => {
        if (loading) {
          return null;
        }

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

        // {
        /* return <ProductCarousel products={products} />; */
        // }
        const flickityOptions = {
          cellAlign: 'left',
          contain: true,
          resize: false,
          imagesLoaded: true,
          lazyLoad: true,
          percentPosition: false
        };
        let containerClasses = 'VideoPlayerContainer';
        containerClasses += products.length > 1 ? ' swipeGradient' : '';
        return (
          <Flickity
            className={containerClasses}
            reloadOnUpdate={true}
            options={flickityOptions}>
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </Flickity>
        );
      }}
    </Query>
  );
};

export default ProductList;
