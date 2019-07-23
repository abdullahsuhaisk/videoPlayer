import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_WHICH_PRODUCTLIST_RENDER = gql`
  query getWhichProductListRender {
    template @client {
      whichProductListrender
    }
  }
`;
// TODO: TABS COMPONENT
const TabsComponent = ({ children, itemList }) => {
  // const array = JSON.parse(itemList);
  // console.log(array)
  return (
    // TODO: Loading and Error situtaions handle
    <>
      <Query query={GET_WHICH_PRODUCTLIST_RENDER}>
        {({ data: { template } }) => {
          return <>{children}</>;
        }}
      </Query>
    </>
  );
};

export default TabsComponent;
