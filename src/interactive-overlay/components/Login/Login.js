import React from 'react';
import WidgetsRenderer from '../WidgetsRenderer/WidgetsRenderer';
import dummyLoginData from '../../dummyLogin.json';
import Scaler from '../Scaler/Scaler';
import SafeArea from '../SafeArea/SafeArea';

const Login = (props) => {
  return (
    <SafeArea>
      <Scaler>
        <WidgetsRenderer data={dummyLoginData} />
      </Scaler>
    </SafeArea>
  );
};

export default Login;
