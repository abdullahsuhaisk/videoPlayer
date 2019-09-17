import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

export default function Bouncy({ direction, children }) {
  const dir = direction === 'left' ? fadeIn : fadeIn;
  const bounceAnimation = keyframes`${dir}`;
  const BouncyDiv = styled.div`
    animation: 1s ${bounceAnimation};
  `;
  return <BouncyDiv>{children}</BouncyDiv>;
}
