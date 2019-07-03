import React from 'react';
import Button from '../../../components/Button/Button';

const EditableInfo = ({ setInfoEdit }) => {
  return (
    <div className="vb--tabs-profile-content-info">
      <div className="vb--tabs-profile-address">
        <div className="vb--tabs-profile-content-info-content">
          <div className="vb--tabs-profile-content-info-attiributes">Name</div>
          <div
            className="vb--tabs-profile-content-info-properties"
            style={{ color: 'red' }}>
            Profile edit component under development ! Miss UX
          </div>
        </div>
        <div className="vb--tabs-profile-content-info-content">
          <div className="vb--tabs-profile-content-info-attiributes">
            BirthDay
          </div>
          <div
            className="vb--tabs-profile-content-info-properties"
            style={{ color: 'red' }}>
            Profile edit component under development ! Miss UX
          </div>
        </div>
        <div className="vb--tabs-profile-content-info--button">
          <Button onClick={() => setInfoEdit(0)}>Save</Button>
        </div>
      </div>
    </div>
  );
};

export default EditableInfo;
