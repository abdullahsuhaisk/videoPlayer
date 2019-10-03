/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import ShoppingCartEmpty from '../Product/ProductDetails/Components/Template3/ShoppingCartEmpty';
import ShoppingCartCheckout from '../Product/ProductDetails/Components/Template3/ShoppingCartCheckout';
import ShoppingCartItem from '../Product/ProductDetails/Components/Template3/ShoppingCartItem';
import ScreenChoserQuery from '../../components/HOCS/Grapqhl/ScreenChoserQuery';

const ShoppingCartWithoutLoginContainer = ({ client }) => {
  const [localCart, setlocalCart] = useState(
    JSON.parse(localStorage.getItem('guestCart'))
  );
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPriceWithOutDiscount, settotalPriceWithOutDiscount] = useState(0);
  const [changeCount, setChangeCount] = useState(0);

  useEffect(() => {
    setlocalCart(JSON.parse(localStorage.getItem('guestCart')));
  }, [changeCount]);
  useEffect(() => {
    if (localCart) {
      let totalprice = 0;
      let totalpricewithoutdiscount = 0;
      for (let i = 0; i < localCart.length; i++) {
        totalprice +=
          localCart[i].currentPrice * localCart[i].variantInfo.quantity;
        totalpricewithoutdiscount +=
          localCart[i].price * localCart[i].variantInfo.quantity;
        setTotalPrice(totalprice);
        settotalPriceWithOutDiscount(totalpricewithoutdiscount);
      }
    }
  }, [localCart]);

  useEffect(() => {
    setlocalCart(JSON.parse(localStorage.getItem('guestCart')));
  }, []);

  return (
    <div className="shoppingcart--container">
      <div className="shoppingcart--title">Shopping Cart</div>
      <i
        className="modal--close"
        onClick={() =>
          client.writeData({
            data: { isShoppingCartShowing: false }
          })
        }></i>
      <div className="productdetail--seperator" />

      {!localCart || localCart.length === 0 ? (
        <ShoppingCartEmpty />
      ) : (
        <>
          <div className="shoppingcart-items-container">
            {localCart &&
              localCart.map((item, key) => {
                return (
                  <ShoppingCartItem
                    productId={item.productId}
                    item={item}
                    key={key}
                    setChangeCount={setChangeCount}
                    changeCount={changeCount}
                  />
                );
              })}
          </div>
          <ShoppingCartCheckout
            totalPrice={totalPrice}
            totalPriceWithOutDiscount={totalPriceWithOutDiscount}
            setChangeCount={setChangeCount}
          />
        </>
      )}
    </div>
  );
};

export default ScreenChoserQuery(ShoppingCartWithoutLoginContainer);
