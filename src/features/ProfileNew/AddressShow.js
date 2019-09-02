import React from 'react';

const AddressShow = ({
  address,
  updateAdress,
  setShowingAddress,
  setSelectedAdress
}) => {
  // console.log(address);
  const id = address && address.id;
  const name = address && address.name;
  const text = address && address.text;
  const CountryName = address && address.country && address.country.name;
  const phoneGsm = address && address.phoneGsm;
  const city = address && address.city;
  const alpha2Code = address && address.country && address.country.alpha2Code;
  return (
    <div>
      <div className="adresses--info">
        <label className="adresses--info--label">{name}</label>
        <p className="adresses--info--p">
          {text} <br />
          {city} - {alpha2Code} {CountryName} <br />
          Phone: {phoneGsm}
        </p>
      </div>
      <div className="adresses--editButtonWrapper">
        <button
          className="adresses--editButton"
          onClick={() =>
            updateAdress(address, setShowingAddress, setSelectedAdress)
          }>
          Edit
        </button>
      </div>
      {/* <hr className="adresses--hr" /> */}
    </div>
  );
};

export default AddressShow;
