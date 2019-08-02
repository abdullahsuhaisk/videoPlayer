import React from 'react';
import '../../assets/css/template1/UpdateAdress.css';

const UpdateAdress = () => {
  return (
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
              placeholder="Title"
              className="UpdateAdress--info-input"
            />
          </div>
          <div className="UpdateAdress--info-item">
            <label className="UpdateAdress--info-label">Address</label>
            <div className="UpdateAdress--info-adress">
              <input
                type="text"
                placeholder="Address line 1"
                className="UpdateAdress--info-input"
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
            <select className="UpdateAdress--info-select">
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
            />
          </div>
        </div>
        <div className="UpdateAdress--info--btn">
          <button className="UpdateAdress--info--btn-discard">Discard</button>
          <button className="UpdateAdress--info--btn-save">Save</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UpdateAdress;
