import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => {
  const { top, left, width, height, path, onClick } = props;

  const style = {
    position: 'absolute',
    width: `${width}`,
    height: `${height}`,
    top: `${top}`,
    left: `${left}`,
    background: `url(${path}) center center / contain no-repeat`
  };

  return <div style={style} onClick={() => onClick()} />;
};

Image.propTypes = {
  top: PropTypes.string,
  left: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  path: PropTypes.string.isRequired
};

Image.defaultProps = {
  top: '0px',
  left: '0px',
  width: '100px',
  height: '100px'
};

export default Image;
