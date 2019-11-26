import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

const GoogleAnalyticsHoc = (WrappedComponent, category, action, value) => (
  props
) => {
  const data = props.data;
  const product = data && data.product;
  const productId = product && product.id;
  // console.log(data);
  // console.log(product);
  // console.log(props);
  // console.log(productId);
  // console.log(category);
  useEffect(() => {
    ReactGA.event({
      category,
      action: action + (productId ? productId : null),
      value: productId && productId
    });
  }, []);
  return <WrappedComponent {...props} />;
};
export default GoogleAnalyticsHoc;
