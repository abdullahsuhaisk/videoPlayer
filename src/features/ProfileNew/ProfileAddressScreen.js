import React from 'react';
import AddressShow from './AddressShow';

const ProfileAddressScreen = ({ addresses }) => {
  return (
    <div className="Adresses" style={{ height: 520 }}>
      <div className="adresses--head">
        <label className="profile--head--label">Adresses</label>
      </div>
      {addresses.length !== 0
        ? addresses &&
          addresses.map((address) => {
            return <AddressShow address={address} key={address.id} />;
          })
        : 'Empty Address'}
    </div>
  );
};

export default ProfileAddressScreen;
