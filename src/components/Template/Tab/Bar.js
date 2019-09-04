import React from 'react';

const Bar = ({ progress, animationDuration }) => {
  const styles = {
    position: 'absolute',
    bottom: '2.5px',
    width: '110%',
    opacity: '0.75',
    border: '2px solid rgba(11, 36, 67, 0.28)',
    marginTop: '0.3em'
  };
  return (
    <div style={styles}>
      <div
        style={{
          background: '#29d',
          height: 2,
          left: 0,
          marginLeft: `${(-1 + progress) * 100}%`,
          top: 0,
          transition: `margin-left ${animationDuration}ms linear`,
          width: '100%',
          zIndex: 1031
        }}
      />
      <div
        style={{
          boxShadow: '0 0 10px #29d, 0 0 5px #29d',
          display: 'block',
          height: '100%',
          opacity: 1,
          position: 'absolute',
          right: 0,
          transform: 'rotate(3deg) translate(0px, -4px)',
          width: 100
        }}
      />
    </div>
  );
};

export default Bar;
