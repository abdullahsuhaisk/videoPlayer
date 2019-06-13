import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { InjectLayoutProps } from '../../store/redux/providers';

const SafeArea = ({ safeArea, children }) => {
  const safeAreaStyles = useMemo(
    () => ({
      overflow: 'hidden',
      position: 'absolute',
      top: `${safeArea.top}px`,
      right: `${safeArea.right}px`,
      bottom: `${safeArea.bottom}px`,
      left: `${safeArea.left}px`
    }),
    [safeArea]
  );

  return (
    <div className="vb--safe-area" style={safeAreaStyles}>
      {children}
    </div>
  );
};

SafeArea.propTypes = {
  safeArea: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

export default InjectLayoutProps({
  selectProps: ({ safeArea }) => ({ safeArea })
})(SafeArea);
