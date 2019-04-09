import React from 'react';
import PropTypes from 'prop-types';

const Square = (props) => {
  const { top, left, width, height, backgroundColor, onClick } = props;

  const style = {
    position: 'absolute',
    top: `${top}`,
    left: `${left}`,
    width: `${width}`,
    height: `${height}`,
    backgroundColor: `${backgroundColor}`
  };

  return (
    <div style={style} onClick={() => onClick()}>
      {props.children}
    </div>
  );
};

Square.propTypes = {
  top: PropTypes.string,
  left: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  backgroundColor: PropTypes.string
};

Square.defaultProps = {
  top: '0px',
  left: '0px',
  width: '100px',
  height: '100px',
  backgroundColor: '#21232F'
};

export default Square;
