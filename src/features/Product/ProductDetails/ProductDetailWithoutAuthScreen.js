import React from 'react';
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
  if (product) {
    const images = product.images && product.images;
    const company = product.company && product.company;
    const { currentPrice, price, discount } = product;
    const productId = product.id;
    const description = product.description && product.description;
    return (
      <>
        <ProductDetailImage images={images} />
        <VerticalScroll>
          <ProductDetaiHeader productTitle={product.name} company={company} />
          <ProductDetailPriceTemplate3
            currentPrice={currentPrice}
            price={price}
            discount={discount}
          />
          <ProductDetailVariant />
          <ProductDetailQuantity />
          <ProductDetailAddToCard productId={productId} client={client} />
          <ProductDetailAccordion description={description} />
          <ProductDetailAccordion title="Shipping And Returns" />
          <ProductDetailAccordion title="Care" />
        </VerticalScroll>
      </>
    );
  }
};

export default ProductQueryHoc(ProductDetailWithoutAuthScreen, GET_PRODUCT);
