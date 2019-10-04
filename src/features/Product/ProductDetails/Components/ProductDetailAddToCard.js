import React from 'react';

const ProductDetailAddToCard = ({ handleAddToCart, productId, cartItems }) => {
  // console.log(cartItems);
  const selectButton = () => {
    const isAdded = cartItems.find((item) => item.productId === productId);
    // if (isAdded) {
    //   return (
    //     <button
    //       style={{ backgroundColor: 'red', color: 'white' }}
    //       className="ProductDetail--addToCartBtn">
    //       <i className="ProductDetail--addToCartBtn-icon"></i>
    //       You already added it
    //     </button>
    //   );
    // }
    return (
      <button
        onClick={() => {
          handleAddToCart();
          // console.log(JSON.parse(localStorage.getItem('guestCart')));
        }}
        className="ProductDetail--addToCartBtn">
        <i className="ProductDetail--addToCartBtn-icon"></i>
        Add To Cart
      </button>
    );
  };
  return (
    <div>
      {selectButton()}
      <div className="productdetail--seperator" />
    </div>
  );
};

export default ProductDetailAddToCard;
