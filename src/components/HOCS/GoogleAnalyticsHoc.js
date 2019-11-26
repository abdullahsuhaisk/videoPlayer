import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

const GoogleAnalyticsHoc = (WrappedComponent, category, action, value) => (
  props
) => {
  const data = props.data;
  const product = data && data.product;
  const productId = product && product.id;
  console.log(data);
  console.log(product);
  console.log(props);
  console.log(productId);

  useEffect(() => {
    ReactGA.event({
      category,
      action,
      value
    });
  }, []);
  return <WrappedComponent {...props} />;
};
export default GoogleAnalyticsHoc;
