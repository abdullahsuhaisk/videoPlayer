import React from 'react';
import ProductList from './ProductList';
import { InjectProductProps } from '../../../store/redux/providers';

const ProductListScreen = (props) => {
  const { products } = props;

  return <ProductList products={products} />;
};

export default InjectProductProps()(ProductListScreen);
