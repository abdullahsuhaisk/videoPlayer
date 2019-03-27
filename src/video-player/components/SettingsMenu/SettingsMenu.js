import React, { useState, useCallback, useContext, useEffect } from 'react';
import MainMenu from '../MainMenu/MainMenu';
import PlaybackRateMenu from '../PlaybackRateMenu/PlaybackRateMenu';
import { VjsContext } from '../../context/vjsContext';

const SettingsMenu = (props) => {
    const [activeMenu, setActiveMenu] = useState('main-menu');
    const [playbackRateLabel, setPlaybackRateLabel] = useState('Normal');
    const [panelStyle, setPanelStyle] = useState({});
    const context = useContext(VjsContext);

    const handleSelectedMenu = useCallback((selectedMenu) => {
        setActiveMenu(selectedMenu);
    }, []);

    const handleSelectedRate = useCallback((selectedRate) => {
        setPlaybackRateLabel(selectedRate);
        setActiveMenu('main-menu');
    }, []);

    const handlePlayerStateChange = useCallback((event) => {
        const { settingsMenuOpened } = event.changes;

        if (!settingsMenuOpened) {
            return;
        }

        const controlBar = context.player.getChild('ControlBar');
        const offset = controlBar ? controlBar.currentHeight() + 20 : 0;
        setPanelStyle({ maxHeight: `${context.player.currentHeight() - offset}px` });
    }, []);

    useEffect(() => {
        context.player.on('statechanged', handlePlayerStateChange);
        return () => context.player.off('statechanged', handlePlayerStateChange);
    }, []);

    let MenuComponent = null;

    if (activeMenu === 'main-menu') {
        MenuComponent = <MainMenu playbackRateLabel={playbackRateLabel} onSelectMenu={(selectedMenu) => handleSelectedMenu(selectedMenu)} />;
    } else if (activeMenu === 'playback-rate-menu') {
        MenuComponent = <PlaybackRateMenu title="Speed" onSelectRate={(selectedRate) => handleSelectedRate(selectedRate)}
            onBack={() => handleSelectedMenu('main-menu')} />;
    }

    return (
        <div className="vjs-panel" style={panelStyle}>
            {MenuComponent}
        </div>
    );
}

export default SettingsMenu;