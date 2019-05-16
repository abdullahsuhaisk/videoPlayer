import React, { useMemo } from 'react';
import WidgetsRenderer from '../WidgetsRenderer/WidgetsRenderer';
import forgotPasswordTemplate from '../../templates/forgotPasswordTemplate.json';
import { InjectAuthOperations } from '../../../store/redux/auth/authOperations';
import ModalDialog from '../ModalDialog/ModalDialog';

const ForgotPasswordComponent = (props) => {
  const { widgets, actions } = props;

  return (
    <>
      <WidgetsRenderer data={widgets} actions={actions} />
    </>
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
      },
      toggleForgotPassword: () => () => {
        onShowForgotPassword(false);
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
