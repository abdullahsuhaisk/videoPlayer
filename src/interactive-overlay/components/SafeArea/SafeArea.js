import React, { useEffect, useState, useCallback } from 'react';
import ResizeSensor from 'css-element-queries/src/ResizeSensor';

const SafeArea = (props) => {
  const { containerRef, aspectRatio, children } = props;

  const [{ top, right, bottom, left }, setBoundingClientRect] = useState({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  });

  const [{ scaleX, scaleY }, setScale] = useState({ scaleX: 1, scaleY: 1 });

  const baseWidth = 1000;
  const baseHeight = 564;

  const updateScale = useCallback((width, height) => {
    const scaleXFactor = width / baseWidth;
    const scaleYFactor = height / baseHeight;
    setScale({
      scaleX: scaleXFactor,
      scaleY: scaleYFactor
    });
  }, []);

  const updateLayout = useCallback(() => {
    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;
    const containerAspectRatio = containerWidth / containerHeight;

    if (containerAspectRatio >= aspectRatio) {
      const width = containerHeight * aspectRatio;
      const rightLeftMargin = Math.round((containerWidth - width) / 2);
      setBoundingClientRect({
        left: rightLeftMargin,
        right: rightLeftMargin,
        top,
        bottom
      });
      updateScale(width, containerHeight);
    } else {
      const height = containerWidth / aspectRatio;
      const topBottomMargin = Math.round((containerHeight - height) / 2);
      setBoundingClientRect({
        left,
        right,
        top: topBottomMargin,
        bottom: topBottomMargin
      });
      updateScale(containerWidth, height);
    }
  }, []);

  useEffect(() => {
    if (containerRef.current && aspectRatio) {
      updateLayout();
      // eslint-disable-next-line no-new
      new ResizeSensor(containerRef.current, () => {
        updateLayout();
      });
    }
  }, []);

  return (
    <div
      className="vibuy--safe-area"
      style={{
        overflow: 'hidden',
        position: 'absolute',
        top: `${top}px`,
        right: `${right}px`,
        bottom: `${bottom}px`,
        left: `${left}px`
      }}>
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
    </div>
  );
};

export default SafeArea;
