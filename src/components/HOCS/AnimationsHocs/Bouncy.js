import React from 'react';
import styled, { keyframes } from 'styled-components';
import { bounceInRight, bounceInLeft } from 'react-animations';

export default function Bouncy({ direction, children }) {
  const dir = direction === 'left' ? bounceInLeft : bounceInRight;
  const bounceAnimation = keyframes`${dir}`;
  const BouncyDiv = styled.div`
    animation: 1s ${bounceAnimation};
  `;
  return <BouncyDiv>{children}</BouncyDiv>;
}
