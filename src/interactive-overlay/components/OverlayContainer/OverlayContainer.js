import React, { useRef, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import ResizeSensor from 'css-element-queries/src/ResizeSensor';
import { throttle } from 'lodash';
import { InjectPlayerOperations } from '../../../store/redux/player/playerOperations';
import { InjectLayoutOperations } from '../../../store/redux/layout/layoutOperations';

const OverlayContainer = (props) => {
  const {
    container,
    aspectRatio,
    onWidth,
    onHeight,
    onSafeArea,
    children
  } = props;

  if (!container) {
    return null;
  }

  const top = 0;
  const right = 0;
  const bottom = 0;
  const left = 0;
  const containerRef = useRef(null);

  const updateLayout = useCallback(() => {
    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;
    const containerAspectRatio = containerWidth / containerHeight;

    if (aspectRatio) {
      if (containerAspectRatio >= aspectRatio) {
        const width = containerHeight * aspectRatio;
        const rightLeftMargin = Math.round((containerWidth - width) / 2);
        onSafeArea({
          top,
          right: rightLeftMargin,
          bottom,
          left: rightLeftMargin
        });
      } else {
        const height = containerWidth / aspectRatio;
        const topBottomMargin = Math.round((containerHeight - height) / 2);
        onSafeArea({
          top: topBottomMargin,
          right,
          bottom: topBottomMargin,
          left
        });
      }
    }

    onWidth(containerWidth);
    onHeight(containerHeight);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      updateLayout();
      // eslint-disable-next-line no-new
      new ResizeSensor(containerRef.current, throttle(updateLayout, 100));
    }
  }, []);

  return ReactDOM.createPortal(
    <div
      ref={containerRef}
      className="vibuy--overlay-container"
      style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }}>
      {children}
    </div>,
    container
  );
};

export default InjectPlayerOperations(
  InjectLayoutOperations(OverlayContainer, {
    selectProps: ({ aspectRatio }) => ({
      aspectRatio
    }),
    selectActions: ({ onWidth, onHeight, onSafeArea }) => ({
      onWidth,
      onHeight,
      onSafeArea
    })
  }),
  {
    selectProps: ({ overlayContainerClass }) => {
      const container = document.getElementsByClassName(overlayContainerClass);
      return { container: container.length > 0 ? container[0] : null };
    }
  }
);
