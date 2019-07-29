import React from 'react';

const deleteWishlistComponent = ({ deleteConsumerWishList, item, attrs }) => {
  return (
    <div>
      <button
        style={{ marginLeft: 30 }}
        onClick={() =>
          deleteConsumerWishList({
            variables: { wishListId: item.id }
          })
        }>
        <span>{attrs.loading ? 'loading' : 'X'} </span>
        <span>{attrs.error ? console.log(attrs.error) : null}</span>
      </button>
    </div>
  );
};

export default deleteWishlistComponent;
