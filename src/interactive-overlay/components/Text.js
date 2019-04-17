import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import WebFont from 'webfontloader';

const Text = (props) => {
  const {
    text,
    top,
    left,
    width,
    height,
    font,
    fontSize,
    color,
    backgroundColor,
    bold,
    italic,
    underline,
    align
  } = props;

  useEffect(() => {
    WebFont.load({
      google: {
        families: [
          `${font}:400,${bold ? 'b' : ''}${italic ? 'i' : ''}`,
          'sans-serif'
        ]
      }
    });
  }, [font, bold, italic]);

  const divStyle = {
    position: 'absolute',
    top: `${top}`,
    left: `${left}`,
    width: `${width}`,
    height: `${height}`,
    backgroundColor: `${backgroundColor}`,
    textAlign: `${align}`
  };

  const spanStyle = {
    fontSize: `${fontSize}`,
    color: `${color}`,
    fontFamily: font,
    fontWeight: `${bold}`,
    fontStyle: `${italic}`,
    textDecorationLine: `${underline}`
  };

  return (
    <div style={divStyle}>
      <span style={spanStyle}>{text}</span>
    </div>
  );
};

Text.propTypes = {
  text: PropTypes.string,
  top: PropTypes.string,
  left: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  font: PropTypes.string,
  fontSize: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  bold: PropTypes.string,
  italic: PropTypes.string,
  underline: PropTypes.string,
  align: PropTypes.string
};

Text.defaultProps = {
  width: '60px',
  height: '20px',
  font: 'sans-serif',
  fontSize: '14px'
};

export default Text;
