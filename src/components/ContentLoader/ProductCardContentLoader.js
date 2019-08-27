import React from 'react';
import ContentLoader from 'react-content-loader';

export default function ProductCardContentLoader() {
  return (
    <div>
      <ContentLoader
        height={500}
        width={800}
        speed={2}
        primaryColor="#cadbe2"
        secondaryColor="#a9bac1">
        <rect x="0" y="50" rx="0" ry="0" width="228" height="500" />
        <rect x="250" y="50" rx="0" ry="0" width="228" height="500" />
        <rect x="500" y="50" rx="0" ry="0" width="228" height="500" />
      </ContentLoader>
    </div>
  );
}
