import React from 'react';
import WidgetsRenderer from '../WidgetsRenderer/WidgetsRenderer';
import dummyLoginData from '../../dummyLogin.json';

const Login = (props) => {
  return <WidgetsRenderer data={dummyLoginData} />;
};

export default Login;
