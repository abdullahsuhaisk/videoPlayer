import React from 'react';
import styled from 'styled-components';

const CardImageStyle = styled.div((props) => ({
  ...props.styles,
  '.vb--card-content--image': {
    width: '84px',
    height: '84px',
    objectFit: 'contain',
    borderRadius: '8px',
    backgroundImage: 'url(/images/ShoppingCartImage.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.16)'
  }
}));

const CardImage = ({ styles }) => {
  console.log(styles);
  return (
    <CardImageStyle styles={styles}>
      <div className="vb--card-content--image" />
    </CardImageStyle>
  );
};

export default CardImage;
