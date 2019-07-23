import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import ProductListInScene from '../../features/Product/ProductList/ProductListInScene';

const GET_WHICH_PRODUCTLIST_RENDER = gql`
  query getWhichProductListRender {
    template @client {
      whichProductListrender
    }
  }
`;
const ProductInThisScene = ({ children }) => {
  return (
    // TODO: Loading and Error situtaions handle
    <>
      <Query query={GET_WHICH_PRODUCTLIST_RENDER}>
        {({ loading, error, data }) => {
          console.log(data);
          if (loading || error) {
            return null;
          }
          const { template } = data;
          if (template.whichProductListrender === 1) {
            return <>{children}</>;
          } else return null;
        }}
      </Query>
    </>
  );
};

export default ProductInThisScene;
