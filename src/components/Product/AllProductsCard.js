import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Carousel from '../Carousel/Carousel';
import ProductCard from '../../features/Product/ProductList/ProductCard';

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

const AllProductsCard = () => {
  return (
    <>
      <Query
        query={GET_PRODUCTS}
        variables={{ prodLinkId: 1 }}
        fetchPolicy="cache-first">
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

          return (
            <Carousel>
              {products.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </Carousel>
          );
        }}
      </Query>
    </>
  );
};

export default AllProductsCard;
