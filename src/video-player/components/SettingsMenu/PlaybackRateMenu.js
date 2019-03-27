import React, { useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import { VjsContext } from '../../context/vjsContext';
import MenuItem from './MenuItem';
import PanelHeader from './PanelHeader';

const PlaybackRateMenu = (props) => {
    const { title, onBack, onSelectRate } = props;
    const context = useContext(VjsContext);
    const playbackRates = context.player.options_.playbackRates.length > 0 ?
        context.player.options_.playbackRates : [1];
    const currentPlaybackRate = context.player.playbackRate();

    const handleSelect = useCallback((selectedRate) => {
        context.player.playbackRate(selectedRate);
        onSelectRate(selectedRate === 1 ? 'Normal' : selectedRate);
    }, []);

    return (
        <>
            {title && <PanelHeader title={title} onClick={() => onBack()} />}
            <div className="vjs-panel-menu" role="menu">
                {
                    playbackRates.map((playbackRate) => (
                        <MenuItem label={playbackRate === 1 ? 'Normal' : playbackRate} value={playbackRate} key={playbackRate}
                            aria-checked={playbackRate === currentPlaybackRate ? true : null}
                            role="menuitemradio" onSelect={(selectedRate) => handleSelect(selectedRate)} />
                    ))
                }
            </div>
        </>
    );
};

PlaybackRateMenu.propTypes = {
    title: PropTypes.string,
    onBack: PropTypes.func,
    onSelectRate: PropTypes.func
};

PlaybackRateMenu.defaultProps = {
    onBack: () => { },
    onSelectRate: () => { }
};

export default PlaybackRateMenu;