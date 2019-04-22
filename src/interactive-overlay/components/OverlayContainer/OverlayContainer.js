import React from 'react';
import ReactDOM from 'react-dom';
import { InjectPlayerOperations } from '../../../store/redux/player/playerOperations';

const OverlayContainer = (props) => {
  const { container, children } = props;

  if (!container) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
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

export default InjectPlayerOperations(OverlayContainer, {
  selectProps: ({ overlayContainerClass }) => {
    const container = document.getElementsByClassName(overlayContainerClass);
    return { container: container.length > 0 ? container[0] : null };
  }
});
