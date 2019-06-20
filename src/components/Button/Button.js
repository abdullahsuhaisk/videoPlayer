import React from 'react';
import { ButtonStyle } from './Button.style';

const Button = (props) => {
  const { onClick, children } = props;
  return <ButtonStyle onClick={onClick}>{children}</ButtonStyle>;
};

export default Button;
