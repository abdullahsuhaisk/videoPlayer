import React from 'react';

const VjsContext = React.createContext({
    vjsComponent: null,
    player: null
});

const Provider = VjsContext.Provider;
const Consumer = VjsContext.Consumer;

export { VjsContext, Provider, Consumer };