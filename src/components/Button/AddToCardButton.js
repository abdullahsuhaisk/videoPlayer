import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

const AddToCardButton = (props) => {
  const { onClick } = props;

  const AddToCardButtonStyle = {
    backgroundColor: '#83329c !important',
    border: 'solid 1px #83329c !important',
    color: '#fff !important',
    width: '150px',
    height: '40px',
    borderRadius: '6px',
    '.button--addCard-icon': {
      background: 'url(/images/shoppingCart.svg) center / cover no-repeat ',
      display: 'inline-block',
      width: '16px',
      height: '16px'
    },
    '&:hover': {
      border: '3px solid #82329c !important'
    }
  };

  return (
    <Button styles={AddToCardButtonStyle} onClick={onClick}>
      <div className="button--addCard-icon" />
      Add To Card
    </Button>
  );
};

AddToCardButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default AddToCardButton;
