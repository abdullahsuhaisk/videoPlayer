import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../../components/Carousel/Carousel';
import ProductCard from '../../features/Product/ProductList/ProductCard';

const ProductCarousel = ({ products }) => {
  return products.length === 0 ? (
    <span className="no-product">There is no product.</span>
  ) : (
    <Carousel>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Carousel>
  );
};

ProductCarousel.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductCarousel;
