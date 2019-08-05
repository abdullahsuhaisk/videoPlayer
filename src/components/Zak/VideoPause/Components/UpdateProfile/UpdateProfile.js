import React from 'react';
import '../../assets/css/template1/UpdateProfile.css';

const UpdateProfile = () => {
  return (
    <React.Fragment>
      <div className="UpdateProfile">
        <div className="UpdateProfile--head">
          <img src="/images/dp.png" className="UpdateProfile--head--img" />
          <p className="UpdateProfile--head-p">Profile</p>
        </div>
        <div className="UpdateProfile--info">
          <div className="UpdateProfile--info-item">
            <label className="UpdateProfile--info-label">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="UpdateProfile--info-input"
            />
          </div>
          <div className="UpdateProfile--info-item">
            <label className="UpdateProfile--info-label">Birthdate</label>
            <input
              type="date"
              placeholder="Birthdate"
              className="UpdateProfile--info-input"
            />
          </div>
          <div className="UpdateProfile--info-item">
            <label className="UpdateProfile--info-label">Country</label>
            <select className="UpdateProfile--info-select">
              <option value="Turkey">Turkey</option>
              <option value="Algeria">Algeria</option>
              <option value="Moroco">Moroco</option>
              <option value="Brazil">Brazil</option>
            </select>
          </div>
          <div className="UpdateProfile--info-item">
            <label className="UpdateProfile--info-label">Gender</label>
            <select className="UpdateProfile--info-select">
              <option value="Not Specified">Not Specified</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="UpdateProfile--info-item">
            <label className="UpdateProfile--info-label">Phone Number</label>
            <input
              type="text"
              placeholder="Phone Number"
              className="UpdateProfile--info-input"
            />
          </div>
          <div className="UpdateProfile--info-item">
            <label className="UpdateProfile--info-label">Mail Adress</label>
            <input
              type="email"
              placeholder="Mail Adress"
              className="UpdateProfile--info-input"
            />
          </div>
        </div>
        <div className="UpdateProfile--info--btn">
          <button className="UpdateProfile--info--btn-discard">Discard</button>
          <button className="UpdateProfile--info--btn-save">Save</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UpdateProfile;
