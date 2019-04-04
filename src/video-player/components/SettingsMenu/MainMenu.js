import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

const MainMenu = (props) => {
  const { playbackRateLabel, onSelectMenu } = props;

  return (
    <div className="vjs-panel-menu" role="menu">
      <MenuItem
        label="Speed"
        value="playback-rate-menu"
        content={playbackRateLabel}
        ariaHaspopup
        onSelect={(selectedMenu) => onSelectMenu(selectedMenu)}
      />
    </div>
  );
};

MainMenu.propTypes = {
  playbackRateLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  onSelectMenu: PropTypes.func
};

MainMenu.defaultProps = {
  onSelectMenu: () => {}
};

export default MainMenu;
