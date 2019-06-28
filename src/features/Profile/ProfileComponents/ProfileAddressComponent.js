import React from 'react';
import EditableAdressComponents from './EditableAdressComponent';
import Button from '../../../components/Button/Button';

const ProfileAddressComponent = () => {
  return (
    <div className="vb--tabs-profile-content-info">
      <div className="header">Adresses</div>
      <EditableAdressComponents />
      <EditableAdressComponents />
      <div className="vb--tabs-profile-content-info--button">
        <Button>Edit</Button>
      </div>
    </div>
  );
};

export default ProfileAddressComponent;
