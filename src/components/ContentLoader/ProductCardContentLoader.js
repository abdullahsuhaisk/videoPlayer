import React from 'react';
import ContentLoader from 'react-content-loader';

export default function ProductCardContentLoader() {
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
  //         height="250"
  //       />
  //     );
  //   }
  // };
  return (
    <div className="VideoPlayerContainer">
      <ContentLoader
        height={500}
        width={800}
        speed={2}
        primaryColor="#cadbe2"
        secondaryColor="#a9bac1">
        <rect x="0" y="8" rx="0" ry="0" width="114" height="250" />
        <rect x="125" y="8" rx="0" ry="0" width="114" height="250" />
        <rect x="250" y="8" rx="0" ry="0" width="114" height="250" />
        <rect x="375" y="8" rx="0" ry="0" width="114" height="250" />
        <rect x="500" y="8" rx="0" ry="0" width="114" height="250" />
      </ContentLoader>
    </div>
  );
}
