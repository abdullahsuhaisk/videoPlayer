import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import Tabs from '../../../components/Tabs/Tabs';
import ProductCarousel from './ProductCarousel';
import {
  InjectProductProps,
  InjectHotspotProps
} from '../../../store/redux/providers';

const ProductListScreen = ({
  products,
  styles,
  hotspots,
  activeHotspotIds
}) => {
  const [productsInScene, setProductsInScene] = React.useState({});

  React.useEffect(() => {
    const hotspotProducts = activeHotspotIds.reduce((acc, id) => {
      const { productId } = hotspots[id];
      acc[productId] = products[productId];
      return acc;
    }, {});

    setProductsInScene(hotspotProducts);
  }, [products, activeHotspotIds]);

  return (
    <Tabs
      styles={styles}
      tabs={['Products in this scene', 'Products in this video']}
      tabPanels={[
        <ProductCarousel products={productsInScene} />,
        <ProductCarousel products={products} />
      ]}
    />
  );
};

ProductListScreen.propTypes = {
  products: PropTypes.object.isRequired,
  styles: PropTypes.object,
  hotspots: PropTypes.object.isRequired,
  activeHotspotIds: PropTypes.array.isRequired
};

ProductListScreen.defaultProps = {
  styles: {}
};

export default compose(
  InjectProductProps(),
  InjectHotspotProps({
    selectProps: ({ hotspots, activeHotspotIds }) => ({
      hotspots,
      activeHotspotIds
    })
  })
)(ProductListScreen);
