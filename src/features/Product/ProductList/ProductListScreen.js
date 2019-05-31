import React from 'react';
import { compose } from 'redux';
import Tabs from '../../../components/Tabs/Tabs';
import ProductCarousel from './ProductCarousel';
import {
  InjectProductProps,
  InjectHotspotProps
} from '../../../store/redux/providers';

const ProductListScreen = (props) => {
  const { products, styles, hotspots, activeHotspotIds } = props;
  const [productsInScene, setProductsInScene] = React.useState([]);

  React.useEffect(() => {
    const hotspotProducts = activeHotspotIds.map(
      (id) => products[hotspots[id].productId]
    );

    setProductsInScene(hotspotProducts);
  }, [products, activeHotspotIds]);

  return (
    <Tabs
      styles={styles}
      tabs={['Products in this video', 'Products in this scene']}
      tabPanels={[
        <ProductCarousel products={products} />,
        <ProductCarousel products={productsInScene} />
      ]}
    />
  );
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
