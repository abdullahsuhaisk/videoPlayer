import React, { Children } from 'react';
import useForm from 'react-hook-form';
import InfoIcon from '../../../assets/icons/InfoIcon.svg';
import CustomIcon from '../../../assets/icons/ArrowDownIcon.svg';
import { Multiselect } from './MultiSelect';

const Payment = ({ children }) => {
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
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="payment-wrapper">
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div className="form-group">
          <label>Card Number</label>
          <input
            type="tel"
            className={errors.cardNo && 'form-control'}
            ref={register({
              required: true,
              minLength: 12,
              maxLength: 12,
              pattern: /^\d+$/
            })}
            name="cardNo"
          />
          <p className="form--error">
            {errors.cardNo && 'This field is required'}
          </p>
        </div>
        <div className="form-wrapper-payment">
          <div className="form-group">
            <label>Expiration Month</label>
            <div className="custom-select">
              <Multiselect
                classNamePrefix="select"
                components={{
                  DropdownIndicator: customArrow
                }}
                styles={customStyles}
                id="district"
                options={[
                  { value: 1, label: '01' },
                  { value: 2, label: '02' },
                  { value: 3, label: '03' },
                  { value: 4, label: '04' },
                  { value: 5, label: '05' },
                  { value: 6, label: '06' },
                  { value: 7, label: '07' },
                  { value: 8, label: '08' },
                  { value: 9, label: '09' },
                  { value: 10, label: '10' },
                  { value: 11, label: '11' },
                  { value: 12, label: '12' }
                ]}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Expiration Year</label>
            <div className="custom-select">
              <Multiselect
                classNamePrefix="select"
                components={{
                  DropdownIndicator: customArrow
                }}
                styles={customStyles}
                id="district"
                options={[
                  { value: 2019, label: '2019' },
                  { value: 2020, label: '2020' },
                  { value: 2021, label: '2021' },
                  { value: 2022, label: '2022' },
                  { value: 2023, label: '2023' },
                  { value: 2024, label: '2024' },
                  { value: 2025, label: '2025' },
                  { value: 2026, label: '2026' },
                  { value: 2027, label: '2027' },
                  { value: 2028, label: '2028' },
                  { value: 2029, label: '2029' },
                  { value: 2030, label: '2030' }
                ]}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="with-image">
              CCV
              <img className="close-icon" src={InfoIcon} alt="Info Icon" />
            </label>
            <input
              type="tel"
              name="cvv"
              ref={register({ required: true })}
              className={errors.cvv && 'form-control'}
            />
            <p className="form--error">
              {errors.cvv && 'This field is required'}
            </p>
          </div>
        </div>
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              className={errors.terms && 'form-control'}
              ref={register({ required: true })}
              name="terms"
            />

            <span class="checkmark"></span>
          </label>
          <p>
            I have read and agree to the
            <a> Preliminary Information Conditions</a> and the
            <a> Distance Selling Agreement.</a>
          </p>
        </div>
        <p className="form--error">
          {errors.terms &&
            'You must agree to the terms & conditions to continue'}
        </p>

        {children}
      </form>
    </div>
  );
};

export default Payment;
