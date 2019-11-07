import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

// const CREATE_ORDER = gql`
//   mutation createOrder {
//     directOrder(
//       prodLinkId: 41
//       paymentCard: {
//         cardHolderName: "John Doe"
//         cardNumber: "5528790000000008"
//         expireMonth: "12"
//         expireYear: "2030"
//         cvc: "123"
//       }
//       buyer: {
//         name: "John"
//         surname: "Doe"
//         gsmNumber: "+905350000000"
//         email: "email@email.com"
//         identityNumber: "74300864791"
//         city: "Istanbul"
//         country: "Turkey"
//         address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1"
//       }
//       products: [{ id: 1, quantity: 4 }, { id: 2, quantity: 2 }]
//     ) {
//       status
//       action
//       threeDSHtmlContent
//       errorMessage
//     }
//   }
// `;

const CREATE_ORDER = gql`
  mutation createOrder {
    directOrder(
      prodLinkId: 41
      paymentCard: {
        cardHolderName: "John Doe"
        cardNumber: "5528790000000008"
        expireMonth: "12"
        expireYear: "2030"
        cvc: "123"
      }
      buyer: {
        name: "John"
        surname: "Doe"
        gsmNumber: "+905350000000"
        email: "email@email.com"
        identityNumber: "74300864791"
        city: "Istanbul"
        country: "Turkey"
        address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1"
      }
      products: [{ id: 1, quantity: 4 }, { id: 2, quantity: 2 }]
    ) {
      status
      action
      threeDSHtmlContent
      errorMessage
    }
  }
`;

const PaymentMutation = ({ orderInfo, setRenderOrder }) => {
  if (orderInfo === null) return null;
  console.log(orderInfo);
  const { prodLinkId, paymentCard, buyer, products } = orderInfo;
  return (
    <div>
      <Mutation mutation={CREATE_ORDER} ignoreResults={false}>
        {(createOrder, { data }) => {
          if (data) {
            const {
              directOrder: { threeDSHtmlContent }
            } = data;
            {
              /* console.log(atob(threeDSHtmlContent)); */
            }
            setRenderOrder(atob(threeDSHtmlContent));
          }
          return (
            <input
              type="submit"
              value="Continue To Payment"
              className="checkoutprocess--checkoutbtn"
              onClick={() =>
                createOrder({
                  variables: { prodLinkId, paymentCard, buyer, products }
                })
              }></input>
          );
        }}
      </Mutation>
    </div>
  );
};

export default PaymentMutation;
