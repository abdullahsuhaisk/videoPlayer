import React from 'react';
import { InjectLayoutProps } from '../../../store/redux/providers';

const Scaler = (props) => {
  const { safeArea, width, height, baseWidth, baseHeight, children } = props;

  const scaleX = (width - (safeArea.left + safeArea.right)) / baseWidth;
  // const scaleX = width / baseWidth;
  const scaleY = (height - (safeArea.top + safeArea.bottom)) / baseHeight;
  // const scaleY = height / baseHeight;

  return (
    <div
      className="vibuy--scaler"
      style={{
        width: `${baseWidth}px`,
        height: `${baseHeight}px`,
        transformOrigin: 'left top',
        transform: `scaleX(${scaleX}) scaleY(${scaleY})`
      }}>
      {children}
    </div>
  );
};

export default InjectLayoutProps(Scaler, {
  selectProps: ({ safeArea, width, height, baseWidth, baseHeight }) => ({
    safeArea,
    width,
    height,
    baseWidth,
    baseHeight
  })
});