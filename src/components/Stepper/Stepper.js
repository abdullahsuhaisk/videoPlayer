import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StepperWrapper = styled.div((props) => ({
  '.vb--stepper--group': {
    display: 'flex',
    width: '65px',
    height: '28px',
    borderRadius: '4px',
    outline: 'none',
    backgroundColor: '#f5f9fc',
    '.button': {
      borderRadius: '4px',
      backgroundColor: '#f5f9fc',
      outline: 'none',
      cursor: 'pointer',
      width: '20px'
    }
  },
  '.vb--stepper--value': {
    padding: '6px',
    borderRadius: '4px',
    boxShadow: '1px 1px 2px 0 rgba(0, 0, 0, 0.16)',
    backgroundColor: '#00acd8',
    width: '27px',
    textAlign: 'center',
    verticalAlign: 'middle',
    color: '#ffffff',
    fontWeight: 'bolder'
  },
  '.btn-nonoutline': {
    outline: 'none'
  }
}));

const Stepper = ({ value, setValue, styles, Id, removeCart }) => {
  return (
    <StepperWrapper styles={styles}>
      <div className="vb--stepper--group">
        <button
          className="btn-nonoutline"
          onClick={() => {
            setValue(value - 1);
          }}>
          -
        </button>
        <div className="vb--stepper--value">
          {value < 1 ? removeCart(Id) : value}
        </div>
        <button
          className="btn-nonoutline"
          onClick={() => {
            setValue(value + 1);
          }}>
          +
        </button>
      </div>
    </StepperWrapper>
  );
};

Stepper.propTypes = {
  styles: PropTypes.object,
  value: PropTypes.number,
  setValue: PropTypes.func.isRequired,
  Id: PropTypes.number.isRequired,
  removeCart: PropTypes.func.isRequired,
  onValueDecrement: PropTypes.func.isRequired
};

Stepper.defaultProps = {
  styles: {},
  value: 1
};
export default Stepper;
