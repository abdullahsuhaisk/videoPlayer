import React from 'react';
import styled from 'styled-components';

const CardInfoWrapper = styled.div((props) => ({
  ...props.styles,
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
  }
}));

const CardInfo = ({ styles }) => {
  console.log(styles);
  return (
    <CardInfoWrapper styles={styles}>
      <div className="vb--card-content-seller-info-container">
        Turtleneck Sweater 2
        <div className="vb--card-content-seller-info">
          <div className="vb--card-content-seller">Seller :</div>
          <div className="vb--card-content-firm">ADDİDAS</div>
        </div>
      </div>
    </CardInfoWrapper>
  );
};

export default CardInfo;
