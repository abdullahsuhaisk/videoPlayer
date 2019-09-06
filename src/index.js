import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, ApolloConsumer } from 'react-apollo';
import { ApolloNetworkStatusProvider } from 'react-apollo-network-status';

import App from './App';
import { clientInit } from './store/apollo/apollo-config';

ReactDOM.render(
  <ApolloProvider client={clientInit}>
    <ApolloNetworkStatusProvider>
      <ApolloConsumer>
        {(client) => {
          return <App client={client} />;
        }}
      </ApolloConsumer>
    </ApolloNetworkStatusProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
