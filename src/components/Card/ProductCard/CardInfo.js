import React from 'react';
import styled from 'styled-components';

const CardInfoWrapper = styled.div((props) => ({
  ...props.styles,
  marginLeft: '-90px',
  fontFamily: 'Sans Serif Pro',
  fontWeight: 'bolder',
  fontStyle: 'normal',
  fontStretch: 'normal',
  color: '#0e273b',
  fontSize: '14px',
  '.vb--card-content-seller-info-container': {
    marginTop: '7px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '.vb--card-content-seller': {
      marginRight: '10px',
      display: 'flex'
    },
    '.vb--card-content-firm': {
      fontSize: '10px',
      fontWeight: 'bolder',
      color: '#00acd8',
      marginTop: '1px'
    }
  }
}));

const CardInfo = ({ styles }) => {
  console.log(styles);
  return (
    <CardInfoWrapper styles={styles}>
      <div className="vb--card-content-seller-info-container">
        Turtleneck Sweater 2
        <div className="vb--card-content-seller">
          <div className="vb--card-content-seller">Seller :</div>
          <div className="vb--card-content-firm">ADDİDAS</div>
        </div>
      </div>
    </CardInfoWrapper>
  );
};

export default CardInfo;
