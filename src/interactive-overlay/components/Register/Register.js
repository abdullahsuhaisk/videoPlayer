import React from 'react';
import WidgetsRenderer from '../WidgetsRenderer/WidgetsRenderer';
import dummyRegisterData from '../../dummyRegister.json';
import Scaler from '../Scaler/Scaler';
import SafeArea from '../SafeArea/SafeArea';

const Register = (props) => {
  return (
    <SafeArea>
      <Scaler>
        <WidgetsRenderer data={dummyRegisterData} />
      </Scaler>
    </SafeArea>
  );
};

export default Register;
