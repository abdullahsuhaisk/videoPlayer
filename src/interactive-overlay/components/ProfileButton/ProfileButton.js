/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useMemo, useEffect, useState } from 'react';
import WidgetsRenderer from '../WidgetsRenderer/WidgetsRenderer';
import profileButtonTemplate from '../../templates/profileButtonTemplate.json';
import { InjectAuthOperations } from '../../../store/redux/auth/authOperations';
import { replaceAll } from '../../utils/common';

const ProfileButton = (props) => {
  const { auth, onShowLogin } = props;
  const [widgets, setWidgets] = useState(null);

  const actions = useMemo(
    () => ({
      click: () => () => {
        if (auth.uid) {
          // onShowProfile();
        } else {
          onShowLogin(true);
        }
      }
    }),
    [auth]
  );

  useEffect(() => {
    let username = 'Login';
    if (auth.uid) {
      username = auth.email;
    }

    let editedWidgets = replaceAll(
      JSON.stringify(profileButtonTemplate.widgets),
      '{profileButton_user_name}',
      username
    );

    editedWidgets = JSON.parse(editedWidgets);

    setWidgets(editedWidgets);
  }, [auth]);

  return widgets && <WidgetsRenderer data={widgets} actions={actions} />;
};

export default InjectAuthOperations(ProfileButton, {
  selectActions: ({ onShowLogin }) => ({
    onShowLogin
  }),
  selectProps: ({ showLogin, auth, loginStatus, loginInfo }) => ({
    showLogin,
    auth,
    loginStatus,
    loginInfo
  })
});
