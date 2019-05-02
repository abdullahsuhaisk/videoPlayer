import React from 'react';
import WidgetsRenderer from '../WidgetsRenderer/WidgetsRenderer';
import forgotPasswordTemplate from '../../templates/forgotPasswordTemplate.json';
import Scaler from '../Scaler/Scaler';
import SafeArea from '../SafeArea/SafeArea';
import { InjectAuthOperations } from '../../../store/redux/auth/authOperations';

const ForgotPassword = (props) => {
  const { showForgotPassword, onShowLogin, onShowForgotPassword } = props;

  if (!showForgotPassword) {
    return null;
  }

  const actions = {
    toggleLogin: () => () => {
      onShowForgotPassword(false);
      onShowLogin(true);
    }
  };

  return (
    <SafeArea>
      <Scaler>
        <WidgetsRenderer
          data={forgotPasswordTemplate.widgets}
          actions={actions}
        />
      </Scaler>
    </SafeArea>
  );
};

export default InjectAuthOperations(ForgotPassword, {
  selectActions: ({ onShowLogin, onShowForgotPassword }) => ({
    onShowLogin,
    onShowForgotPassword
  }),
  selectProps: ({ showForgotPassword }) => ({ showForgotPassword })
});
