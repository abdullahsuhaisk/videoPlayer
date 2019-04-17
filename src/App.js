import React, { Suspense } from 'react';
import { Player } from './video-player';
import './i18n/i18n';

const App = () => {
  const playerOptions = {
    poster: '//d2zihajmogu5jn.cloudfront.net/elephantsdream/poster.png',
    sources: [
      {
        src: '//d2zihajmogu5jn.cloudfront.net/elephantsdream/ed_hd.mp4',
        type: 'video/mp4'
      }
    ],
    title: 'Elephants Dream',
    description: 'An example movie from The Orange Open Movie Project',
    language: 'tr'
  };

  const onPlayerReady = () => {
    // console.log('ready');
  };

  return (
    <div className="vibuy--container" style={{ width: '100%', height: '100%' }}>
      <Suspense fallback={<></>}>
        <Player {...playerOptions} onReady={() => onPlayerReady()} />
      </Suspense>
    </div>
  );
};

export default App;
