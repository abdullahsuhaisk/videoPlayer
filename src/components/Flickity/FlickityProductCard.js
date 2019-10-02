import React from 'react';
import Flickity from 'react-flickity-component';
import 'flickity-imagesloaded';
import ProductCard from '../../features/Product/ProductList/ProductCard';

const flickityOptions = {
  cellAlign: 'left',
  contain: true,
  resize: false,
  imagesLoaded: true,
  lazyLoad: true,
  percentPosition: false
};

const FlickityProductCard = ({ products, addedWishList }) => {
  const [containerClasses, setContainerClasses] = React.useState(
    'VideoPlayerContainer'
  );
  React.useEffect(() => {
    if (products && products.length && products.length > 4) {
      setContainerClasses('VideoPlayerContainer swipeGradient');
    }
  }, [products]);
  if (products) {
    return (
      <Flickity
        className={containerClasses}
        reloadOnUpdate={true}
        options={flickityOptions}>
        {products.map((product) =>
          addedWishList ? (
            <ProductCard product={product} key={product.id} addedWishList />
          ) : (
            <ProductCard product={product} key={product.id} />
          )
        )}
      </Flickity>
    );
  }
  return 'No Products';
};
export default FlickityProductCard;
