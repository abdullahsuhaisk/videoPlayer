import React from 'react';
import styled from 'styled-components';

const ShoppingCardWrapper = styled.div((props) => ({
  ...props.styles,
  marginTop: '20px',
  width: '635px',
  height: '70px',
  borderRadius: '8px',
  border: 'solid 1px #ebeae9',
  backgroundColor: '#ffffff',
  fontFamily: 'Sans Serif Pro',

  '.vb--shoppingCart-Card-Container': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  '.vb--shoppingCart-Card-Image': {
    width: '70px',
    height: '70px',
    objectFit: 'contain',
    borderRadius: '8px',
    backgroundImage: 'url(/images/ShoppingCartImage.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  },
  '.vb--shoppingCart-Card-Content': {
    marginLeft: '-30px',
    fontFamily: 'Sans Serif Pro',
    fontWeight: 'bolder',
    fontStyle: 'normal',
    fontStretch: 'normal',
    color: '#0e273b'
  },
  '.vb--shoppingCart-Card-Content-Seller': {},
  '.vb--shoppingCart-Card-Content-Firm': {},
  '.vb--shoppingCart-Card-buttons-group': {
    display: 'flex',
    width: '65px',
    height: '32px',
    borderRadius: '4px',
    backgroundColor: '#f5f9fc'
  },
  '.vb--shoppingCart-Card-buttons-group-show': {
    borderRadius: '4px',
    boxShadow: '1px 1px 2px 0 rgba(0, 0, 0, 0.16)',
    backgroundColor: '#00acd8',
    width: '27px',
    textAlign: 'center',
    verticalAlign: 'middle',
    paddingTop: '10px'
  },
  '.vb--shoppingCart-Card-Price': {},
  '.vb--shoppingCart-Card-Piece': {},
  '.vb--shoppingCart-Card-Close': {
    padding: '15px 20px',
    fontSize: '20px',
    color: '#0b2443',
    cursor: 'pointer'
  }
}));

const ShoppingCartCard = ({ props }) => {
  return (
    <ShoppingCardWrapper>
      <div className="vb--shoppingCart-Card-Container">
        <div className="vb--shoppingCart-Card-Image" />
        <div className="vb--shoppingCart-Card-Content">
          Adidas DB1769 Cosmic 2 XS W Lady Shirt
          <div className="vb--shoppingCart-Card-Content-Seller">Seller</div>
          <div className="vb--shoppingCart-Card-Content-Firm">Adidas INC.</div>
        </div>
        <div className="vb--shoppingCart-Card-buttons-group">
          <button>-</button>
          <div className="vb--shoppingCart-Card-buttons-group-show">1</div>
          <button>+</button>
        </div>
        <div className="vb--shoppingCart-Card-Price">$ 445,73</div>
        <div className="vb--shoppingCart-Card-Close">&times;</div>
      </div>
    </ShoppingCardWrapper>
  );
};

export default ShoppingCartCard;
