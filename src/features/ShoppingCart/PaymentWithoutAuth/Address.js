import React, { useState } from 'react';
import useForm from 'react-hook-form';
import CustomIcon from '../../../assets/icons/ArrowDownIcon.svg';
import { Multiselect } from './MultiSelect';

const Address = ({ setCheckoutProcess, setOrderInfo }) => {
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

  const {
    register,
    handleSubmit,
    errors,
    setValue,
    setError,
    clearError
  } = useForm();

  const onSubmit = (data) => {
    setOrderInfo({ buyer: data });
    setCheckoutProcess(2);
  };

  const [cityValue, setReactSelectCity] = useState({
    selectedOptionCity: []
  });

  const [countryValue, setReactSelectCountry] = useState({
    selectedOptionCountry: []
  });

  const handleMultiChangeCity = (selectedOptionCity) => {
    if (selectedOptionCity.length) {
      setError('city');
    }
    clearError('city');
    setValue('city', selectedOptionCity.value);
    setReactSelectCity({ selectedOptionCity });
  };

  const handleMultiChangeCountry = (selectedOptionCountry) => {
    if (selectedOptionCountry.length) {
      setError('country');
    }
    clearError('country');
    setValue('country', selectedOptionCountry.value);
    setReactSelectCountry({ selectedOptionCountry });
  };
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
              ref={register({
                required: 'This field is required',
                pattern: {
                  value: /^[a-zA-Z ]*$/,
                  message: 'This field can only be letters'
                }
              })}
            />
            <p className="form--error">{errors.name && errors.name.message}</p>
          </div>
          <div className="form-group">
            <label>Surename</label>
            <input
              type="text"
              className={errors.surname && 'form-control'}
              placeholder="Your surname"
              name="surname"
              ref={register({
                required: 'This field is required',
                pattern: {
                  value: /^[a-zA-Z ]*$/,
                  message: 'Please enter only letters'
                }
              })}
            />
            <p className="form--error">
              {errors.surname && errors.surname.message}
            </p>
          </div>
        </div>
        <div className="form-group">
          <label>Identity Number</label>
          <input
            type="tel"
            className={errors.identityNumber && 'form-control'}
            placeholder="-----------"
            ref={register({
              required: 'This field is required',
              pattern: { value: /^\d+$/, message: 'Please enter only digits' },
              minLength: { value: 11, message: 'Enter at least 11 digits' },
              maxLength: { value: 11, message: 'Enter at most 11 digits' }
            })}
            name="identityNumber"
          />
          <p className="form--error">
            {errors.identityNumber && errors.identityNumber.message}
          </p>
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            className={errors.gsmNumber && 'form-control'}
            placeholder="0(---)--- -- --"
            ref={register({
              required: 'This field is required',
              pattern: { value: /^\d+$/, message: 'Please enter only digits' },
              minLength: { value: 11, message: 'Enter at least 11 digits' },
              maxLength: { value: 11, message: 'Enter at most 11 digits' }
            })}
            name="gsmNumber"
          />
          <p className="form--error">
            {errors.gsmNumber && errors.gsmNumber.message}
          </p>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            className={errors.email && 'form-control'}
            placeholder="example@example.com"
            ref={register({
              required: 'This is required',
              pattern: {
                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Invalid email address'
              }
            })}
            name="email"
          />
          <p className="form--error">{errors.email && errors.email.message}</p>
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
                options={[
                  { value: 'Bursa', label: 'Bursa' },
                  { value: 'Istanbul', label: 'Istanbul' },
                  { value: 'Ankara', label: 'Ankara' },
                  { value: 'Adana', label: 'Adana' },
                  { value: 'Corum', label: 'Corum' }
                ]}
                value={cityValue.selectedOptionCity}
                onChange={handleMultiChangeCity}
                ref={register(
                  { name: 'city' },
                  {
                    validate: (value) => {
                      return Array.isArray(value) ? value.length > 0 : !!value;
                    }
                  }
                )}
                error={errors.city ? 'true' : 'false'}
              />
              <p className="form--error">
                {errors.city && 'This field is required'}
              </p>
            </div>
          </div>
          <div className="form-group">
            <label>Country</label>
            <div className="custom-select">
              <Multiselect
                classNamePrefix="select"
                components={{
                  DropdownIndicator: customArrow
                }}
                styles={customStyles}
                options={[{ value: 'Turkey', label: 'Turkey' }]}
                value={countryValue.selectedOptionCountry}
                onChange={handleMultiChangeCountry}
                ref={register(
                  { name: 'country' },
                  {
                    validate: (value) => {
                      return Array.isArray(value) ? value.length > 0 : !!value;
                    }
                  }
                )}
                error={errors.country ? 'true' : 'false'}
              />
              <p className="form--error">
                {errors.country && 'This field is required'}
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
        {/* <div className="form-group">
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
        </div> */}

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
