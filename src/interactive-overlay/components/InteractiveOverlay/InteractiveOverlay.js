import React, { useEffect } from 'react';
import { InjectPlayerOperations } from '../../../store/redux/player/playerOperations';
import { InjectOverlayOperations } from '../../../store/redux/overlay/overlayOperations';
import useTimeRange from '../../hooks/useTimeRange';
import SafeArea from '../SafeArea/SafeArea';
import { overlayTypes } from '../../../store/redux/overlay/overlayActions';

const playingOverlayFilter = {
  key: 'type',
  value: overlayTypes.playing
};

const InteractiveOverlay = (props) => {
  const {
    overlays,
    activePlayingOverlayIds,
    setActivePlayingOverlayIds,
    currentTime,
    playing
  } = props;

  const playingOverlayIds = useTimeRange(
    overlays,
    currentTime,
    playingOverlayFilter
  );

  useEffect(() => {
    setActivePlayingOverlayIds(playingOverlayIds);
  }, [playingOverlayIds]);

  return (
    <div
      className="vibuy--interactive-overlay"
      style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <SafeArea>
        {activePlayingOverlayIds.map((id) => {
          if (playing) {
            return <div key={id}>{id}</div>;
          }

          return null;
        })}
      </SafeArea>
    </div>
  );
};

export default InjectPlayerOperations(
  InjectOverlayOperations(InteractiveOverlay, {
    selectActions: ({ setActivePlayingOverlayIds }) => ({
      setActivePlayingOverlayIds
    }),
    selectProps: ({ overlays, activePlayingOverlayIds }) => ({
      overlays,
      activePlayingOverlayIds
    })
  }),
  {
    selectActions: ({ play, pause }) => ({ play, pause }),
    selectProps: ({ playing, currentTime }) => ({ playing, currentTime })
  }
);
