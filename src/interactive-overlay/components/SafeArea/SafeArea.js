import React from 'react';
import { InjectLayoutOperations } from '../../../store/redux/layout/layoutOperations';

const SafeArea = (props) => {
  const { safeArea, children } = props;

  const { top, right, bottom, left } = safeArea;

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
      {children}
    </div>
  );
};

export default InjectLayoutOperations(SafeArea, {
  selectProps: ({ safeArea }) => ({ safeArea })
});
