import React from 'react';
import Carousel from '../../../components/Carousel/Carousel';
import ProductCard from './ProductCard';

const ProductCarousel = (props) => {
  const { products } = props;
  const productIds = React.useMemo(() => Object.keys(products), [products]);

  return productIds.length === 0 ? (
    <span className="no-product">There is no product.</span>
  ) : (
    <Carousel>
      {productIds.map((id) => (
        <ProductCard
          key={id}
          title={products[id].name}
          brand={products[id].brand}
          currentPrice={products[id].currentPrice}
          basePrice={products[id].price}
          discountRate={products[id].discountRate}
          currency={products[id].currency}
          assets={products[id].assets}
          inStock={products[id].inStock}
        />
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
