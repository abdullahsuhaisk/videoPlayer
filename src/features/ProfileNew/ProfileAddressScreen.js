import React, { useState } from 'react';
import AddressShow from './AddressShow';
import AddressEdit from './AddressEdit';

const updateAdress = async (Adress, setShowingAddress, setSelectedAdress) => {
  setShowingAddress(false);
  setSelectedAdress(Adress);
};

const ProfileAddressScreen = ({ addresses }) => {
  const [ShowingAddress, setShowingAddress] = useState(true);
  const [SelectedAdress, setSelectedAdress] = useState({});

  return ShowingAddress === true ? (
    <div className="Adresses">
      <div className="adresses--head">
        <label className="profile--head--label">Adresses</label>
      </div>
      <div className="Adresses--container">
        {addresses.length !== 0
          ? addresses &&
            addresses.map((address) => {
              return (
                <AddressShow
                  address={address}
                  key={address.id}
                  updateAdress={updateAdress}
                  setShowingAddress={setShowingAddress}
                  setSelectedAdress={setSelectedAdress}
                />
              );
            })
          : 'Empty Address'}
      </div>
    </div>
  ) : (
    <AddressEdit
      address={SelectedAdress}
      ShowingAddress={ShowingAddress}
      setShowingAddress={setShowingAddress}
      addressId={SelectedAdress.id}
    />
  );
};

export default ProfileAddressScreen;
