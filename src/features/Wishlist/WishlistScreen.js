import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import EmptyWishList from './EmptyWishList';
import WishListGroup from './WishListGroup';

const GET_CONSUMER_WISHLIST = gql`
  query getConsumerWishList {
    consumer {
      id
      whisLists {
        id
        name
        isPrivate
        products {
          id
          name
          price
          stockCount
          discount
          rank
          header
          description
          parentId
          image {
            id
            thumbnailUrl
            imageUrl
          }
          images {
            id
          }
        }
      }
    }
  }
`;

const WishlistScreen = () => {
  return (
    <Query query={GET_CONSUMER_WISHLIST} fetchPolicy="cache-first">
      {({ loading, error, data }) => {
        if (loading || error) {
          return null;
        }
        const { consumer } = data;
        const { whisLists } = consumer;
        // console.log(whisLists);
        if (whisLists.length === 0) {
          // TODO: TRY EMPTYWİSHLİST Case
          return <EmptyWishList />;
        }
        return (
          <div style={{ width: '100%', height: '500px', overflow: 'scroll' }}>
            <div style={{ margin: '10px' }}>
              {whisLists.map((wishList, index) => (
                <WishListGroup wishList={wishList} key={index} />
              ))}
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default WishlistScreen;

/*
  return (
    <div style={{ width: '100%', height: '500px', overflow: 'scroll' }}>
      <div style={{ margin: '10px' }}>
        {data.map((product) => (
          <WishListCardItem product={product} />
        ))}
      </div>
      <EmptyWishList />
      <div style={{ margin: '10px' }}>
        <WishListGroup />
      </div>
      <WishListGroupItem />
    </div>
  );
*/
