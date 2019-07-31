import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

const Stepper = ({ value, minValue, onValueChanged, styles }) => {
  const [_value, setValue] = useState(value);

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
    <div className="ShoppingCart--quantite">
      <div className="ShoppingCart--quantite-iconContainer">
        <i className="ShoppingCart--quantite-minusIcon" onClick={decrement}></i>
      </div>
      <div className="ShoppingCart--quantite-inputContrainer">
        <input
          type="number"
          className="ShoppingCart--quantite-input"
          value={_value}
          onChange={setValue}
        />
      </div>
      <div className="ShoppingCart--quantite-iconContainer">
        <i className="ShoppingCart--quantite-plusIcon" onClick={increment}></i>
      </div>
    </div>
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
