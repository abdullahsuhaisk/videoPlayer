import React from 'react';
import ContentLoader from 'react-content-loader';

export default function ShoppingCardContentLoader() {
  return (
    <div>
      <ContentLoader
        height={500}
        width={800}
        speed={2}
        primaryColor="#cadbe2"
        secondaryColor="#a9bac1">
        <rect x="0" y="50" rx="0" ry="0" width="1000" height="100" />
        <rect x="0" y="180" rx="0" ry="0" width="1000" height="100" />
        <rect x="0" y="300" rx="0" ry="0" width="1000" height="100" />
      </ContentLoader>
    </div>
  );
}
