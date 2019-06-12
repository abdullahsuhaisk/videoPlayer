import React, { useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { InjectAuthProps } from '../../store/redux/providers';
import { Wrapper, profileButtonStyles } from './ProfileButton.style';
import { loadWebFontsFromStyles } from '../../utils/parseStyles';

const ProfileButton = ({ styles, auth, onShowLogin }) => {
  const [username, setUsername] = useState('Login');

  useEffect(() => {
    loadWebFontsFromStyles(profileButtonStyles);
    loadWebFontsFromStyles(styles);
  }, []);

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
    <Wrapper
      styles={styles}
      className="vb--profile-button"
      onClick={handleClick}>
      <span className="vb--profile-button-username">{username}</span>
      <div className="vb--profile-button-avatar" />
    </Wrapper>
  );
};

ProfileButton.propTypes = {
  styles: PropTypes.object,
  auth: PropTypes.object.isRequired,
  onShowLogin: PropTypes.func.isRequired
};

ProfileButton.defaultProps = {
  styles: {}
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
