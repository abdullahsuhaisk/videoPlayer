/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ShoppingButtonWrapper = styled.div((props) => ({
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
// TODO: Onclick method must override, it will entegrated redux
const ShoppingButton = ({ openNavigationDialog }) => {
  return (
    <>
      <ShoppingButtonWrapper>
        <div className="vb--icon" onClick={() => openNavigationDialog()} />
      </ShoppingButtonWrapper>
    </>
  );
};

ShoppingButton.propTypes = {
  openNavigationDialog: PropTypes.func.isRequired
};

ShoppingButton.defaultProps = {};

export default ShoppingButton;
