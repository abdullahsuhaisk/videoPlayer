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
    fluid: true,
    title: 'Video Title',
    description: 'Video description',
    language: 'tr'
  };

  return (
    <div>
      <Suspense fallback={<></>}>
        <Player {...playerOptions} />
      </Suspense>
    </div>
  );
};

export default App;
