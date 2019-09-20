import React from 'react';
import ContentLoader from 'react-content-loader';

const ProfileLoader = () => {
  return (
    <div
      className="ProfileAdresses--Container"
      style={{ zIndex: 999, marginLeft: 30, width: '100%', marginTop: 10 }}>
      >
      <ContentLoader
        height={600}
        width={800}
        speed={2}
        primaryColor="#cadbe2"
        secondaryColor="#a9bac1">
        <rect x="0" y="0" rx="4" ry="4" width="200" height="150" />
        <rect x="300" y="0" rx="4" ry="4" width="200" height="150" />
      </ContentLoader>
    </div>
  );
};

export default ProfileLoader;
