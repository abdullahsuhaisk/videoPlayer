/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styled from 'styled-components';
import { ApolloConsumer } from 'react-apollo';

export const ShoppingButtonWrapper = styled.div((props) => ({
  display: 'inline-block',
  pointerEvents: 'auto',
  top: '32px',
  left: '32px',
  cursor: 'pointer',
  position: 'absolute',
  borderRadius: '50%',
  border: '1px solid #494949',
  '.vb--icon': {
    background: 'url(/images/cart-simple.svg) center / cover no-repeat ',
    display: 'inline-block',
    width: '24px',
    height: '24px'
  }
}));

const ShoppingButton = () => {
  return (
    <ApolloConsumer>
      {(client) => {
        return (
          <ShoppingButtonWrapper>
            <div
              className="vb--icon"
              onClick={() =>
                client.writeData({ data: { navigationDialogShowing: true } })
              }
            />
          </ShoppingButtonWrapper>
        );
      }}
    </ApolloConsumer>
  );
};

export default ShoppingButton;
