import React from 'react';
import WidgetsRenderer from '../WidgetsRenderer/WidgetsRenderer';
import dummyForgotPasswordData from '../../dummyForgotPassword.json';
import Scaler from '../Scaler/Scaler';
import SafeArea from '../SafeArea/SafeArea';

const ForgotPassword = (props) => {
  const { onSwitchToLogin } = props;

  const actions = {
    toggleLogin: () => {
      onSwitchToLogin();
    }
  };

  return (
    <SafeArea>
      <Scaler>
        <WidgetsRenderer data={dummyForgotPasswordData} actions={actions} />
      </Scaler>
    </SafeArea>
  );
};

export default ForgotPassword;
