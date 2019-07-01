import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PriceWrapper = styled.div((props) => ({
  ...props.styles,
  fontWeight: 'bolder',
  fontSize: '15px',
  maxWidth: '60px'
}));
const CardPrice = ({ styles, currentPrice }) => {
  return <PriceWrapper styles={styles}>$ {currentPrice}</PriceWrapper>;
};

CardPrice.propTypes = {
  styles: PropTypes.object,
  currentPrice: PropTypes.number.isRequired
};
CardPrice.defaultProps = {
  styles: {}
};

export default CardPrice;
