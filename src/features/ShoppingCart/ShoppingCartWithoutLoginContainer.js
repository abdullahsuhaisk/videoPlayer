/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import ShoppingCartEmpty from '../Product/ProductDetails/Components/Template3/ShoppingCartEmpty';
import ShoppingCartCheckout from '../Product/ProductDetails/Components/Template3/ShoppingCartCheckout';
import ShoppingCartItem from '../Product/ProductDetails/Components/Template3/ShoppingCartItem';
import ScreenChoserQuery from '../../components/HOCS/Grapqhl/ScreenChoserQuery';
import Address from './PaymentWithoutAuth/Address';
import Payment from './PaymentWithoutAuth/Payment';
import IyzicoHtml from './PaymentWithoutAuth/IyzicoHtml';

const ShoppingCartWithoutLoginContainer = ({ client }) => {
  const [localCart, setlocalCart] = useState(
    JSON.parse(localStorage.getItem('guestCart'))
  );
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPriceWithOutDiscount, settotalPriceWithOutDiscount] = useState(0);
  const [changeCount, setChangeCount] = useState(0);
  const [orderInfo, setOrderInfo] = useState({});
  const [renderOrder, setRenderOrder] = useState(null);
  const [checkoutProcess, setCheckoutProcess] = useState(0);

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
    // Calculate total price
  }, [localCart]);
  useEffect(() => {
    setlocalCart(JSON.parse(localStorage.getItem('guestCart')));
  }, []);

  const deleteItem = (productId, variant) => {
    const indexToRemove = localCart.findIndex(
      (cart) =>
        cart.productId === productId &&
        cart.variantInfo.color === variant.color &&
        cart.variantInfo.size === variant.size
    );

    setlocalCart(localCart.splice(indexToRemove, 1));
    localStorage.setItem('guestCart', JSON.stringify(localCart));
    setChangeCount(changeCount + 1);
  };
  return (
    <Fade right duration={300}>
      <div className="shoppingcart--container">
        <div className="shoppingcart--title">
          {checkoutProcess === 0
            ? 'Shopping Cart'
            : checkoutProcess === 1
            ? 'Add New Address'
            : checkoutProcess === 2
            ? 'Payment'
            : null}
        </div>
        <i
          className="modal--close"
          onClick={() =>
            client.writeData({
              data: {
                player: {
                  __typename: 'Player',
                  playingState: 'PLAYING'
                },
                isShoppingCartShowing: false
              }
            })
          }></i>
        <div className="productdetail--seperator" />

        {!localCart || localCart.length === 0 ? (
          <ShoppingCartEmpty />
        ) : (
          <>
            {renderOrder ? (
              <iframe title="payment" id="iframeForPayment">
                <IyzicoHtml renderOrder={renderOrder} />
              </iframe>
            ) : checkoutProcess === 0 ? (
              <div className="shoppingcart-items-container">
                {localCart &&
                  localCart.map((item, index) => {
                    return (
                      <Fade right delay={index * 50} duration={400} key={index}>
                        <ShoppingCartItem
                          productId={item.productId}
                          item={item}
                          key={index}
                          setChangeCount={setChangeCount}
                          changeCount={changeCount}
                          deleteItem={deleteItem}
                        />
                      </Fade>
                    );
                  })}
              </div>
            ) : checkoutProcess === 1 ? (
              <Address
                setCheckoutProcess={setCheckoutProcess}
                orderInfo={orderInfo}
                setOrderInfo={setOrderInfo}
              />
            ) : checkoutProcess === 2 ? (
              <Payment
                orderInfo={orderInfo}
                setOrderInfo={setOrderInfo}
                setRenderOrder={setRenderOrder}
                setCheckoutProcess={setCheckoutProcess}>
                <ShoppingCartCheckout
                  totalPrice={totalPrice}
                  totalPriceWithOutDiscount={totalPriceWithOutDiscount}
                  setChangeCount={setChangeCount}
                  checkoutProcess={checkoutProcess}
                  setCheckoutProcess={setCheckoutProcess}
                />
              </Payment>
            ) : null}

            {checkoutProcess === 1 || checkoutProcess === 2 ? null : (
              <ShoppingCartCheckout
                totalPrice={totalPrice}
                totalPriceWithOutDiscount={totalPriceWithOutDiscount}
                setChangeCount={setChangeCount}
                checkoutProcess={checkoutProcess}
                setCheckoutProcess={setCheckoutProcess}
                orderInfo={orderInfo}
              />
            )}
          </>
        )}
      </div>
    </Fade>
  );
};

export default ScreenChoserQuery(ShoppingCartWithoutLoginContainer);
