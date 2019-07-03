import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { BASE_WIDTH, BASE_HEIGHT } from '../../common/constants';

const GET_LAYOUT = gql`
  query getLayoutForScaler {
    layout @client {
      width
      height
      safeArea {
        top
        right
        bottom
        left
      }
    }
  }
`;

const baseWidth = BASE_WIDTH;
const baseHeight = BASE_HEIGHT;

const Scaler = ({ children }) => {
  return (
    <Query query={GET_LAYOUT}>
      {({ data: { layout } }) => {
        const { safeArea } = layout;
        const scaleX =
          (layout.width - (safeArea.left + safeArea.right)) / baseWidth;
        const scaleY =
          (layout.height - (safeArea.top + safeArea.bottom)) / baseHeight;

        return (
          <div
            className="vb--scaler"
            style={{
              width: `${baseWidth}px`,
              height: `${baseHeight}px`,
              transformOrigin: 'left top',
              transform: `scaleX(${scaleX}) scaleY(${scaleY})`
            }}>
            {children}
          </div>
        );
      }}
    </Query>
  );
};

Scaler.propTypes = {
  children: PropTypes.node.isRequired
};

export default Scaler;
