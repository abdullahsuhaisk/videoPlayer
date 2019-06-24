import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper } from './Button.style';

const Button = (props) => {
  const { onClick, children, styles } = props;
  return (
    <ButtonWrapper styles={styles}>
      <button onClick={onClick} className="vb--button">
        {children}
      </button>
    </ButtonWrapper>
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
