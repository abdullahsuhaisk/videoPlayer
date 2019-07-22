import React from 'react';

const PlayerContext = React.createContext({
  player: null
});

const { Provider, Consumer } = PlayerContext;

export { PlayerContext, Provider, Consumer };
