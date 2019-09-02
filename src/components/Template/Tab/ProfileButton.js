import React from 'react';
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

const handleClick = (client, userInfo, isProfileOpen, setIsProfileOpen) => {
  if (userInfo) {
    client.writeData({ data: { isProfileOpen: true } });
    // client.mutate({ mutation: LOGOUT });
    setIsProfileOpen(true);
    if (isProfileOpen === true) {
      client.writeData({ data: { isProfileOpen: false } });
      setIsProfileOpen(false);
    }
  } else {
    // client.query({query:@isProfileOpen})
    client.writeData({ data: { isLoginFormShowing: true } });
  }
};

const ProfileButton = () => {
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  return (
    <Query query={GET_USER_INFO}>
      {({ data: { userInfo }, client }) => {
        // console.log(client);
        return (
          <div
            className="subMenu--profileInfo"
            onClick={() =>
              handleClick(client, userInfo, isProfileOpen, setIsProfileOpen)
            }>
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
