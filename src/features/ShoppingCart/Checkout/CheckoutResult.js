import React from 'react';
import { Query } from 'react-apollo';
import { GET_PERSON } from '../../ProfileNew/ProfileQueries';

const CheckoutResult = ({ totalPrice }) => {
  return (
    <React.Fragment>
      <div className="PaymentSuccess">
        <div className="PaymentSuccess--illustration">
          <img src="/images/payment-success.svg" alt="Payment Success" />
        </div>
        <div className="PaymentSuccess--details">
          <p className="PaymentSuccess--details--title">Payment Successful</p>
          <p className="PaymentSuccess--details--info">
            Your payment has been processed. Details of transaction sended to
            <Query query={GET_PERSON}>
              {({ data: { consumer }, loading, error }) => {
                return (
                  <span className="PaymentSuccess--details--info--highlight">
                    {consumer.email}
                  </span>
                );
              }}
            </Query>
          </p>
          <div className="PaymentSuccess--details--transaction">
            <p className="PaymentSuccess--details--transaction--title">
              Transaction ID
            </p>
            <p className="PaymentSuccess--details--transaction--id">
              1MJG2YPAKXBM8UEUCMD31M1LJSEU6
            </p>
            <div className="PaymentSuccess--details--transaction--info">
              <label className="PaymentSuccess--details--transaction--info--label">
                Total Amount Paid
              </label>
              <p className="PaymentSuccess--details--transaction--info--value">
                ${totalPrice}
              </p>
            </div>
            <hr className="PaymentSuccess--details--transaction--hr" />
            <div className="PaymentSuccess--details--transaction--info">
              <label className="PaymentSuccess--details--transaction--info--label">
                Transaction Date
              </label>
              <p className="PaymentSuccess--details--transaction--info--value">
                8 May 2019, 13:21 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CheckoutResult;
