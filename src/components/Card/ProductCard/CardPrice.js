import React from 'react';
import styled from 'styled-components';

const PriceWrapper = styled.div((props) => ({
  ...props.styles,
  fontWeight: 'bolder',
  fontSize: '15px',
  width: '50px'
}));
const CardPrice = ({ styles, currentPrice }) => {
  return <PriceWrapper styles={styles}>$ {currentPrice}</PriceWrapper>;
};

export default CardPrice;
