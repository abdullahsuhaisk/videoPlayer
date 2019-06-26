import React from 'react';

import { ProfileWrapper } from './Profile.style';

const Profile = ({}) => {
  return (
    <ProfileWrapper>
      <div className="vb--tabs--profile-container">
        <div className="vb--tabs--profile-picture" />
        <div className="vb--tabs-profile-content">
          <div className="vb--tabs-profile-content-info">
            Personel Info Section
          </div>
          <div className="vb--tabs-profile-address">Adress Section</div>
        </div>
      </div>
    </ProfileWrapper>
  );
};
export default Profile;
