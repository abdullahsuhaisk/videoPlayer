import React from 'react';
import Button from '../../../components/Button/Button';

const ProfileInfo = ({ setInfoEdit }) => {
  return (
    <div className="vb--tabs-profile-content-info">
      <div className="vb--tabs-profile-content-info-content">
        <div className="vb--tabs-profile-content-info-attiributes">Name</div>
        <div className="vb--tabs-profile-content-info-properties">
          Andrew Charles
        </div>
      </div>
      <div className="vb--tabs-profile-content-info-content">
        <div className="vb--tabs-profile-content-info-attiributes">
          Birthdate
        </div>
        <div className="vb--tabs-profile-content-info-properties">
          07/03/1992
        </div>
      </div>
      <div className="vb--tabs-profile-content-info-content">
        <div className="vb--tabs-profile-content-info-attiributes">Country</div>
        <div className="vb--tabs-profile-content-info-properties">France</div>
      </div>
      <div className="vb--tabs-profile-content-info-content">
        <div className="vb--tabs-profile-content-info-attiributes">Gender</div>
        <div className="vb--tabs-profile-content-info-properties">
          Not Specified
        </div>
      </div>
      <div className="vb--tabs-profile-content-info-content">
        <div className="vb--tabs-profile-content-info-attiributes">
          Phone Number
        </div>
        <div className="vb--tabs-profile-content-info-properties">
          Phone Number
        </div>
      </div>
      <div className="vb--tabs-profile-content-info--button">
        <Button onClick={() => setInfoEdit(1)}>Edit</Button>
      </div>
    </div>
  );
};

export default ProfileInfo;
