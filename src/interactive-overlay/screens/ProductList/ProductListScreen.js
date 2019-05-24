import React from 'react';
import productListTemplate from './productListTemplate.json';
import WidgetsRenderer from '../WidgetsRenderer';

const ProductListScreen = () => {
  const { widgets } = productListTemplate;
  return <WidgetsRenderer widgets={widgets} />;
};

export default ProductListScreen;
