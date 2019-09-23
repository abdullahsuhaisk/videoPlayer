import React from 'react';
import ContentLoader from 'react-content-loader';

const ProductCardContentLoader = ({ single, width, height }) => {
  // const buildLoader = (i, width) => {
  //   let counter = 0;
  //   let x = 0;
  //   while (counter >= i) {
  //     counter++;
  //     return (
  //       <rect
  //         x={counter * width + 10}
  //         y="8"
  //         rx="0"
  //         ry="0"
  //         width={width}
  //         height={height}
  //       />
  //     );
  //   }
  // };
  return (
    <div className="VideoPlayerContainer">
      <ContentLoader
        height={700}
        width={900}
        speed={2}
        primaryColor="#cadbe2"
        secondaryColor="#a9bac1">
        {single ? (
          <rect x="0" y="8" rx="0" ry="0" width={width} height={height} />
        ) : (
          <>
            <rect x="0" y="8" rx="0" ry="0" width={width} height={height} />
            <rect x="165" y="8" rx="0" ry="0" width={width} height={height} />
            <rect x="330" y="8" rx="0" ry="0" width={width} height={height} />
            <rect x="495" y="8" rx="0" ry="0" width={width} height={height} />
            <rect x="660" y="8" rx="0" ry="0" width={width} height={height} />
          </>
        )}
      </ContentLoader>
    </div>
  );
};
ProductCardContentLoader.defaultProps = {
  width: 150,
  height: 290
};
export default ProductCardContentLoader;
