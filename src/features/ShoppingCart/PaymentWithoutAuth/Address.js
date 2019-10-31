import React from 'react';
import CustomIcon from '../../../assets/icons/ArrowDownIcon.svg';
import { Multiselect } from './MultiSelect';

const Address = ({ setCheckoutProcess }) => {
  const customArrow = () => {
    return <img src={CustomIcon} alt="" />;
  };

  const brandColor = '#eaeaea';

  const customStyles = {
    control: (base, state) => ({
      ...base,
      boxShadow: state.isFocused ? 0 : 0,
      borderColor: state.isFocused ? brandColor : base.borderColor,
      '&:hover': {
        borderColor: state.isFocused ? brandColor : base.borderColor
      }
    })
  };

  return (
    <div className="address-wrapper">
      <form>
        <div className="form-wrapper">
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <div className="form-group">
            <label>Surename</label>
            <input
              type="text"
              className="form-control"
              placeholder="Your surname"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            className="form-control phone"
            placeholder="0(---)--- -- --"
          />
        </div>
        <div className="form-wrapper">
          <div className="form-group">
            <label>City</label>
            <div className="custom-select">
              <Multiselect
                classNamePrefix="select"
                components={{
                  DropdownIndicator: customArrow
                }}
                styles={customStyles}
                id="district"
                options={[
                  { value: 1, label: 'Bursa' },
                  { value: 2, label: 'Istanbul' },
                  { value: 3, label: 'Ankara' },
                  { value: 4, label: 'Adana' },
                  { value: 5, label: 'Corum' }
                ]}
              />
            </div>
          </div>
          <div className="form-group">
            <label>District</label>
            <div className="custom-select">
              <Multiselect
                classNamePrefix="select"
                components={{
                  DropdownIndicator: customArrow
                }}
                styles={customStyles}
                id="district"
                options={[
                  { value: 10, label: 'Gorukule' },
                  { value: 20, label: 'Nilufer' },
                  { value: 30, label: 'Osmangazi' }
                ]}
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Address</label>
          <textarea
            className="form-control"
            placeholder="Enter your neighborhood, street, street and other information"></textarea>
        </div>
        <div className="form-group">
          <label>Address Name</label>
          <input
            type="tel"
            className="form-control phone"
            placeholder="E.g: House Address"
          />
        </div>
      </form>
      <div className="address--checkout-container">
        <div
          className="address--checkoutbtn"
          onClick={() => {
            setCheckoutProcess(2);
          }}>
          Continue To Payment
        </div>
      </div>
    </div>
  );
};

export default Address;
