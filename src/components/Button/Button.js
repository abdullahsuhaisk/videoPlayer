import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyle } from './Button.style';

const Button = (props) => {
  const { onClick, children, styles } = props;
  return (
    <ButtonStyle onClick={onClick} styles={styles}>
      {children}
    </ButtonStyle>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.object,
  styles: PropTypes.object
};

Button.defaultProps = {
  children: {},
  styles: {}
};

export default Button;
