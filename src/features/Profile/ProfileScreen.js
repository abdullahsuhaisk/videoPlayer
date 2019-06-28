import React from 'react';
import { ProfileWrapper } from './Profile.style';
import ProfileAddressComponent from './ProfileComponents/ProfileAddressComponent';
import ProfileInfoComponent from './ProfileComponents/ProfileInfoComponent';
import ProfileImageComponent from './ProfileComponents/ProfileImageComponent';

const Profile = ({}) => {
  return (
    <ProfileWrapper>
      <div className="vb--tabs--profile-container">
        <ProfileImageComponent />
        <div className="vb--tabs-profile-content">
          <ProfileInfoComponent />
          <ProfileAddressComponent />
        </div>
      </div>
    </ProfileWrapper>
  );
};
export default Profile;
