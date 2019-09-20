import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const CardInfoWrapper = styled.div((props) => ({
  marginLeft: '-110px',
  fontFamily: 'Sans Serif Pro',
  fontWeight: 'bolder',
  fontStyle: 'normal',
  fontStretch: 'normal',
  color: '#0e273b',
  fontSize: '14px',
  '.vb--card-content-seller-info-container': {
    maxWidth: '150px',
    '.vb--card-content-seller-info': {
      marginTop: '3px',
      display: 'flex'
    },
    '.vb--card-content-seller': {},
    '.vb--card-content-firm': {
      fontSize: '10px',
      fontWeight: 'bolder',
      color: '#00acd8',
      marginTop: '3px',
      marginLeft: '7px'
    }
  },
  ...props.styles
}));

const CardInfo = ({ styles, name, seller, style }) => {
  return (
    <CardInfoWrapper styles={styles}>
      <div className="vb--card-content-seller-info-container" style={style}>
        {name}
        <div className="vb--card-content-seller-info">
          <div className="vb--card-content-seller">Seller :</div>
          <div className="vb--card-content-firm">{seller}</div>
        </div>
      </div>
    </CardInfoWrapper>
  );
};

CardInfo.propTypes = {
  styles: PropTypes.object,
  name: PropTypes.string.isRequired,
  seller: PropTypes.string.isRequired,
  style: PropTypes.object
};
CardInfo.defaultProps = {
  styles: {},
  style: {}
};

export default CardInfo;
