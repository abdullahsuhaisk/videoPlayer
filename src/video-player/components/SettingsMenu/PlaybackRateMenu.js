/* eslint-disable no-underscore-dangle */
import React, { useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import { PlayerContext } from '../../context/playerContext';
import MenuItem from './MenuItem';
import PanelHeader from './PanelHeader';

const PlaybackRateMenu = (props) => {
  const { title, onBack, onSelectRate } = props;
  const context = useContext(PlayerContext);
  const { player } = context;
  const playbackRates =
    player.options_.playbackRates.length > 0
      ? player.options_.playbackRates
      : [1];
  const currentPlaybackRate = player.playbackRate();

  const handleSelect = useCallback((selectedRate) => {
    player.playbackRate(selectedRate);
    onSelectRate(selectedRate === 1 ? 'Normal' : selectedRate);
  }, []);

  return (
    <>
      {title && <PanelHeader title={title} onClick={() => onBack()} />}
      <div className="vjs-panel-menu" role="menu">
        {playbackRates.map((playbackRate) => (
          <MenuItem
            label={playbackRate === 1 ? 'Normal' : playbackRate}
            value={playbackRate}
            key={playbackRate}
            ariaChecked={playbackRate === currentPlaybackRate}
            role="menuitemradio"
            onSelect={(selectedRate) => handleSelect(selectedRate)}
          />
        ))}
      </div>
    </>
  );
};

PlaybackRateMenu.propTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func,
  onSelectRate: PropTypes.func
};

PlaybackRateMenu.defaultProps = {
  onBack: () => {},
  onSelectRate: () => {}
};

export default PlaybackRateMenu;
