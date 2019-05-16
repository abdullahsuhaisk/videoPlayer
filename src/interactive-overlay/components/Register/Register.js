import React, { useState, useMemo } from 'react';
import WidgetsRenderer from '../WidgetsRenderer/WidgetsRenderer';
import registerTemplate from '../../templates/registerTemplate.json';
import { InjectAuthOperations } from '../../../store/redux/auth/authOperations';
import ValidationError from '../Validation/ValidationError';
import ModalDialog from '../ModalDialog/ModalDialog';

const RegisterComponent = (props) => {
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

const Register = (props) => {
  const {
    auth,
    loginStatus,
    loginInfo,
    createUserWithEmailAndPassword,
    loginWithGoogle,
    loginWithFacebook,
    showRegister,
    onShowLogin,
    onShowRegister
  } = props;

  if (!showRegister || loginStatus === 'loggedIn' || auth.uid) {
    return null;
  }

  const registerError = loginInfo.errorMessage;

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const actions = useMemo(
    () => ({
      toggleLogin: () => () => {
        onShowRegister(false);
        onShowLogin(true);
      },
      toggleRegister: () => () => {
        onShowRegister(false);
      },
      onFullNameChange: () => (e) => {
        setFullName(e.target.value);
      },
      onEmailChange: () => (e) => {
        setEmail(e.target.value);
      },
      onPasswordChange: () => (e) => {
        setPassword(e.target.value);
      },
      register: () => async (e) => {
        e.preventDefault();
        await createUserWithEmailAndPassword({
          fullName,
          email,
          password
        });
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
    [fullName, email, password]
  );

  return registerTemplate.showInModal ? (
    <ModalDialog onClose={() => onShowRegister(false)}>
      <RegisterComponent
        widgets={registerTemplate.widgets}
        actions={actions}
        validationErrorMessage={registerError}
      />
    </ModalDialog>
  ) : (
    <RegisterComponent
      widgets={registerTemplate.widgets}
      actions={actions}
      validationErrorMessage={registerError}
    />
  );
};

export default InjectAuthOperations(Register, {
  selectActions: ({
    createUserWithEmailAndPassword,
    loginWithGoogle,
    loginWithFacebook,
    resetErrors,
    onShowLogin,
    onShowRegister
  }) => ({
    createUserWithEmailAndPassword,
    loginWithGoogle,
    loginWithFacebook,
    resetErrors,
    onShowLogin,
    onShowRegister
  }),
  selectProps: ({ showRegister, auth, loginInfo, loginStatus }) => ({
    showRegister,
    auth,
    loginInfo,
    loginStatus
  })
});
