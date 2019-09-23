import React from 'react';
import { Query } from 'react-apollo';

import CheckOutAddressCard from './CheckOutAddressCard';
import { GET_PERSON } from '../../../Queries/Profile/ProfileQueries';

const Checkout = () => {
  // TODO: State Control
  const [selectedAddress, setSelectedAddress] = React.useState(null);
  const [payment, setPayment] = React.useState({
    cardNumber: null,
    cardHolderName: '',
    Cvv: null,
    Expiration: ''
  });
  const handleChange = (e) => {
    e.preventDefault();
    setPayment({ ...payment, [e.target.id]: e.target.value });
  };
  // console.log(payment);
  return (
    <React.Fragment>
      <div className="ShoppingCartCard">
        <div className="ShoppingCartCard--adress">
          <div className="ShoppingCartCard--adress--container">
            <label className="ShoppingCartCard--adress--type">
              Shipping Adress
            </label>
            <Query query={GET_PERSON}>
              {({ data: { consumer }, loading, error }) => {
                if (loading) return 'Loading';
                if (error) return 'Something Wrong';
                const addresses =
                  consumer && consumer ? consumer.addresses : null;
                return addresses
                  ? addresses.map((address) => (
                      <CheckOutAddressCard
                        address={address}
                        key={address.id}
                        onClicked={() => {
                          return setSelectedAddress(address.id);
                        }}
                        selectedAddress={selectedAddress}
                      />
                    ))
                  : null;
              }}
            </Query>
          </div>
          <div className="ShoppingCartCard--adress--container">
            <label className="ShoppingCartCard--adress--type">
              Invoice Adress
            </label>
            <div className="ShoppingCartCard--adress--details ShoppingCartCard--adress--selected">
              <i className="ShoppingCartCard--adress--details--edit"></i>
              <i className="ShoppingCartCard--adress--details--delete"></i>
              <span className="ShoppingCartCard--adress--details--title">
                Home Adress
              </span>
              <p className="ShoppingCartCard--adress--details--value">
                Istiklal mahallesi akdeniz caddesi tekevler sitesi
              </p>
              <p className="ShoppingCartCard--adress--details--value">
                Bursa - 91270 Turkey
              </p>
              <p className="ShoppingCartCard--adress--details--value">
                Phone: 01701077215
              </p>
            </div>
          </div>
        </div>
        <div className="ShoppingCartCard--paymentInfo">
          <div className="ShoppingCartCard--paymentInfo--card">
            <div className="ShoppingCartCard--paymentInfo--card--left">
              <label className="ShoppingCartCard--paymentInfo--card--title">
                payement detail
              </label>
              <div className="ShoppingCartCard--paymentInfo--card--item">
                <label className="ShoppingCartCard--paymentInfo--card--item--label">
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  className="ShoppingCartCard--paymentInfo--card--item--input"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="ShoppingCartCard--paymentInfo--card--item">
                <label className="ShoppingCartCard--paymentInfo--card--item--label">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  className="ShoppingCartCard--paymentInfo--card--item--input"
                  id="cardHolderName"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="ShoppingCartCard--paymentInfo--card--item">
                <label className="ShoppingCartCard--paymentInfo--card--item--label">
                  CVV
                </label>
                <input
                  type="text"
                  className="ShoppingCartCard--paymentInfo--card--item--input cvv-width"
                  id="Cvv"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div className="ShoppingCartCard--paymentInfo--card--right">
              <i className="ShoppingCartCard--visaIcon"></i>
              <div className="ShoppingCartCard--paymentInfo--card--item">
                <label className="ShoppingCartCard--paymentInfo--card--item--label">
                  Expiration
                </label>
                <input
                  type="text"
                  className="ShoppingCartCard--paymentInfo--card--item--input"
                  id="Expiration"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
          </div>
          <div className="ShoppingCartCard--paymentInfo--paymentMethod">
            <p className="ShoppingCartCard--paymentInfo--paymentMethod--p">
              or select other payment method
            </p>
            <hr className="ShoppingCartCard--paymentInfo--paymentMethod--hr" />
            <i className="ShoppingCartCard--paymentInfo--paymentMethod--paypal"></i>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Checkout;
