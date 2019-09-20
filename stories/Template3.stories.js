import React from 'react';
import { storiesOf } from '@storybook/react';
import { ApolloProvider } from 'react-apollo';
import { clientInit } from '../src/store/apollo/apollo-config';
import ControlbarFixed from '../src/components/Template3/ControlbarFixed';

storiesOf('Template 3', module).add('Settings', () => (
  <ApolloProvider client={clientInit}>
    <ControlbarFixed />
  </ApolloProvider>
));
