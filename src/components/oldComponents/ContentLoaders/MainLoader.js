import React from 'react';
import ContentLoader from 'react-content-loader';

const MainLoader = () => {
  return (
    <div className="MainContentLoader">
      <ContentLoader
        height={600}
        width={800}
        speed={2}
        primaryColor="#cadbe2"
        secondaryColor="#a9bac1">
        <rect x="200" y="150" rx="4" ry="4" width="400" height="300" />
      </ContentLoader>
    </div>
  );
};

export default MainLoader;
