import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

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

let baseWidth;
let baseHeight;

const Scaler = ({ children }) => {
  return (
    <Query query={GET_LAYOUT}>
      {({ data: { layout } }) => {
        if (layout.width > 812) {
          baseWidth = 1920;
          baseHeight = 1080;
        }
        if (layout.width < 850) {
          baseWidth = 812;
          baseHeight = 450;
        }
        const { safeArea } = layout;
        const scaleX =
          (layout.width - (safeArea.left + safeArea.right)) / baseWidth;
        const scaleY =
          (layout.height - (safeArea.top + safeArea.bottom)) / baseHeight;

        return (
          <div
            className="vb--scaler Template1"
            style={{
              width: `${baseWidth}px`,
              height: `${baseHeight}px`,
              transformOrigin: 'left top',
              transform: `perspective(1px) scaleX(${scaleX.toFixed(
                2
              )}) scaleY(${scaleY.toFixed(2)})`,
              backfaceVisibility: `hidden`
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
