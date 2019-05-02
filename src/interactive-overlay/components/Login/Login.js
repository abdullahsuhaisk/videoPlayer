import React, { useState, useMemo } from 'react';
import WidgetsRenderer from '../WidgetsRenderer/WidgetsRenderer';
import loginTemplate from '../../templates/loginTemplate.json';
import Scaler from '../Scaler/Scaler';
import SafeArea from '../SafeArea/SafeArea';
import { InjectAuthOperations } from '../../../store/redux/auth/authOperations';
import ModalDialog from '../ModalDialog/ModalDialog';

const LoginComponent = (props) => {
  return (
    <SafeArea>
      <Scaler>
        <WidgetsRenderer data={props.widgets} actions={props.actions} />
      </Scaler>
    </SafeArea>
  );
};

const Login = (props) => {
  const {
    login,
    loginWithGoogle,
    loginWithFacebook,
    showLogin,
    onShowLogin,
    onShowRegister,
    onShowForgotPassword
  } = props;

  if (!showLogin) {
    return null;
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const actions = useMemo(
    () => ({
      toggleRegister: () => () => {
        onShowLogin(false);
        onShowRegister(true);
      },
      toggleForgotPassword: () => () => {
        onShowLogin(false);
        onShowForgotPassword(true);
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
    }),
    [email, password]
  );

  return loginTemplate.showInModal ? (
    <ModalDialog onClose={() => onShowLogin(false)}>
      <LoginComponent widgets={loginTemplate.widgets} actions={actions} />
    </ModalDialog>
  ) : (
    <LoginComponent widgets={loginTemplate.widgets} actions={actions} />
  );
};

export default InjectAuthOperations(Login, {
  selectActions: ({
    login,
    loginWithGoogle,
    loginWithFacebook,
    resetErrors,
    onShowLogin,
    onShowRegister,
    onShowForgotPassword
  }) => ({
    login,
    loginWithGoogle,
    loginWithFacebook,
    resetErrors,
    onShowLogin,
    onShowRegister,
    onShowForgotPassword
  }),
  selectProps: ({ showLogin, auth, loginStatus }) => ({
    showLogin,
    auth,
    loginStatus
  })
});
