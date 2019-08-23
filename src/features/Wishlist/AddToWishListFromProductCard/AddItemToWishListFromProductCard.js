/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { ApolloConsumer, Query, Mutation } from 'react-apollo';
import {
  GET_CONSUMER_WISHLIST,
  ADD_WISHLIST_MUTATION
} from '../wishListQueries';
import { GET_PRODUCT_ID } from '../../../components/Base/BaseQueries';
import AddNewWishList from '../PreComponent/addNewWishList';
import WishListImageGallery from './WishListImageGallery';

const AddItemToWishListFromProductCard = () => {
  const [selectedWhishListId, setselectedWhishListIdId] = useState(null);
  const [selectedItem, setselectedItem] = useState(null);
  const [wishListName, setWishListName] = useState(
    'Please write a wishlist name'
  );
  const AddedItemClassName =
    'AddToWishlist--information--wishlistItem AddToWishlist--information--wishlistItem-selected';
  const selectedRemoveClassName =
    'AddToWishlist--information--wishlistItem AddToWishlist--information--wishlistItem-selected-remove';
  const wishListItemClassName = 'AddToWishlist--information--wishlistItem ';
  const selectedItemClassName =
    'AddToWishlist--information--wishlistItem AddToWishlist--information--wishlistItemSelected';
  const [searchWishList, setSearchWishList] = useState();

  return (
    <ApolloConsumer>
      {(client) => {
        return (
          <React.Fragment>
            <Query query={GET_CONSUMER_WISHLIST} fetchPolicy="cache-first">
              {({ data, error, loading }) => {
                if (loading || error) {
                  return null;
                }
                const { consumer } = data;
                const whisLists = consumer && consumer.whisLists;
                console.log(whisLists);
                const selectedWhisListProduct =
                  consumer &&
                  consumer.whisLists &&
                  consumer.whisLists[selectedItem] &&
                  consumer.whisLists[selectedItem].products;
                // const whisListsCount = whisLists && whisLists.length;
                // console.log('Add To WishListFrom Product', whisLists);
                return (
                  <div className="AddToWishlist">
                    <WishListImageGallery
                      whisListId={selectedItem}
                      whisListProduct={selectedWhisListProduct}
                    />
                    <div className="AddToWishlist--information">
                      <i
                        className="AddToWishlist--information--close"
                        onClick={() =>
                          client.writeData({
                            data: { isAddWishListOpen: false }
                          })
                        }></i>
                      <h3 className="AddToWishlist--information--h3">
                        Add this item to wishlist
                      </h3>
                      <div className="AddToWishlist--information--search">
                        <i className="AddToWishlist--information--search--icon"></i>
                        <input
                          type="text"
                          className="AddToWishlist--information--search--input"
                          onChange={(e) => setSearchWishList(e.target.value)}
                          value={searchWishList}
                        />
                      </div>
                      <div className="AddToWishlist--information--wishlistItemContainer">
                        {whisLists.map((whisList, key) => {
                          const itemCount =
                            whisList.products !== null
                              ? whisList.products.length
                              : 0;
                          return (
                            <div
                              className={
                                selectedWhishListId &&
                                selectedWhishListId === whisList.id
                                  ? selectedItemClassName
                                  : wishListItemClassName
                              }
                              key={whisList.name + key}
                              onClick={() => {
                                setselectedItem(key);
                                setselectedWhishListIdId(whisList.id);
                              }}>
                              <figure className="AddToWishlist--information--wishlistItem--figure">
                                <img
                                  className="AddToWishlist--information--wishlistItem--figure--img"
                                  src={
                                    whisList &&
                                    whisList.products &&
                                    whisList.products[0].image &&
                                    whisList.products[0].image.thumbnailUrl
                                      ? whisList.products[0].image.thumbnailUrl
                                      : '/images/wishlist/whishlist1.jpg'
                                  }
                                  // "/images/wishlist/whishlist1.jpg"
                                />
                              </figure>
                              <div className="AddToWishlist--information--wishlistItem--titleItems">
                                <h3 className="AddToWishlist--information--wishlistItem--titleItems--h3">
                                  {whisList.name}
                                </h3>
                                <p className="AddToWishlist--information--wishlistItem--titleItems--p">
                                  {itemCount} items
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="AddToWishlist--information--btnContainer">
                        <AddNewWishList
                          classNames="AddToWishlist--information--btnContainer--createBtn"
                          title="Create new list"
                          setWishListName={setWishListName}
                          wishListName={searchWishList}
                        />
                        <Query query={GET_PRODUCT_ID}>
                          {({ data: productId }) => {
                            // console.log(productId);
                            if (productId) {
                              return (
                                <Mutation
                                  mutation={ADD_WISHLIST_MUTATION}
                                  variables={{
                                    wishListId: selectedWhishListId,
                                    ...productId
                                  }}
                                  refetchQueries={() => {
                                    // console.log('refetchQueries');
                                    return [
                                      {
                                        query: GET_CONSUMER_WISHLIST
                                      }
                                    ];
                                  }}>
                                  {(addProductToConsumerWishList) => (
                                    <button
                                      disabled={!selectedWhishListId}
                                      className="AddToWishlist--information--btnContainer--doneBtn"
                                      onClick={async () => {
                                        await addProductToConsumerWishList();
                                        client.writeData({
                                          data: { isAddWishListOpen: false }
                                        });
                                      }}>
                                      Done
                                    </button>
                                  )}
                                </Mutation>
                              );
                            }
                            return 'loading';
                          }}
                        </Query>
                      </div>
                    </div>
                  </div>
                );
              }}
            </Query>
          </React.Fragment>
        );
      }}
    </ApolloConsumer>
  );
};

export default AddItemToWishListFromProductCard;

// CLOSO THE MODAL

// <ApolloConsumer>
// {(client) => {
//   return (
//     <ShoppingButtonWrapper>
//       <div
//         className="vb--icon"
//         onClick={() =>
//           client.writeData({ data: { navigationDialogShowing: true } })
//         }
//       />
//     </ShoppingButtonWrapper>
//   );
// }}
// </ApolloConsumer>
