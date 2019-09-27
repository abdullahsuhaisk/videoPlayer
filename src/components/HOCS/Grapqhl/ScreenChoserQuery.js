import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_SCREEN = gql`
  query getPlayerAndAuthStateForAuthScreen {
    player @client {
      isStarted
      playingState
    }
    isShoppingCartShowing @client
    isLoggedIn @client
    isLoginFormShowing @client
    isRegisterFormShowing @client
    isForgotPasswordFormShowing @client
    isProfileOpen @client
    whichTabItemIsRendering @client
  }
`;

const ScreenChoserQuery = (WrappedComponent) => (props) => {
  return (
    <Query query={GET_SCREEN}>
      {({ data, loading, error, client }) => {
        if (loading || error) return null;
        return <WrappedComponent data={data} {...props} client={client} />;
      }}
    </Query>
  );
};

export default ScreenChoserQuery;
