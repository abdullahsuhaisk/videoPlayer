import React from 'react';
import styled from 'styled-components';

export const CloseWrapper = styled.div((props) => ({
  ...props.styles,
  padding: '15px 20px',
  fontSize: '20px',
  color: '#0b2443',
  fontWeight: 'bolder',
  cursor: 'pointer'
}));

const CardClose = ({ styles, onClose }) => {
  return (
    <CloseWrapper styles={styles} onClick={() => onClose()}>
      &times;
    </CloseWrapper>
  );
};

export default CardClose;
