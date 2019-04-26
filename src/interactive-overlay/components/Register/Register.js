import React from 'react';
import WidgetsRenderer from '../WidgetsRenderer/WidgetsRenderer';
import dummyRegisterData from '../../dummyRegister.json';
import Scaler from '../Scaler/Scaler';
import SafeArea from '../SafeArea/SafeArea';

const Register = (props) => {
  const { onSwitchToLogin } = props;

  const actions = {
    toggleLogin: () => {
      onSwitchToLogin();
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

export default Register;
