import React from 'react';

import Button from '../../../components/Button/Button';
import ProfileShowAddress from './ProfileShowAddress';

const ProfileAddress = ({ setAddressEdit }) => {
  return (
    <div className="vb--tabs-profile-content-info">
      <div className="header">Adresses</div>
      <ProfileShowAddress />
      <div className="vb--tabs-profile-content-info--line" />
      <ProfileShowAddress />
      <div className="vb--tabs-profile-content-info--button">
        <Button
          onClick={() => {
            setAddressEdit(1);
          }}>
          Edit
        </Button>
      </div>
    </div>
  );
};

export default ProfileAddress;
