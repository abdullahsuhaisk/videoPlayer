import React from 'react';
import ContentLoader from 'react-content-loader';

export default function WachtListContentLoader() {
  return (
    <div className="VideoPlayerContainer">
      <ContentLoader
        height={500}
        width={800}
        speed={2}
        primaryColor="#cadbe2"
        secondaryColor="#a9bac1">
        <rect x="0" y="10" rx="0" ry="0" width="228" height="250" />
        <rect x="250" y="10" rx="0" ry="0" width="228" height="250" />
        <rect x="500" y="10" rx="0" ry="0" width="228" height="250" />
      </ContentLoader>
    </div>
  );
}
