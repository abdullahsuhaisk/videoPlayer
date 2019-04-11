/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

const Hotspot = (props) => {
  const { actions } = props;

  const [tagColor, setTagColor] = useState('#000000');

  return (
    <div
      onClick={actions.toggleOverlay}
      role="button"
      tabIndex="-1"
      onMouseEnter={() => setTagColor('#00ACD8')}
      onMouseLeave={() => setTagColor('#000000')}
      className="tag"
      style={{
        width: '16.5256%',
        height: '21.0145%',
        position: 'absolute',
        display: 'block',
        visibility: 'visible',
        cursor: 'pointer'
      }}>
      <div className="tag-inner-box" style={{ width: '100%', height: '100%' }}>
        <div
          className="outer-circle"
          style={{
            left: '50%',
            top: '50%',
            width: '30px',
            height: '30px',
            position: 'absolute',
            marginLeft: '-20px',
            marginTop: '-15px',
            transition: 'all .3s'
          }}>
          <svg
            height="100%"
            version="1.1"
            width="100%"
            viewBox="0 0 30 30"
            preserveAspectRatio="xMinYMin"
            style={{ overflow: 'hidden', position: 'relative' }}>
            <defs style={{ WebkitTapHighlightColor: '#0000' }} />
            <circle
              cx="15"
              cy="15"
              r="15"
              fill={tagColor}
              stroke="none"
              style={{ WebkitTapHighlightColor: '#0000' }}
            />
            <path
              fill="none"
              stroke="#ffffff"
              d="M15,7.5L15,22.5M7.5,15L22.5,15"
              strokeWidth="3"
              strokeLinecap="round"
              style={{
                WebkitTapHighlightColor: '#0000',
                strokeLinecap: 'round'
              }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hotspot;
