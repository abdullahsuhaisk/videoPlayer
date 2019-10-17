import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, ApolloConsumer } from 'react-apollo';
import { ApolloNetworkStatusProvider } from 'react-apollo-network-status';

import { clientInit } from './store/apollo/apollo-config';
import Spinner from './components/Spinner/Spinner';

const App = React.lazy(() => import('./App'));

ReactDOM.render(
  <Suspense fallback={<Spinner />}>
    <ApolloProvider client={clientInit}>
      <ApolloNetworkStatusProvider>
        <ApolloConsumer>{(client) => <App client={client} />}</ApolloConsumer>
      </ApolloNetworkStatusProvider>
    </ApolloProvider>
  </Suspense>,

  document.getElementById('root')
);
