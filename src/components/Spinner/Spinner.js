import React from 'react';
import styled from 'styled-components';

export const SpinnerOverlay = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 2px solid #fff;
  border-radius: 50%;
  border-top-color: #f30640;
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

const Spinner = () => {
  return (
    <>
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    </>
  );
};
export default Spinner;
