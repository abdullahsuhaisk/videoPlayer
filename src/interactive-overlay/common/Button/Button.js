import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "../../overlay.scss";
import WebFont from "webfontloader";

const Button = props => {
  const { text, top, left, width, height, font, fontSize, color, backgroundColor, bold, italic, underline, align, radius, onClick } = props;

  useEffect(() => {
    WebFont.load({
      google: {
        families: [
          `${font}:400,${bold ? "b" : ""}${italic ? "i" : ""}`,
          "sans-serif"
        ]
      }
    });
  }, [font, bold, italic]);

  const style = {
    position: "absolute",
    top: `${top}`,
    left: `${left}`,
    width: `${width}`,
    height: `${height}`,
    backgroundColor: `${backgroundColor}`,
    textAlign: `${align}`,
    color: `${color}`,
    fontSize: `${fontSize}`,
    fontFamily: font,
    fontStyle: `${italic}`,
    fontWeight: `${bold}`,
    textDecorationLine: `${underline}`,
    borderRadius: radius,
    userSelect: "none",
    cursor: "pointer"
  };

  return (
    <button
      className="overlayButton"
      style={style}
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
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
  align: PropTypes.string,
  radius: PropTypes.string
};

Button.defaultProps = {
  width: "60px",
  height: "20px",
  font: "sans-serif",
  fontSize: "14px",
  color: "#E5E5E5",
  backgroundColor: "#21232F",
  align: "center",
  radius: "50px"
};

export default Button;
