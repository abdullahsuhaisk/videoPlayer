import React, { useState, useEffect } from 'react';
import { Mutation, Query } from 'react-apollo';

import { UPDATE_CONSUMER_PROFILE } from '../../Queries/Profile/ProfileQueries';
import { GET_COUNTRIES } from '../../components/Base/BaseQueries';
import BaseQueryHoc from '../../components/HOCS/Grapqhl/BaseQueryHoc';

const ProfileEdit = ({ consumer, setShowingProfile, data }) => {
  const [input, setInput] = useState({
    name: '',
    birthDate: '',
    countryId: null,
    gender: '',
    phone: ''
  });
  //     email: ''
  useEffect(() => {
    setInput({
      name: consumer.name,
      birthDate: consumer.birthDate,
      countryId: parseInt(consumer.countryId, 10),
      gender: consumer.gender,
      phone: consumer.phone
    });
  }, []);

  // email: consumer.email
  const updateField = (e) => {
    if (e.target.id === 'countryId') {
      setInput({
        ...input,
        [e.target.id]: parseInt(e.target.value, 10)
      });
    } else
      setInput({
        ...input,
        [e.target.id]: e.target.value
      });
  };

  const { countries } = data;
  return (
    <Mutation mutation={UPDATE_CONSUMER_PROFILE} variables={{ input }}>
      {(updateConsumer) => (
        <React.Fragment>
          <div className="UpdateProfile">
            <div className="UpdateProfile--head">
              <img
                src="/images/dp.png"
                className="UpdateProfile--head--img"
                alt="profile"
              />
              <p className="UpdateProfile--head-p">Profile</p>
            </div>
            <div className="UpdateProfile--info">
              <div className="UpdateProfile--info-item">
                <label className="UpdateProfile--info-label">Name</label>
                <input
                  type="text"
                  value={input.name}
                  className="UpdateProfile--info-input"
                  onChange={updateField}
                  id="name"
                />
              </div>
              <div className="UpdateProfile--info-item">
                <label className="UpdateProfile--info-label">Birthdate</label>
                <input
                  type="date"
                  value={input.birthDate}
                  placeholder="Birthdate"
                  className="UpdateProfile--info-input"
                  onChange={updateField}
                  id="birthDate"
                />
              </div>

              <div className="UpdateProfile--info-item">
                <label className="UpdateProfile--info-label">Country</label>
                <select
                  className="UpdateProfile--info-select"
                  onChange={updateField}
                  id="countryId">
                  <option value={input.countryId}>
                    {input.countryId !== null
                      ? countries.map((item) =>
                          item.id === input.countryId ? item.name : null
                        )
                      : null}
                  </option>
                  {countries.map((item) => (
                    <option value={item.id} key={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="UpdateProfile--info-item">
                <label className="UpdateProfile--info-label">Gender</label>
                <select
                  className="UpdateProfile--info-select"
                  onChange={updateField}
                  id="gender">
                  <option value="Not Specified">Not Specified</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="UpdateProfile--info-item">
                <label className="UpdateProfile--info-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="UpdateProfile--info-input"
                  onChange={updateField}
                  id="phone"
                  value={consumer.phone}
                />
              </div>
              <div className="UpdateProfile--info-item">
                <label className="UpdateProfile--info-label">Mail Adress</label>
                <input
                  type="email"
                  value={consumer.email}
                  className="UpdateProfile--info-input"
                  id="email"
                />
              </div>
            </div>
            <div className="UpdateProfile--info--btn">
              <button
                className="UpdateProfile--info--btn-discard"
                onClick={() => {
                  setShowingProfile(true);
                }}>
                Discard
              </button>
              <button
                className="UpdateProfile--info--btn-save"
                onClick={() => {
                  updateConsumer();
                  setShowingProfile(true);
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

export default BaseQueryHoc(ProfileEdit, GET_COUNTRIES);
