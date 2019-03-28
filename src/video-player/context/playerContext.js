import React from 'react';

const PlayerContext = React.createContext({
    player: null
});

const Provider = PlayerContext.Provider;
const Consumer = PlayerContext.Consumer;

export { PlayerContext, Provider, Consumer };