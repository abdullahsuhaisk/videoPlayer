import React from 'react';

const Register = (props) => {
  const style = {
    width: '100%',
    height: '100%',
    background: '#0006',
    position: 'relative'
  };

  const closeButton = {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: '15px 20px',
    fontSize: '30px',
    color: '#FFF',
    cursor: 'pointer'
  };

  return (
    <div style={style}>
      {props.children}
      <span style={closeButton} onClick={() => props.onClose()}>
        &times;
      </span>
    </div>
  );
};

export default Register;
