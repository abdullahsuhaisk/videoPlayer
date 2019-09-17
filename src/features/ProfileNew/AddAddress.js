import React, { useState, useEffect } from 'react';
import { Mutation } from 'react-apollo';
import { ADD_CONSUMER_ADDRESS, GET_PERSON } from './ProfileQueries';

const AddAddress = ({ countries }) => {
  // DELETE TO UPDATEADRESS CLASS NAME ADRESS AND ADRES UPDATE MUST BE IN SAME CONTAINER
  const [input, setInput] = useState({
    name: '',
    text: '',
    city: '',
    countryId: ''
  });
  useEffect(() => {
    // setId(address.id);
  }, []);

  const updateField = (e) => {
    const value =
      e.target.id === 'countryId'
        ? parseInt(e.target.value, 10)
        : e.target.value;
    setInput({
      ...input,
      [e.target.id]: value
    });
  };
  // const normalized = () => {
  //   setInput({

  //   })
  // }
  return (
    <Mutation
      mutation={ADD_CONSUMER_ADDRESS}
      variables={{ input }}
      refetchQueries={[
        {
          query: GET_PERSON,
          fetchPolicy: 'no-cache'
        }
      ]}>
      {(addConsumerAddress) => (
        <React.Fragment>
          <div className="UpdateAdress">
            <div className="UpdateAdress--head">
              <p className="UpdateAdress--head-p">Address</p>
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
                  {countries.map((country) => (
                    <option value={country.id}>{country.name}</option>
                  ))}
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
                className="UpdateAdress--info--btn-save"
                onClick={() => {
                  // console.log(input);
                  addConsumerAddress();
                  // setShowingAddress(true);
                }}>
                Save
              </button>
            </div>
          </div>
        </React.Fragment>
      )}
    </Mutation>
  );
};

export default AddAddress;
