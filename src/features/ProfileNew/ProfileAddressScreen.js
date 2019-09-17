import React, { useState } from 'react';
import AddressShow from './AddressShow';
import AddressEdit from './AddressEdit';
import AddAddress from './AddAddress';
import { Query } from 'react-apollo';
import { GET_COUNTRIES } from './ProfileQueries';

const updateAdress = async (Adress, setShowingAddress, setSelectedAdress) => {
  setShowingAddress(false);
  setSelectedAdress(Adress);
};

const ProfileAddressScreen = ({ addresses }) => {
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
        <Query query={GET_COUNTRIES}>
          {({ data, loading, error }) => (
            <>
              {loading ? (
                'loading ...'
              ) : (
                <AddAddress countries={data.countries} />
              )}
            </>
          )}
        </Query>
      )}
    </>
  ) : (
    <Query query={GET_COUNTRIES}>
      {({ data, loading, error }) => (
        <>
          {loading ? (
            'loading ...'
          ) : (
            <AddressEdit
              address={SelectedAdress}
              ShowingAddress={ShowingAddress}
              setShowingAddress={setShowingAddress}
              addressId={SelectedAdress.id}
              countries={data && data.countries}
            />
          )}
        </>
      )}
    </Query>
  );
};

export default ProfileAddressScreen;
