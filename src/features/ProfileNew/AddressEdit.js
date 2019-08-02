import React, { useState } from 'react';

const AddressEdit = ({ setShowingAddress, ShowingAddress }) => {
  // DELETE TO UPDATEADRESS CLASS NAME ADRESS AND ADRES UPDATE MUST BE IN SAME CONTAINER
  const [input, setInput] = useState({
    name: '',
    text: '',
    city: '',
    countryId: ''
  });

  const updateField = (e) => {
    setInput({
      ...input,
      [e.target.id]: e.target.value
    });
  };
  console.log(input);
  return ShowingAddress === false ? (
    <React.Fragment>
      <div className="UpdateAdress--head">
        <p className="UpdateAdress--head-p">Home Adress</p>
      </div>
      <div className="UpdateAdress--info">
        <div className="UpdateAdress--info-item">
          <label className="UpdateAdress--info-label">Title</label>
          <input
            type="text"
            placeholder="Title"
            className="UpdateAdress--info-input"
            id="name"
            onChange={updateField}
          />
        </div>
        <div className="UpdateAdress--info-item">
          <label className="UpdateAdress--info-label">Address</label>
          <div className="UpdateAdress--info-adress">
            <input
              type="text"
              placeholder="Address line 1"
              className="UpdateAdress--info-input"
              id="text"
              onChange={updateField}
            />
            <input
              type="text"
              placeholder="Address line 2"
              className="UpdateAdress--info-input"
            />
          </div>
        </div>
        <div className="UpdateAdress--info-item">
          <label className="UpdateAdress--info-label">Country</label>
          <select
            className="UpdateAdress--info-select"
            id="countryId"
            onChange={updateField}>
            <option value="Turkey">Turkey</option>
            <option value="Algeria">Algeria</option>
            <option value="Moroco">Moroco</option>
            <option value="Brazil">Brazil</option>
          </select>
        </div>
        <div className="UpdateAdress--info-item">
          <label className="UpdateAdress--info-label">City</label>
          <input
            type="text"
            placeholder="City"
            className="UpdateAdress--info-input"
            id="city"
            onChange={updateField}
          />
        </div>
      </div>
      <div className="UpdateAdress--info--btn">
        <button className="UpdateAdress--info--btn-discard">Discard</button>
        <button
          className="UpdateAdress--info--btn-save"
          onClick={() => {
            setShowingAddress(true);
          }}>
          Save
        </button>
      </div>
    </React.Fragment>
  ) : null;
};

export default AddressEdit;
