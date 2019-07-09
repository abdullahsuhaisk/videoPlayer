import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { stepperStyles, Wrapper } from './Stepper.style';
import { loadWebFontsFromStyles } from '../../utils/parseStyles';

const Stepper = ({ value, minValue, onValueChanged, styles }) => {
  const [_value, setValue] = useState(value);

  useEffect(() => {
    loadWebFontsFromStyles(stepperStyles);
    loadWebFontsFromStyles(styles);
  }, []);

  const increment = useCallback(() => {
    const newValue = _value + 1;
    setValue(newValue);
    onValueChanged(newValue);
  }, [_value]);

  const decrement = useCallback(() => {
    if (_value > minValue) {
      const newValue = _value - 1;
      setValue(newValue);
      onValueChanged(newValue);
    }
  }, [_value]);

  return (
    <Wrapper styles={styles}>
      <div className="vb--stepper--group">
        <button className="btn-nonoutline" onClick={decrement}>
          -
        </button>
        <div className="vb--stepper--value">{_value}</div>
        <button className="btn-nonoutline" onClick={increment}>
          +
        </button>
      </div>
    </Wrapper>
  );
};

Stepper.propTypes = {
  styles: PropTypes.object,
  value: PropTypes.number,
  minValue: PropTypes.number,
  onValueChanged: PropTypes.func.isRequired
};

Stepper.defaultProps = {
  styles: {},
  value: 1,
  minValue: 0
};
export default Stepper;
