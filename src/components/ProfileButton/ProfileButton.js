import React, { useEffect, useCallback, useState } from 'react';
import styled from 'styled-components';
import { InjectAuthProps } from '../../store/redux/providers';

const StyledWrapper = styled.div((props) => ({
  ...props.styles,
  pointerEvents: 'auto'
}));

const ProfileButton = (props) => {
  const { styles, auth, onShowLogin } = props;
  const [username, setUsername] = useState('Login');

  const handleClick = useCallback(() => {
    if (auth.uid) {
      // onShowProfile();
    } else {
      onShowLogin(true);
    }
  }, [auth]);

  useEffect(() => {
    if (auth.uid) {
      setUsername(auth.email);
    } else {
      setUsername('Login');
    }
  }, [auth]);

  // TODO: Update user avatar when loged-in
  return (
    <StyledWrapper
      styles={styles}
      className="vibuy--profile-button-widget"
      onClick={handleClick}>
      <span className="vibuy--profile-button-text">{username}</span>
      <div className="vibuy--profile-button-image" />
    </StyledWrapper>
  );
};

export default InjectAuthProps({
  selectActions: ({ onShowLogin }) => ({
    onShowLogin
  }),
  selectProps: ({ showLogin, auth, loginStatus, loginInfo }) => ({
    showLogin,
    auth,
    loginStatus,
    loginInfo
  })
})(ProfileButton);
