import React from 'react';
import ContentLoader from 'react-content-loader';

export default function WishLisContentloader() {
  const square = 190;
  return (
    <div className="VideoPlayerContainer">
      <ContentLoader
        height={500}
        width={800}
        speed={2}
        primaryColor="#cadbe2"
        secondaryColor="#a9bac1">
        <rect x="0" y="8" rx="0" ry="0" width={square} height={square} />
        {/* <rect
          x={square + 5}
          y="8"
          rx="0"
          ry="0"
          width={square}
          height={square}
        /> */}
        {/* <rect
          x={(square + 5) * 2}
          y="8"
          rx="0"
          ry="0"
          width={square}
          height={square}
        /> */}
        {/* <rect
          x={(square + 5) * 3}
          y="8"
          rx="0"
          ry="0"
          width={square}
          height={square}
        /> */}
      </ContentLoader>
    </div>
  );
}
