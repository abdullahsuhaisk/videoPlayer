import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const Stepper = ({
  value,
  minValue,
  onValueChanged,
  setCheckValue,
  checkValue
}) => {
  const [_value, setValue] = useState(value);

  const increment = useCallback(() => {
    const newValue = _value + 1;
    setValue(newValue);
    onValueChanged(newValue);
    setCheckValue(checkValue + 1);
  }, [_value]);

  const decrement = useCallback(() => {
    if (_value > minValue) {
      const newValue = _value - 1;
      setValue(newValue);
      onValueChanged(newValue);
      setCheckValue(checkValue + 1);
    }
  }, [_value]);

  return (
    <div className="ShoppingCart--quantite">
      <div className="ShoppingCart--quantite-iconContainer" onClick={decrement}>
        <i className="ShoppingCart--quantite-minusIcon"></i>
      </div>
      <div className="ShoppingCart--quantite-inputContrainer">
        <input
          type="number"
          className="ShoppingCart--quantite-input"
          value={_value}
          onChange={setValue}
        />
      </div>
      <div className="ShoppingCart--quantite-iconContainer" onClick={increment}>
        <i className="ShoppingCart--quantite-plusIcon"></i>
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
