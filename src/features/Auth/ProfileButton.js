import React, { useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { InjectAuthProps } from '../../store/redux/providers';
import { Wrapper } from './ProfileButton.style';

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
    <Wrapper
      styles={styles}
      className="vibuy--profile-button-widget"
      onClick={handleClick}>
      <span className="username">{username}</span>
      <div className="avatar" />
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
