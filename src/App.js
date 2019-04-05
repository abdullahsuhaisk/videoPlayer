import React, { Component } from 'react';
import { Player } from './video-player';
import './i18n/i18n';

class App extends Component {
  playerReady = () => {
    // console.log('player is ready');
  };

  render() {
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
        <Player {...playerOptions} onReady={() => this.playerReady()} />
      </div>
    );
  }
}

export default App;
