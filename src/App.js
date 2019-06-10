import React, { Suspense } from 'react';
import Player from './features/Player/Player';
import './i18n/i18n';
import OverlayContainer from './features/Overlay/OverlayContainer';
import OverlayScreen from './features/Overlay/OverlayScreen';
import HotspotScreen from './features/Hotspot/HotspotScreen';

const App = () => {
  const playerOptions = {
    poster: '//d2zihajmogu5jn.cloudfront.net/elephantsdream/poster.png',
    sources: [
      {
        src: '//d2zihajmogu5jn.cloudfront.net/elephantsdream/ed_hd.mp4',
        type: 'video/mp4'
      }
    ],
    // title: 'Elephants Dream',
    // description: 'An example movie from The Orange Open Movie Project',
    language: 'tr'
  };

  return (
    <div className="vibuy--container" style={{ width: '100%', height: '100%' }}>
      <Suspense fallback={<></>}>
        <Player {...playerOptions} />
      </Suspense>
      <OverlayContainer>
        <OverlayScreen />
        <HotspotScreen />
      </OverlayContainer>
    </div>
  );
};

export default App;
