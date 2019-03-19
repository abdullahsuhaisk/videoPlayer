import React, { Component } from 'react';
import { Player } from './video-player';

class App extends Component {
  playerReady = () => {
    console.log('player is ready');
  }

  render() {
    const playerOptions = {
      autoplay: false,
      controls: true,
      poster: 'https://d2zihajmogu5jn.cloudfront.net/elephantsdream/poster.png',
      sources: [{
        src: 'https://d2zihajmogu5jn.cloudfront.net/elephantsdream/ed_hd.mp4',
        type: 'video/mp4'
      }],
      volume: 0.5,
      fluid: true
    };

    return (
      <div>
        <Player {...playerOptions} onReady={() => this.playerReady()} />
      </div>
    );
  }
}

export default App;
