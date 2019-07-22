import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import OverlayPortal from './OverlayPortal';

const GET_PLAYER = gql`
  query getPlayerForOverlayContainer {
    player @client {
      overlayContainerClassName
    }
  }
`;

const OverlayContainer = ({ children }) => {
  return (
    <Query query={GET_PLAYER}>
      {({
        data: {
          player: { overlayContainerClassName }
        }
      }) => {
        const container = document.getElementsByClassName(
          overlayContainerClassName
        )[0];

        if (container) {
          return (
            <OverlayPortal container={container}>{children}</OverlayPortal>
          );
        }

        return null;
      }}
    </Query>
  );
};

OverlayContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default OverlayContainer;
