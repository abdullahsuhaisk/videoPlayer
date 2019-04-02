/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = (props) => {
  const {
    tabIndex,
    ariaHasPopup,
    ariaChecked,
    role,
    label,
    value,
    content,
    onSelect
  } = props;

  return (
    <div
      className="vjs-menuitem"
      tabIndex={tabIndex}
      aria-haspopup={ariaHasPopup}
      aria-checked={ariaChecked}
      role={role}
      onClick={() => onSelect(value)}>
      <div className="vjs-menuitem-label">{label}</div>
      {content && <div className="vjs-menuitem-content">{content}</div>}
    </div>
  );
};

MenuItem.propTypes = {
  tabIndex: PropTypes.string,
  ariaHasPopup: PropTypes.string,
  ariaChecked: PropTypes.string,
  role: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.any,
  content: PropTypes.node,
  onSelect: PropTypes.func
};

MenuItem.defaultProps = {
  tabIndex: '0',
  ariaHasPopup: 'false',
  ariaChecked: 'false',
  role: 'menuitem',
  value: '',
  content: '',
  onSelect: () => {}
};

export default MenuItem;
