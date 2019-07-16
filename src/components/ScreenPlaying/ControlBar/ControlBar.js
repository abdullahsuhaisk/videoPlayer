import React from 'react';

import { Wrapper } from './ControlBar.style';

const ControlBar = ({ styles, videoPlayer, playingState }) => {
  return (
    <Wrapper styles={styles}>
      <button>Stop</button>
      <button>Countinue</button>
      <button>vol on</button>
    </Wrapper>
  );
};

export default ControlBar;
