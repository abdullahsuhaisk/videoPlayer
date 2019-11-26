import React from 'react';
import styled from 'styled-components';

export const SpinnerOverlay = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.BC};
  z-index: 999999;
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 2px solid #fff;
  border-radius: 50%;
  border-top-color: ${(props) => props.SC};
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

const Spinner = ({ backgroundColor, spinnerColor }) => {
  const BC = backgroundColor ? backgroundColor : 'black';
  const SC = spinnerColor ? spinnerColor : '#201547';
  return (
    <>
      <SpinnerOverlay BC={BC}>
        <SpinnerContainer SC={SC} />
      </SpinnerOverlay>
    </>
  );
};
export default Spinner;
