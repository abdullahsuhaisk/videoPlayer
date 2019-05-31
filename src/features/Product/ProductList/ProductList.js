import React from 'react';
import ProductCard from './ProductCard';
import Tabs from '../../../components/Tabs/Tabs';
import Carousel from '../../../components/Carousel/Carousel';

const ProductList = (props) => {
  const { products, styles } = props;

  return (
    <Tabs
      styles={styles}
      tabs={['Products in this video', 'Products in this scene']}
      tabPanels={[
        <Carousel>
          {products &&
            Object.keys(products).map((id) => (
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
        </Carousel>,
        <span className="no-product">There is no product.</span>
      ]}
    />
  );
};

export default ProductList;
