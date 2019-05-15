import React, { useState, useMemo } from 'react';
import WidgetsRenderer from '../WidgetsRenderer/WidgetsRenderer';
import loginTemplate from '../../templates/loginTemplate.json';
import { InjectAuthOperations } from '../../../store/redux/auth/authOperations';
import ModalDialog from '../ModalDialog/ModalDialog';
import ValidationError from '../Validation/ValidationError';

const LoginComponent = (props) => {
  const { widgets, actions, validationErrorMessage } = props;

  return (
    <>
      <WidgetsRenderer data={widgets} actions={actions} />
      {validationErrorMessage && (
        <ValidationError text={validationErrorMessage} />
      )}
    </>
  );
};

const Login = (props) => {
  const {
    auth,
    login,
    loginStatus,
    loginWithGoogle,
    loginWithFacebook,
    loginInfo,
    showLogin,
    onShowLogin,
    onShowRegister,
    onShowForgotPassword
  } = props;

  if (!showLogin || loginStatus === 'loggedIn' || auth.uid) {
    return null;
  }

  const loginError = loginInfo.errorMessage;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const actions = useMemo(
    () => ({
      toggleLogin: () => () => {
        onShowLogin(!showLogin);
      },
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
      <LoginComponent
        widgets={loginTemplate.widgets}
        actions={actions}
        validationErrorMessage={loginError}
      />
    </ModalDialog>
  ) : (
    <LoginComponent
      widgets={loginTemplate.widgets}
      actions={actions}
      validationErrorMessage={loginError}
    />
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
  selectProps: ({ showLogin, auth, loginStatus, loginInfo }) => ({
    showLogin,
    auth,
    loginStatus,
    loginInfo
  })
});
