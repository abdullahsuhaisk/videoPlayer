import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

// import ProductList from '../../features/Product/ProductList/ProductList';

const GET_WHICH_PRODUCTLIST_RENDER = gql`
  query getWhichProductListRender {
    template @client {
      whichProductListrender
    }
  }
`;

const AllProducts = ({ children }) => {
  return (
    <Query query={GET_WHICH_PRODUCTLIST_RENDER}>
      {({ loading, error, data }) => {
        console.log(data);
        if (loading || error) {
          return null;
        }
        const { template } = data;
        if (template.whichProductListrender === 2) {
          return <>{children}</>;
        } else return null;
      }}
    </Query>
  );
};

export default AllProducts;
