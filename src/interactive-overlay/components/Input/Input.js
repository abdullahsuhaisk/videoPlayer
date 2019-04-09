import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import WebFont from 'webfontloader';
import '../../overlay.scss';

const Input = (props) => {
  const {
    top,
    left,
    width,
    height,
    backgroundColor,
    color,
    fontSize,
    font,
    type,
    placeholder
  } = props;

  useEffect(() => {
    WebFont.load({
      google: {
        families: [`${font}:400`, 'sans-serif']
      }
    });
  }, [font]);

  const style = {
    position: 'absolute',
    top: top,
    left: left,
    width: width,
    height: height,
    backgroundColor: backgroundColor,
    color: color,
    fontFamily: font,
    fontSize: fontSize,
    borderStyle: 'solid',
    borderWidth: '0 0 1px 0'
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      style={style}
      className="input-style"
    />
  );
};

Input.propTypes = {
  top: PropTypes.string,
  left: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  backgroundColor: PropTypes.string
};

Input.defaultProps = {
  top: '0px',
  left: '0px',
  width: '100px',
  height: '100px',
  backgroundColor: '#21232F'
};

export default Input;
