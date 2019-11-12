/* eslint-disable no-lonely-if */
import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ProductDetailImage from './Components/ProductDetailImage';
import VerticalScroll from '../../../components/VerticalScroll';
import ProductDetaiHeader from './Components/ProductDetaiHeader';
import ProductDetailPriceTemplate3 from './Components/Template3/ProductDetailPriceTemplate3';
import ProductDetailVariant from './Components/Template3/ProductDetailVariants';
import ProductDetailQuantity from './Components/Template3/ProductDetailQuantity';
import ProductDetailAddToCard from './Components/ProductDetailAddToCard';
import ProductDetailAccordion from './Components/Template3/ProductDetailAccordion';
import ProductQueryHoc from '../../../components/HOCS/Grapqhl/ProductQueryHoc';
import { GET_PRODUCT } from '../../../Queries/Products/ProductQueries';
import { getParams } from '../../../hooks/ProdLinkHook';
import ProductDetailGoToLink from './Components/ProductDetailGoToLink';

const ProductDetailWithoutAuthScreen = ({ product, client }) => {
  const [showLink, setShowLink] = useState(null);
  React.useEffect(() => {
    const isTrueSet = getParams('haslink') === 'true';
    setShowLink(isTrueSet);
  }, []);
  // console.log(showLink);
  // TODO: Templatable system must be templatable with props it's like showProductDetailHeader=true or false
  const cartItems = JSON.parse(localStorage.getItem('guestCart'))
    ? JSON.parse(localStorage.getItem('guestCart'))
    : [];
  localStorage.setItem('guestCart', JSON.stringify(cartItems));

  const [data, setData] = useState({
    color: 0,
    size: 0,
    quantity: 1,
    currencySymbol: ''
  });

  if (product) {
    const images = product.images && product.images;
    const company = product.company && product.company;
    const { currentPrice, price, discount } = product;
    const productId = product.id;
    const description = product.description && product.description;
    const currency = product.currency && product.currency;
    const brand = product.brand && product.brand;
    const link = product.link && product.link;

    const handleAddToCart = () => {
      const isAdded = cartItems.find(
        (item) =>
          item.productId === productId &&
          item.variantInfo.color === data.color &&
          item.variantInfo.size === data.size
      );
      if (isAdded) {
        const selectedCartItem = JSON.parse(
          localStorage.getItem('guestCart')
        ).find(
          (cart) =>
            cart.productId === productId &&
            cart.variantInfo.color === data.color &&
            cart.variantInfo.size === data.size
        );

        const selectedCartItemIndex = cartItems.findIndex(
          (cart) =>
            cart.productId === productId &&
            cart.variantInfo.color === data.color &&
            cart.variantInfo.size === data.size
        );

        if (
          selectedCartItem.variantInfo.size === data.size &&
          selectedCartItem.variantInfo.color === data.color
        ) {
          const newData = {
            ...data,
            quantity: data.quantity + selectedCartItem.variantInfo.quantity
          };

          selectedCartItem.variantInfo = newData;

          cartItems[selectedCartItemIndex] = {
            ...selectedCartItem,
            variantInfo: newData
          };

          localStorage.setItem('guestCart', JSON.stringify(cartItems));
          client.writeData({
            data: {
              isCurrencyError: false
            }
          });
        } else {
          // eslint-disable-next-line no-lonely-if
          if (
            cartItems.length > 0 &&
            cartItems[0].variantInfo.currencySymbol !== data.currencySymbol
          ) {
            client.writeData({
              data: {
                isCurrencyError: true
              }
            });
          } else {
            const cartItem = {
              productId,
              variantInfo: data,
              currentPrice,
              price
            };
            cartItems.push(cartItem);
            localStorage.setItem('guestCart', JSON.stringify(cartItems));
            client.writeData({
              data: {
                isCurrencyError: false
              }
            });
          }
        }
      } else {
        if (
          cartItems.length > 0 &&
          cartItems[0].variantInfo.currencySymbol !== data.currencySymbol
        ) {
          client.writeData({
            data: {
              isCurrencyError: true
            }
          });
        } else {
          const cartItem = {
            productId,
            variantInfo: data,
            currentPrice,
            price
          };
          cartItems.push(cartItem);
          localStorage.setItem('guestCart', JSON.stringify(cartItems));
          client.writeData({
            data: {
              isCurrencyError: false
            }
          });
        }
      }

      client.writeData({
        data: {
          isLoginFormShowing: false,
          isProfileOpen: false,
          whichTabItemIsRendering: 'ShoppingCartScreen',
          isShoppingCartShowing: true,
          productIdInDetails: null
        }
      });
    };

    const GET_LAYOUT = gql`
      query getLayoutForScaler {
        layout @client {
          width
          height
          safeArea {
            top
            right
            bottom
            left
          }
        }
      }
    `;
    const renderWithOutLink = () => {
      return showLink === false ? (
        <>
          <ProductDetailVariant data={data} setData={setData} />
          <ProductDetailQuantity variant={data} setVariant={setData} />
          <ProductDetailAddToCard
            handleAddToCart={handleAddToCart}
            cartItems={cartItems}
            productId={productId}
          />
        </>
      ) : (
        <ProductDetailGoToLink link={link} />
      );
    };
    return (
      <Query query={GET_LAYOUT}>
        {({ data: { layout } }) => {
          if (layout.width > 850) {
            return (
              <>
                <Fade right delay={300} duration={300}>
                  <VerticalScroll>
                    <ProductDetailImage images={images} />
                    <ProductDetaiHeader
                      productTitle={product.name}
                      brand={brand}
                    />
                    <ProductDetailPriceTemplate3
                      currentPrice={currentPrice}
                      price={price}
                      discount={discount}
                      currency={currency}
                      data={data}
                      setData={setData}
                    />
                    {renderWithOutLink()}
                    <ProductDetailAccordion description={description} />
                    <ProductDetailAccordion title="Shipping And Returns" />
                    <ProductDetailAccordion title="Care" />
                  </VerticalScroll>
                </Fade>
              </>
            );
          }
          if (layout.width <= 850) {
            return (
              <>
                <Fade right delay={300} duration={300}>
                  <ProductDetailImage images={images} />
                  <VerticalScroll>
                    <ProductDetaiHeader
                      productTitle={product.name}
                      brand={brand}
                    />
                    <ProductDetailPriceTemplate3
                      currentPrice={currentPrice}
                      price={price}
                      discount={discount}
                      currency={currency}
                      data={data}
                      setData={setData}
                    />
                    {renderWithOutLink()}
                    <ProductDetailAccordion description={description} />
                    <ProductDetailAccordion title="Shipping And Returns" />
                    <ProductDetailAccordion title="Care" />
                  </VerticalScroll>
                </Fade>
              </>
            );
          }
          return null;
        }}
      </Query>
    );
  }
  return null;
};

export default ProductQueryHoc(ProductDetailWithoutAuthScreen, GET_PRODUCT);
