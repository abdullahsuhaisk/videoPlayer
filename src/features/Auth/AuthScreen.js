import React from 'react';
import authTemplate from './authTemplate.json';
import WidgetsRenderer from '../../components/WidgetsRenderer/WidgetsRenderer';

const ProductListScreen = () => {
  const { widgets } = authTemplate;
  return <WidgetsRenderer widgets={widgets} />;
};

export default ProductListScreen;
