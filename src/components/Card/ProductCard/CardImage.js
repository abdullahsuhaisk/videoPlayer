import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardImageStyle = styled.div((props) => ({
  ...props.styles,
  '.vb--card-content--image': {
    width: '83px',
    height: '83px',
    objectFit: 'contain',
    borderRadius: '8px',
    backgroundImage: 'url(/images/ShoppingCartImage.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.16)'
  }
}));

const CardImage = ({ style, styles }) => {
  return (
    <CardImageStyle styles={styles}>
      <div className="vb--card-content--image" style={style} />
    </CardImageStyle>
  );
};

CardImageStyle.propTypes = {
  style: PropTypes.string,
  styles: PropTypes.object
};

CardImageStyle.defaultProps = {
  styles: {},
  style: {}
};

export default CardImage;
