import React, { useState } from 'react';
import WidgetsRenderer from '../WidgetsRenderer/WidgetsRenderer';
import dummyLoginData from '../../dummyLogin.json';
import Scaler from '../Scaler/Scaler';
import SafeArea from '../SafeArea/SafeArea';
import { InjectAuthOperations } from '../../../store/redux/auth/authOperations';
import Notification from '../Notification/Notification';

const Login = (props) => {
  const {
    loginStatus,
    login,
    loginWithGoogle,
    loginWithFacebook,
    resetErrors,
    onSwitchToRegister,
    onSwitchToForgotPassword
  } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const actions = {
    toggleRegister: () => () => {
      onSwitchToRegister();
    },
    toggleForgotPassword: () => () => {
      onSwitchToForgotPassword();
    },
    onEmailChange: () => (e) => {
      setEmail(e.target.value);
    },
    onPasswordChange: () => (e) => {
      setPassword(e.target.value);
    },
    login: () => async (e) => {
      e.preventDefault();
      await login({ email, password });
    },
    loginWithGoogle: () => (e) => {
      e.preventDefault();
      loginWithGoogle();
    },
    loginWithFacebook: () => (e) => {
      e.preventDefault();
      loginWithFacebook();
    }
  };

  return (
    <SafeArea>
      <Scaler>
        <WidgetsRenderer data={dummyLoginData} actions={actions} />
      </Scaler>
      {loginStatus === 'error' && (
        <Notification
          onClose={() => {
            resetErrors();
          }}
        />
      )}
    </SafeArea>
  );
};

export default InjectAuthOperations(Login, {
  selectActions: ({
    login,
    loginWithGoogle,
    loginWithFacebook,
    resetErrors
  }) => ({
    login,
    loginWithGoogle,
    loginWithFacebook,
    resetErrors
  }),
  selectProps: ({ auth, loginStatus }) => ({ auth, loginStatus })
});
