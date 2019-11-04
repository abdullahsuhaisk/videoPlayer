import React, { useState } from 'react';
import useForm from 'react-hook-form';
import InfoIcon from '../../../assets/icons/InfoIcon.svg';
import CustomIcon from '../../../assets/icons/ArrowDownIcon.svg';
import { Multiselect } from './MultiSelect';

const Payment = ({ children, setOrderInfo, orderInfo }) => {
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
    const localCart = JSON.parse(localStorage.getItem('guestCart'));

    const productsArray = [];

    localCart.map((item) => {
      productsArray.push({
        id: item.productId,
        quantity: item.variantInfo.quantity
      });
    });

    setOrderInfo({
      ...orderInfo,
      paymentCard: data,
      products: productsArray
    });

    localStorage.setItem('guestCart', JSON.stringify([]));
  };
  const [monthValue, setReactSelectMonth] = useState({
    selectedOptionMonth: []
  });

  const [yearValue, setReactSelectYear] = useState({
    selectedOptionYear: []
  });

  const handleMultiChangeMonth = (selectedOptionMonth) => {
    if (selectedOptionMonth.length) {
      setError('expireMonth');
    }
    clearError('expireMonth');
    setValue('expireMonth', selectedOptionMonth.value);
    setReactSelectMonth({ selectedOptionMonth });
  };

  const handleMultiChangeYear = (selectedOptionYear) => {
    if (selectedOptionYear.length) {
      setError('expireYear');
    }
    clearError('expireYear');
    setValue('expireYear', selectedOptionYear.value);
    setReactSelectYear({ selectedOptionYear });
  };
  return (
    <div className="payment-wrapper">
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className={errors.cardHolderName && 'form-control'}
            placeholder="Name On Card"
            name="cardHolderName"
            ref={register({
              required: 'This field is required',
              pattern: {
                value: /^[a-zA-Z ]*$/,
                message: 'This field can only be letters'
              }
            })}
          />
          <p className="form--error">
            {errors.cardHolderName && errors.cardHolderName.message}
          </p>
        </div>
        <div className="form-group">
          <label>Card Number</label>
          <input
            type="tel"
            placeholder="---- ---- ---- ----"
            className={errors.cardNumber && 'form-control'}
            ref={register({
              required: 'This field is required',
              pattern: { value: /^\d+$/, message: 'Please enter only digits' },
              minLength: { value: 16, message: 'Enter at least 16 digits' },
              maxLength: { value: 16, message: 'Enter at most 16 digits' }
            })}
            name="cardNumber"
          />
          <p className="form--error">
            {errors.cardNumber && errors.cardNumber.message}
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
                  { value: '01', label: '01' },
                  { value: '02', label: '02' },
                  { value: '03', label: '03' },
                  { value: '04', label: '04' },
                  { value: '05', label: '05' },
                  { value: '06', label: '06' },
                  { value: '07', label: '07' },
                  { value: '08', label: '08' },
                  { value: '09', label: '09' },
                  { value: '10', label: '10' },
                  { value: '11', label: '11' },
                  { value: '12', label: '12' }
                ]}
                value={monthValue.selectedOptionMonth}
                onChange={handleMultiChangeMonth}
                ref={register(
                  { name: 'expireMonth' },
                  {
                    validate: (value) => {
                      return Array.isArray(value) ? value.length > 0 : !!value;
                    }
                  }
                )}
                error={errors.expireMonth ? 'true' : 'false'}
              />
              <p className="form--error">
                {errors.expireMonth && 'This field is required'}
              </p>
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
                options={[
                  { value: '2019', label: '2019' },
                  { value: '2020', label: '2020' },
                  { value: '2021', label: '2021' },
                  { value: '2022', label: '2022' },
                  { value: '2023', label: '2023' },
                  { value: '2024', label: '2024' },
                  { value: '2025', label: '2025' },
                  { value: '2026', label: '2026' },
                  { value: '2027', label: '2027' },
                  { value: '2028', label: '2028' },
                  { value: '2029', label: '2029' },
                  { value: '2030', label: '2030' }
                ]}
                value={yearValue.selectedOptionYear}
                onChange={handleMultiChangeYear}
                ref={register(
                  { name: 'expireYear' },
                  {
                    validate: (value) => {
                      return Array.isArray(value) ? value.length > 0 : !!value;
                    }
                  }
                )}
                error={errors.expireYear ? 'true' : 'false'}
              />
              <p className="form--error">
                {errors.expireYear && 'This field is required'}
              </p>
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
              ref={register({
                required: 'This field is required',
                pattern: {
                  value: /^\d+$/,
                  message: 'Please enter only digits'
                },
                minLength: { value: 3, message: 'Enter at least 3 digits' },
                maxLength: { value: 3, message: 'Enter at most 3 digits' }
              })}
              className={errors.cvv && 'form-control'}
            />
            <p className="form--error">{errors.cvv && errors.cvv.message}</p>
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

            <span className="checkmark"></span>
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
