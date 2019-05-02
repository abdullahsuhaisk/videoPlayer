import React, { useMemo } from 'react';
import WidgetsRenderer from '../WidgetsRenderer/WidgetsRenderer';
import forgotPasswordTemplate from '../../templates/forgotPasswordTemplate.json';
import Scaler from '../Scaler/Scaler';
import SafeArea from '../SafeArea/SafeArea';
import { InjectAuthOperations } from '../../../store/redux/auth/authOperations';
import ModalDialog from '../ModalDialog/ModalDialog';

const ForgotPasswordComponent = (props) => {
  return (
    <SafeArea>
      <Scaler>
        <WidgetsRenderer data={props.widgets} actions={props.actions} />
      </Scaler>
    </SafeArea>
  );
};

const ForgotPassword = (props) => {
  const {
    loginStatus,
    auth,
    showForgotPassword,
    onShowLogin,
    onShowForgotPassword
  } = props;

  if (!showForgotPassword || loginStatus === 'loggedIn' || auth.uid) {
    return null;
  }

  const actions = useMemo(
    () => ({
      toggleLogin: () => () => {
        onShowForgotPassword(false);
        onShowLogin(true);
      }
    }),
    []
  );

  return forgotPasswordTemplate.showInModal ? (
    <ModalDialog onClose={() => onShowForgotPassword(false)}>
      <ForgotPasswordComponent
        widgets={forgotPasswordTemplate.widgets}
        actions={actions}
      />
    </ModalDialog>
  ) : (
    <ForgotPasswordComponent
      widgets={forgotPasswordTemplate.widgets}
      actions={actions}
    />
  );
};

export default InjectAuthOperations(ForgotPassword, {
  selectActions: ({ onShowLogin, onShowForgotPassword }) => ({
    onShowLogin,
    onShowForgotPassword
  }),
  selectProps: ({ loginStatus, auth, showForgotPassword }) => ({
    loginStatus,
    auth,
    showForgotPassword
  })
});
