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

const ProductDetailWithoutAuthScreen = ({ product, client }) => {
  // TODO: Templatable system must be templatable with props it's like showProductDetailHeader=true or false
  const cartItems = JSON.parse(localStorage.getItem('guestCart'))
    ? JSON.parse(localStorage.getItem('guestCart'))
    : [];
  localStorage.setItem('guestCart', JSON.stringify(cartItems));

  const [data, setData] = useState({ color: 0, size: 0, quantity: 1 });

  if (product) {
    const images = product.images && product.images;
    const company = product.company && product.company;
    const { currentPrice, price, discount } = product;
    const productId = product.id;
    const description = product.description && product.description;
    const currency = product.currency && product.currency;

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
        } else {
          const cartItem = {
            productId,
            variantInfo: data,
            currentPrice,
            price
          };
          cartItems.push(cartItem);
          localStorage.setItem('guestCart', JSON.stringify(cartItems));
        }
      } else {
        const cartItem = {
          productId,
          variantInfo: data,
          currentPrice,
          price
        };
        cartItems.push(cartItem);
        localStorage.setItem('guestCart', JSON.stringify(cartItems));
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
                      company={company}
                    />
                    <ProductDetailPriceTemplate3
                      currentPrice={currentPrice}
                      price={price}
                      discount={discount}
                      currency={currency}
                    />
                    <ProductDetailVariant data={data} setData={setData} />
                    <ProductDetailQuantity
                      variant={data}
                      setVariant={setData}
                    />
                    <ProductDetailAddToCard
                      handleAddToCart={handleAddToCart}
                      cartItems={cartItems}
                      productId={productId}
                    />
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
                      company={company}
                    />
                    <ProductDetailPriceTemplate3
                      currentPrice={currentPrice}
                      price={price}
                      discount={discount}
                      currency={currency}
                    />
                    <ProductDetailVariant data={data} setData={setData} />
                    <ProductDetailQuantity
                      variant={data}
                      setVariant={setData}
                    />
                    <ProductDetailAddToCard
                      handleAddToCart={handleAddToCart}
                      cartItems={cartItems}
                      productId={productId}
                    />
                    <ProductDetailAccordion description={description} />
                    <ProductDetailAccordion title="Shipping And Returns" />
                    <ProductDetailAccordion title="Care" />
                  </VerticalScroll>
                </Fade>
              </>
            );
          }
        }}
      </Query>
    );
  }
  return null;
};

export default ProductQueryHoc(ProductDetailWithoutAuthScreen, GET_PRODUCT);
