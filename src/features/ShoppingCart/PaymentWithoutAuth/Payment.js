import React, { useState, useEffect } from 'react';
import useForm from 'react-hook-form';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';

import InfoIcon from '../../../assets/icons/InfoIcon.svg';
import CustomIcon from '../../../assets/icons/ArrowDownIcon.svg';
import { Multiselect } from './MultiSelect';

const GET_PRODLINK = gql`
  query hotSpotShowing {
    prodlinkId @client
  }
`;

const Payment = ({
  children,
  setOrderInfo,
  orderInfo,
  client,
  setRenderOrder,
  setSpinnerShow
}) => {
  const customArrow = () => {
    return <img src={CustomIcon} alt="" />;
  };

  const CREATEORDER = (productsArray, data) => {
    const { prodlinkId } = client.readQuery({ query: GET_PRODLINK });
    const prodLinkId = parseInt(prodlinkId, 10);
    const products = productsArray;
    const paymentCard = data;
    const { buyer } = orderInfo;
    client
      .mutate({
        variables: { prodLinkId, paymentCard, buyer, products },
        mutation: gql`
          mutation createOrder(
            $prodLinkId: Int!
            $paymentCard: PaymentCardInput!
            $buyer: BuyerInput!
            $products: [ProductInput]!
          ) {
            directOrder(
              prodLinkId: $prodLinkId
              paymentCard: $paymentCard
              buyer: $buyer
              products: $products
            ) {
              status
              action
              threeDSHtmlContent
              errorMessage
            }
          }
        `
      })
      .then(({ data }) => {
        // console.log(data);
        setRenderOrder(atob(data.directOrder.threeDSHtmlContent));
        setSpinnerShow(false);
      })
      .catch((error) => {
        console.log(error);
        setSpinnerShow(false);
      });
  };
  const { prodlinkId } = client.readQuery({ query: GET_PRODLINK });

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
    if (termsValue === true) {
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
        prodLinkId: prodlinkId,
        paymentCard: data,
        products: productsArray
      });
      localStorage.setItem('guestCart', JSON.stringify([]));
      CREATEORDER(productsArray, data);
      setSpinnerShow(true);
    } else {
      setError('terms');
    }
  };

  const [monthValue, setReactSelectMonth] = useState({
    selectedOptionMonth: []
  });
  const [yearValue, setReactSelectYear] = useState({
    selectedOptionYear: []
  });

  const [termsValue, setTermsValue] = useState(false);

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

  const handleTermsChange = () => {
    setTermsValue(!termsValue);
    clearError('terms');
  };

  return (
    <div className="payment-wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className={errors.cardHolderName && 'form-control'}
            placeholder="Name On Card"
            name="cardHolderName"
            ref={register({
              required: 'This field is required'
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
              name="cvc"
              ref={register({
                required: 'This field is required',
                pattern: {
                  value: /^\d+$/,
                  message: 'Please enter only digits'
                },
                minLength: { value: 3, message: 'Enter at least 3 digits' },
                maxLength: { value: 3, message: 'Enter at most 3 digits' }
              })}
              className={errors.cvc && 'form-control'}
            />
            <p className="form--error">{errors.cvc && errors.cvc.message}</p>
          </div>
        </div>
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              className={errors.terms && 'form-control'}
              onChange={handleTermsChange}
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

export default withApollo(Payment);
