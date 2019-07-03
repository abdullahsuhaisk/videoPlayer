import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_SAFE_AREA = gql`
  query getSafeAreaForSafeArea {
    layout @client {
      safeArea {
        top
        right
        bottom
        left
      }
    }
  }
`;

const SafeArea = ({ children }) => {
  return (
    <Query query={GET_SAFE_AREA}>
      {({
        data: {
          layout: { safeArea }
        }
      }) => {
        return (
          <div
            className="vb--safe-area"
            style={{
              overflow: 'hidden',
              position: 'absolute',
              top: `${safeArea.top}px`,
              right: `${safeArea.right}px`,
              bottom: `${safeArea.bottom}px`,
              left: `${safeArea.left}px`
            }}>
            {children}
          </div>
        );
      }}
    </Query>
  );
};

SafeArea.propTypes = {
  children: PropTypes.node.isRequired
};

export default SafeArea;
