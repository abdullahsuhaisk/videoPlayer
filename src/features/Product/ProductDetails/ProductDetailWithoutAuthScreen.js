import React, { useState } from 'react';
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
  // console.log(cartItems);

  const [data, setData] = useState({ color: 0, size: 0, quality: 1 });
  if (product) {
    const images = product.images && product.images;
    const company = product.company && product.company;
    const { currentPrice, price, discount } = product;
    const productId = product.id;
    const description = product.description && product.description;
    const currency = product.currency && product.currency;

    const handleAddToCart = () => {
      const cartItem = {
        productId,
        quantitiy: data,
        currentPrice,
        price
      };
      cartItems.push(cartItem);
      localStorage.setItem('guestCart', JSON.stringify(cartItems));
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

    return (
      <>
        <ProductDetailImage images={images} />
        <VerticalScroll>
          <ProductDetaiHeader productTitle={product.name} company={company} />
          <ProductDetailPriceTemplate3
            currentPrice={currentPrice}
            price={price}
            discount={discount}
            currency={currency}
          />
          <ProductDetailVariant data={data} setData={setData} />
          <ProductDetailQuantity speciality={data} setSpeciality={setData} />
          <ProductDetailAddToCard
            handleAddToCart={handleAddToCart}
            cartItems={cartItems}
            productId={productId}
          />
          <ProductDetailAccordion description={description} />
          <ProductDetailAccordion title="Shipping And Returns" />
          <ProductDetailAccordion title="Care" />
        </VerticalScroll>
      </>
    );
  }
  return null;
};

export default ProductQueryHoc(ProductDetailWithoutAuthScreen, GET_PRODUCT);
