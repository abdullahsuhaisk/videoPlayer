import React from 'react';

const ShoppingCartCard = (props) => {
  return (
    <React.Fragment>
      <div className="ShoppingCartCard">
        <div className="ShoppingCartCard--adress">
          <div className="ShoppingCartCard--adress--container">
            <label className="ShoppingCartCard--adress--type">
              Shipping Adress
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
            <div className="ShoppingCartCard--adress--details">
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
                  className="ShoppingCartCard--paymentInfo--card--item--input"
                  value="5678 1234 5634 9012"
                />
              </div>
              <div className="ShoppingCartCard--paymentInfo--card--item">
                <label className="ShoppingCartCard--paymentInfo--card--item--label">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  className="ShoppingCartCard--paymentInfo--card--item--input"
                  value="Richard Hendricks"
                />
              </div>
              <div className="ShoppingCartCard--paymentInfo--card--item">
                <label className="ShoppingCartCard--paymentInfo--card--item--label">
                  CVV
                </label>
                <input
                  type="text"
                  className="ShoppingCartCard--paymentInfo--card--item--input cvv-width"
                  value="543"
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
                  value="10 / 2021"
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

export default ShoppingCartCard;
