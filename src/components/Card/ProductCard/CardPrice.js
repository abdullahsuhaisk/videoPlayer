import React from 'react';
import styled from 'styled-components';

const PriceWrapper = styled.div((props) => ({
  ...props.styles,
  fontWeight: 'bolder',
  fontSize: '15px'
}));
const CardPrice = ({ styles }) => {
  return <PriceWrapper styles={styles}>$ 78.88</PriceWrapper>;
};

export default CardPrice;
