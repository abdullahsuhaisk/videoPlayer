import React, { useState } from 'react';

import AddressShow from './AddressShow';
import AddressEdit from './AddressEdit';
import AddAddress from './AddAddress';
import { GET_COUNTRIES } from '../../Queries/Profile/ProfileQueries';
import BaseQueryHoc from '../../components/HOCS/Grapqhl/BaseQueryHoc';

const updateAdress = async (Adress, setShowingAddress, setSelectedAdress) => {
  setShowingAddress(false);
  setSelectedAdress(Adress);
};

const ProfileAddressScreen = ({ addresses, data }) => {
  const [ShowingAddress, setShowingAddress] = useState(true);
  const [SelectedAdress, setSelectedAdress] = useState({});
  return ShowingAddress === true ? (
    <>
      {addresses && addresses.length !== 0 ? (
        <div className="Adresses">
          <div className="adresses--head">
            <label className="profile--head--label">Addresses</label>
          </div>
          <div className="Adresses--container">
            {addresses &&
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
              })}
          </div>
        </div>
      ) : (
        <AddAddress countries={data.countries} />
      )}
    </>
  ) : (
    <AddressEdit
      address={SelectedAdress}
      ShowingAddress={ShowingAddress}
      setShowingAddress={setShowingAddress}
      addressId={SelectedAdress.id}
      countries={data && data.countries}
    />
  );
};

export default BaseQueryHoc(ProfileAddressScreen, GET_COUNTRIES);
