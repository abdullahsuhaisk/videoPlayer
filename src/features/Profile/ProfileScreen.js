import React, { useState } from 'react';
import { ProfileWrapper } from './Profile.style';
import ProfileAddress from './ProfileComponents/ProfileAddress';
import ProfileInfoShow from './ProfileComponents/ProfileInfoShow';
import ProfileImage from './ProfileComponents/ProfileImage';
import EditableAdressComponents from './ProfileComponents/EditableAdress';
import EditableInfo from './ProfileComponents/EditableInfo';

const profileJSON = {
  //
};

const Profile = ({}) => {
  const [infoEdit, setInfoEdit] = useState(0);
  // İf info editing Edit button must be clicked
  const [addressEdit, setAddressEdit] = useState(0);

  return (
    <ProfileWrapper>
      <div className="vb--tabs--profile-container">
        <ProfileImage
          style={{ backgroundImage: 'url(/images/profilScreen.png)' }}
        />
        <div className="vb--tabs-profile-content">
          {infoEdit === 0 ? (
            <ProfileInfoShow setInfoEdit={setInfoEdit} />
          ) : (
            <EditableInfo setInfoEdit={setInfoEdit} />
          )}
          {addressEdit === 0 ? (
            <ProfileAddress setAddressEdit={setAddressEdit} />
          ) : (
            <EditableAdressComponents setAddressEdit={setAddressEdit} />
          )}
        </div>
      </div>
    </ProfileWrapper>
  );
};
export default Profile;

// style={{ backgroundImage: `url(${product.assets.images[0]}` }}
