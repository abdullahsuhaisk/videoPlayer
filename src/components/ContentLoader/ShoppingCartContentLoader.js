import React from 'react';
import ContentLoader from 'react-content-loader';

export default function ShoppingCardContentLoader({ width, height }) {
  return (
    <div className="ShoppingCartContainer">
      <div className="ShoppingCart">
        <ContentLoader
          height={500}
          width={800}
          speed={2}
          primaryColor="#cadbe2"
          secondaryColor="#a9bac1">
          <rect x="0" y="0" rx="0" ry="0" width={width} height={height} />
          <rect x="0" y="100" rx="0" ry="0" width={width} height={height} />
          <rect x="0" y="200" rx="0" ry="0" width={width} height={height} />
        </ContentLoader>
      </div>
    </div>
  );
}
