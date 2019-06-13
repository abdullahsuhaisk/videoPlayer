import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { InjectLayoutProps } from '../../store/redux/providers';

const Scaler = ({
  safeArea,
  width,
  height,
  baseWidth,
  baseHeight,
  children
}) => {
  const scalerStyles = useMemo(() => {
    const scaleX = (width - (safeArea.left + safeArea.right)) / baseWidth;
    const scaleY = (height - (safeArea.top + safeArea.bottom)) / baseHeight;

    return {
      width: `${baseWidth}px`,
      height: `${baseHeight}px`,
      transformOrigin: 'left top',
      transform: `scaleX(${scaleX}) scaleY(${scaleY})`
    };
  }, [width, height, safeArea, baseWidth, baseHeight]);

  return (
    <div className="vb--scaler" style={scalerStyles}>
      {children}
    </div>
  );
};

Scaler.propTypes = {
  safeArea: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  baseWidth: PropTypes.number.isRequired,
  baseHeight: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
};

export default InjectLayoutProps({
  selectProps: ({ safeArea, width, height, baseWidth, baseHeight }) => ({
    safeArea,
    width,
    height,
    baseWidth,
    baseHeight
  })
})(Scaler);
