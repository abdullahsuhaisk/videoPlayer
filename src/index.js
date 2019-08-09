import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, ApolloConsumer } from 'react-apollo';
import App from './App';
import { clientInit } from './store/apollo/apollo-config';

ReactDOM.render(
  <ApolloProvider client={clientInit}>
    <ApolloConsumer>
      {(client) => {
        return <App client={client} />;
      }}
    </ApolloConsumer>
  </ApolloProvider>,
  document.getElementById('root')
);
