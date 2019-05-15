import React, { useEffect } from 'react';
import {
  InjectOverlayProps,
  InjectPlayerProps
} from '../../../store/redux/providers';
import useTimeRange from '../../hooks/useTimeRange';
import SafeArea from '../SafeArea/SafeArea';
import { overlayTypes } from '../../../store/redux/overlay/overlayActions';
import Like from '../Like/Like';
import Favorite from '../Favorite/Favorite';

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
        <Like />
        <Favorite />
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

export default InjectPlayerProps(
  InjectOverlayProps(InteractiveOverlay, {
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
