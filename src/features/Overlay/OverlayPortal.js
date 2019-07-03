/* eslint-disable no-new */
import React, { useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ResizeSensor from 'css-element-queries/src/ResizeSensor';
import { throttle } from 'lodash';
import { ApolloConsumer } from 'react-apollo';

const aspectRatio = 1.777;

const OverlayPortal = ({ container, children }) => {
  const containerRef = useRef();
  const apolloClientRef = useRef();

  const updateLayout = useCallback(() => {
    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;
    const containerAspectRatio = containerWidth / containerHeight;
    let rightLeftMargin = 0;
    let topBottomMargin = 0;

    if (containerAspectRatio >= aspectRatio) {
      const width = containerHeight * aspectRatio;
      rightLeftMargin = Math.round((containerWidth - width) / 2);
    } else {
      const height = containerWidth / aspectRatio;
      topBottomMargin = Math.round((containerHeight - height) / 2);
    }
    if (apolloClientRef.current) {
      const data = {
        layout: {
          __typename: 'Layout',
          width: containerWidth,
          height: containerHeight,
          safeArea: {
            __typename: 'SafeArea',
            top: topBottomMargin,
            right: rightLeftMargin,
            bottom: topBottomMargin,
            left: rightLeftMargin
          }
        }
      };

      apolloClientRef.current.writeData({ data });
    }
  }, []);

  useEffect(() => {
    updateLayout();
    new ResizeSensor(containerRef.current, throttle(updateLayout, 100));
  }, []);

  return ReactDOM.createPortal(
    <ApolloConsumer>
      {(client) => {
        apolloClientRef.current = client;

        return (
          <div
            ref={containerRef}
            className="vb--overlay-container"
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              pointerEvents: 'none'
            }}>
            {children}
          </div>
        );
      }}
    </ApolloConsumer>,
    container
  );
};

OverlayPortal.propTypes = {
  children: PropTypes.node.isRequired,
  container: PropTypes.object
};

export default OverlayPortal;
