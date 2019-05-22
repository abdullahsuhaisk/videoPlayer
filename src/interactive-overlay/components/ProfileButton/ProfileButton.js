/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useCallback, useState } from 'react';
import styled, { css } from 'styled-components';
import profileButtonTemplate from '../../templates/profileButtonTemplate.json';
import { InjectAuthOperations } from '../../../store/redux/auth/authOperations';
import useWebFont from '../../hooks/useWebFont';

const StyledContainer = styled.div`
  ${profileButtonTemplate['vibuy--profile-button-component'].styles}
  ${css`
    pointer-events: auto;
  `}
`;

const StyledText = styled.span`
  ${profileButtonTemplate['vibuy--profile-button-text'].styles}
`;

const StyledImage = styled.div`
  ${profileButtonTemplate['vibuy--profile-button-image'].styles}
`;

let username = 'Login';

const ProfileButton = (props) => {
  const { auth, onShowLogin } = props;

  const handleClick = useCallback(() => {
    if (auth.uid) {
      // onShowProfile();
    } else {
      onShowLogin(true);
    }
  }, [auth]);

  useEffect(() => {
    if (auth.uid) {
      username = auth.email;
    } else {
      username = 'Login';
    }
  }, [auth]);

  useWebFont(profileButtonTemplate);

  return (
    <StyledContainer onClick={handleClick}>
      <StyledText>{username}</StyledText>
      <StyledImage />
    </StyledContainer>
  );
};

export default InjectAuthOperations(ProfileButton, {
  selectActions: ({ onShowLogin }) => ({
    onShowLogin
  }),
  selectProps: ({ showLogin, auth, loginStatus, loginInfo }) => ({
    showLogin,
    auth,
    loginStatus,
    loginInfo
  })
});
