import React, { useState, useEffect } from 'react';
import { Mutation } from 'react-apollo';
import { UPDATE_CONSUMER_ADDRESS } from './ProfileQueries';

const AddressEdit = ({ setShowingAddress, ShowingAddress, address }) => {
  const [input, setInput] = useState({
    name: '',
    text: '',
    city: '',
    countryId: ''
  });
  const [addressId, setId] = useState(null);
  useEffect(() => {
    setInput({
      name: address.name,
      text: address.text,
      city: address.city,
      countryId: address.countryId
    });
    setId(address.id);
  }, []);

  const updateField = (e) => {
    setInput({
      ...input,
      [e.target.id]: e.target.value
    });
  };
  // console.log(addressId);
  return ShowingAddress === false ? (
    <Mutation
      mutation={UPDATE_CONSUMER_ADDRESS}
      variables={{ addressId, input }}>
      {(updateConsumerAddress) => (
        <React.Fragment>
          <div className="UpdateAdress">
            <div className="UpdateAdress--head">
              <p className="UpdateAdress--head-p">Home Adress</p>
            </div>
            <div className="UpdateAdress--info">
              <div className="UpdateAdress--info-item">
                <label className="UpdateAdress--info-label">Title</label>
                <input
                  type="text"
                  className="UpdateAdress--info-input"
                  id="name"
                  onChange={updateField}
                  value={input.name}
                />
              </div>
              <div className="UpdateAdress--info-item">
                <label className="UpdateAdress--info-label">Address</label>
                <div className="UpdateAdress--info-adress">
                  <input
                    type="text"
                    className="UpdateAdress--info-input"
                    id="text"
                    onChange={updateField}
                    value={input.text}
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
                  <option value={4}>Turkey</option>
                  <option value="Algeria">Algeria</option>
                  <option value="Moroco">Moroco</option>
                  <option value="Brazil">Brazil</option>
                </select>
              </div>
              <div className="UpdateAdress--info-item">
                <label className="UpdateAdress--info-label">City</label>
                <input
                  type="text"
                  className="UpdateAdress--info-input"
                  id="city"
                  onChange={updateField}
                  value={input.city}
                />
              </div>
            </div>
            <div className="UpdateAdress--info--btn">
              <button
                className="UpdateAdress--info--btn-discard"
                onClick={() => {
                  setShowingAddress(true);
                }}>
                Discard
              </button>
              <button
                className="UpdateAdress--info--btn-save"
                onClick={() => {
                  updateConsumerAddress();
                  setShowingAddress(true);
                }}>
                Save
              </button>
            </div>
          </div>
        </React.Fragment>
      )}
    </Mutation>
  ) : null;
};

export default AddressEdit;
