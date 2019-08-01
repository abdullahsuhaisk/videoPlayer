import React, { useEffect } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

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

const ProfileButton = () => {
  return (
    <Query query={GET_USER_INFO}>
      {({ data: { userInfo }, client }) => {
        return (
          <div
            className="subMenu--profileInfo"
            onClick={() => handleClick(client, userInfo)}>
            {userInfo ? (
              <img
                src="/images/dp.png"
                // src={
                //   userInfo && userInfo.avatarUrl && `url(${userInfo.avatarUrl})`
                // }
                className="subMenu--profileInfo--img"
                alt="Profile"
              />
            ) : (
              'Login'
            )}
          </div>
        );
      }}
    </Query>
  );
};

export default ProfileButton;
