import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ProductCard from '../../../features/Product/ProductList/ProductCard';
import { PRODLINK_ID } from '../../../common/GrapqlConstant';

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
        variables={{ prodLinkId: PRODLINK_ID }}
        fetchPolicy="cache-first">
        {({ loading, error, data }) => {
          // console.log(data);
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
            <div className="VideoPlayerContainer flex-row">
              {products.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
          );
        }}
      </Query>
    </>
  );
};

export default AllProductsCard;
