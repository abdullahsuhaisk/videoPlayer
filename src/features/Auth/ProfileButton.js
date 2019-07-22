import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Wrapper, profileButtonStyles } from './ProfileButton.style';
import { loadWebFontsFromStyles } from '../../utils/parseStyles';

const GET_USER_INFO = gql`
  query getUserInfoForProfileButton {
    userInfo @client {
      email
      displayName
      avatarUrl
    }
  }
`;

const LOGOUT = gql`
  mutation logout {
    logout @client {
      displayName
    }
  }
`;

const handleClick = (client, userInfo) => {
  if (userInfo) {
    client.writeData({ data: { isLoginFormShowing: false } });
    client.mutate({ mutation: LOGOUT });
  } else {
    client.writeData({ data: { isLoginFormShowing: true } });
  }
};

const ProfileButton = ({ styles }) => {
  useEffect(() => {
    loadWebFontsFromStyles(profileButtonStyles);
    loadWebFontsFromStyles(styles);
  }, []);

  return (
    <Query query={GET_USER_INFO}>
      {({ data: { userInfo }, client }) => {
        return (
          <Wrapper
            styles={styles}
            className="vb--profile-button"
            onClick={() => handleClick(client, userInfo)}>
            <span className="vb--profile-button-username">
              {userInfo ? userInfo.displayName || userInfo.email : 'Login'}
            </span>
            <div
              className="vb--profile-button-avatar"
              style={
                userInfo &&
                userInfo.avatarUrl && {
                  backgroundImage: `url(${userInfo.avatarUrl})`
                }
              }
            />
          </Wrapper>
        );
      }}
    </Query>
  );
};

ProfileButton.propTypes = {
  styles: PropTypes.object
};

ProfileButton.defaultProps = {
  styles: {}
};

export default ProfileButton;
