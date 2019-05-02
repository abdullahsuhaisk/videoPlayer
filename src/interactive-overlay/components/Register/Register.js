import React, { useState } from 'react';
import WidgetsRenderer from '../WidgetsRenderer/WidgetsRenderer';
import registerTemplate from '../../templates/registerTemplate.json';
import Scaler from '../Scaler/Scaler';
import SafeArea from '../SafeArea/SafeArea';
import { InjectAuthOperations } from '../../../store/redux/auth/authOperations';

const Register = (props) => {
  const {
    createUserWithEmailAndPassword,
    loginWithGoogle,
    loginWithFacebook,
    showRegister,
    onShowLogin,
    onShowRegister
  } = props;

  if (!showRegister) {
    return null;
  }

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const actions = {
    toggleLogin: () => () => {
      onShowRegister(false);
      onShowLogin(true);
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
  };

  return (
    <SafeArea>
      <Scaler>
        <WidgetsRenderer data={registerTemplate.widgets} actions={actions} />
      </Scaler>
    </SafeArea>
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
