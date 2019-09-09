/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { ApolloConsumer, Query, Mutation, withApollo } from 'react-apollo';
import {
  GET_CONSUMER_WISHLIST,
  ADD_WISHLIST_MUTATION,
  DELETE_WISHLIST_ITEM
} from '../wishListQueries';
import { GET_PRODUCT_ID } from '../../../components/Base/BaseQueries';
import AddNewWishList from '../PreComponent/addNewWishList';
import WishListImageGallery from './WishListImageGallery';

const AddItemToWishListFromProductCard = ({ client }) => {
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
  const [searchWishList, setSearchWishList] = useState(
    'Create New Wish List Name'
  );
  const [PRODUCTiD, setPRODUCTiD] = useState(null);
  const wishListInsideProductsId = [];
  const hasProductWishList = [];
  // console.log(selectedWhishListId);

  const isProductInsideWishList = async (whisLists) => {
    // console.log(whisLists);
    if (whisLists) {
      whisLists.map(
        (wishlist) =>
          wishlist.products &&
          wishlist.products.map((product) =>
            wishListInsideProductsId.push(product)
          )
      );
      return wishListInsideProductsId.some(
        (product) => product.id === PRODUCTiD
      );
    }
  };

  React.useEffect(() => {
    client
      .query({
        query: GET_PRODUCT_ID,
        variables: {}
      })
      .then(({ data: { productId } }) => {
        setPRODUCTiD(productId);
      });
  }, []);
  // console.log(PRODUCTiD);
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

                const selectedWhisListProduct =
                  consumer &&
                  consumer.whisLists &&
                  consumer.whisLists[selectedItem] &&
                  consumer.whisLists[selectedItem].products;
                isProductInsideWishList(whisLists);
                {
                  /* console.log(hasProductWishList); */
                }
                {
                  /* console.log(wishListInsideProductsId); */
                }
                // const whisListsCount = whisLists && whisLists.length;
                // console.log('Add To WishListFrom Product', whisLists);
                return (
                  <div className="darkOverlay">
                    <i
                      className="modal--close"
                      onClick={() =>
                        client.writeData({
                          data: { isAddWishListOpen: false }
                        })
                      }></i>
                    <div className="AddToWishlist">
                      <WishListImageGallery
                        whisListId={selectedItem}
                        whisListProduct={selectedWhisListProduct}
                      />
                      <div className="AddToWishlist--information">
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
                            whisList.products &&
                              whisList.products.map((product) =>
                                product.id === PRODUCTiD
                                  ? hasProductWishList.push(whisList.id)
                                  : null
                              );
                            return (
                              <Mutation
                                mutation={DELETE_WISHLIST_ITEM}
                                key={whisList.name + whisList.id}>
                                {(deleteWishListItem) => {
                                  return (
                                    <div
                                      className={
                                        hasProductWishList.some(
                                          (item) => item === whisList.id
                                        )
                                          ? AddedItemClassName
                                          : selectedWhishListId &&
                                            selectedWhishListId === whisList.id
                                          ? selectedItemClassName
                                          : wishListItemClassName
                                      }
                                      key={whisList.name + key}
                                      onClick={(e) => {
                                        const { className } = e.target;
                                        setselectedItem(key);
                                        setselectedWhishListIdId(whisList.id);
                                        if (className === AddedItemClassName)
                                          deleteWishListItem({
                                            variables: {
                                              wishListId: whisList.id,
                                              productId: PRODUCTiD
                                            }
                                          });
                                      }}>
                                      <figure className="AddToWishlist--information--wishlistItem--figure">
                                        <img
                                          className="AddToWishlist--information--wishlistItem--figure--img"
                                          src={
                                            whisList &&
                                            whisList.products &&
                                            whisList.products[0].image &&
                                            whisList.products[0].image
                                              .thumbnailUrl
                                              ? whisList.products[0].image
                                                  .thumbnailUrl
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
                                }}
                              </Mutation>
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
                          {/* <Query query={GET_PRODUCT_ID}>
                          {({ data: productId }) => {
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
                        </Query> */}
                        </div>
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

export default withApollo(AddItemToWishListFromProductCard);

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
