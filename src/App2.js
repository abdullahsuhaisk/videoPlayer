import React, { Component } from 'react';
import { connect } from 'react-redux';

import Player from './interactive-overlay/components/Player';

function mapStateToProps(state) {
  return {
    auth: state.firebase.auth
  };
}

export class App2 extends Component {
  playerReady = () => {};

  render() {
    const playerOptions = {
      autoplay: false,
      controls: true,
      poster: 'https://d2zihajmogu5jn.cloudfront.net/elephantsdream/poster.png',
      sources: [
        {
          src:
            'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_10mb.mp4'
        }
      ],
      volume: 0.2,
      fluid: true,
      width: '100%',
      height: '100%'
    };
    return (
      <div>
        <Player {...playerOptions} onReady={() => this.playerReady()} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(App2);
