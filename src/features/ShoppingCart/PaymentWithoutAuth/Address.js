import React, { useEffect, useState } from 'react';
import useForm from 'react-hook-form';
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

  const { register, handleSubmit, errors, setValue } = useForm();
  const [values, setReactSelectValue] = useState({ selectedOption: [] });

  const onSubmit = (data) => {
    setCheckoutProcess(2);
    console.log(data);
  };

  const handleMultiChange = (selectedOption) => {
    setValue('city', selectedOption);
    setReactSelectValue({ selectedOption });
  };

  useEffect(() => {
    register({ name: 'city' });
  }, [register]);

  return (
    <div className="address-wrapper">
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div className="form-wrapper">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className={errors.name && 'form-control'}
              placeholder="Name"
              name="name"
              ref={register({ required: true })}
            />
            <p className="form--error">
              {errors.name && 'This field is required'}
            </p>
          </div>
          <div className="form-group">
            <label>Surename</label>
            <input
              type="text"
              className={errors.surname && 'form-control'}
              placeholder="Your surname"
              name="surname"
              ref={register({ required: true })}
            />
            <p className="form--error">
              {errors.surname && 'This field is required'}
            </p>
          </div>
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            className={errors.phone && 'form-control'}
            placeholder="0(---)--- -- --"
            ref={register({
              required: true,
              minLength: 11,
              maxLength: 11,
              pattern: /^\d+$/
            })}
            name="phone"
          />
          <p className="form--error">
            {errors.phone && 'This field is required'}
          </p>
        </div>
        <div className="form-wrapper">
          <div className="form-group">
            <label>City</label>
            <div className="custom-select">
              <Multiselect
                classNamePrefix="select"
                value={values.selectedOption}
                components={{
                  DropdownIndicator: customArrow
                }}
                styles={customStyles}
                onChange={handleMultiChange}
                options={[
                  { value: 1, label: 'Bursa' },
                  { value: 2, label: 'Istanbul' },
                  { value: 3, label: 'Ankara' },
                  { value: 4, label: 'Adana' },
                  { value: 5, label: 'Corum' }
                ]}
                name="city"
                ref={register({ required: true })}
              />
              <p className="form--error">
                {errors.city && 'This field is required'}
              </p>
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
                options={[
                  { value: 10, label: 'Gorukule' },
                  { value: 20, label: 'Nilufer' },
                  { value: 30, label: 'Osmangazi' }
                ]}
                name="district"
                ref={register({ required: true })}
              />
              <p className="form--error">
                {errors.district && 'This field is required'}
              </p>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Address</label>
          <textarea
            className={errors.address && 'form-control'}
            placeholder="Enter your neighborhood, street, street and other information"
            ref={register({ required: true })}
            name="address"></textarea>
          <p className="form--error">
            {errors.address && 'This field is required'}
          </p>
        </div>
        <div className="form-group">
          <label>Address Name</label>
          <input
            type="text"
            name="addressName"
            className={errors.addressName && 'form-control'}
            placeholder="E.g: House Address"
            ref={register({ required: true })}
          />
          <p className="form--error">
            {errors.addressName && 'This field is required'}
          </p>
        </div>

        <div className="checkoutprocess--checkout-container">
          <input
            type="submit"
            value="Continue To Payment"
            className="checkoutprocess--checkoutbtn"></input>
        </div>
      </form>
    </div>
  );
};

export default Address;
