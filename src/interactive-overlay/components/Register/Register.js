import React, { useState } from 'react';
import WidgetsRenderer from '../WidgetsRenderer/WidgetsRenderer';
import dummyRegisterData from '../../dummyRegister.json';
import Scaler from '../Scaler/Scaler';
import SafeArea from '../SafeArea/SafeArea';
import { InjectAuthOperations } from '../../../store/redux/auth/authOperations';

const Register = (props) => {
  const {
    onSwitchToLogin,
    auth,
    loginInfo,
    loginStatus,
    createUserWithEmailAndPassword,
    loginWithGoogle,
    loginWithFacebook,
    resetErrors
  } = props;

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const actions = {
    toggleLogin: () => () => {
      onSwitchToLogin();
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
        <WidgetsRenderer data={dummyRegisterData} actions={actions} />
      </Scaler>
    </SafeArea>
  );
};

export default InjectAuthOperations(Register, {
  selectActions: ({
    createUserWithEmailAndPassword,
    loginWithGoogle,
    loginWithFacebook,
    resetErrors
  }) => ({
    createUserWithEmailAndPassword,
    loginWithGoogle,
    loginWithFacebook,
    resetErrors
  }),
  selectProps: ({ auth, loginInfo, loginStatus }) => ({
    auth,
    loginInfo,
    loginStatus
  })
});
