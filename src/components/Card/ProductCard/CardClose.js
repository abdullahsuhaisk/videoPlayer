import React from 'react';
import styled from 'styled-components';

const CloseWrapper = styled.div((props) => ({
  ...props.styles,
  padding: '15px 20px',
  fontSize: '20px',
  color: '#0b2443',
  fontWeight: 'bolder',
  cursor: 'pointer'
}));

const CardClose = ({ styles, closeMethod, id }) => {
  return (
    <CloseWrapper styles={styles} onClick={() => closeMethod(id)}>
      &times;
    </CloseWrapper>
  );
};

export default CardClose;
