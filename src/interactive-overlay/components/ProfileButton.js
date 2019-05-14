/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useMemo, useEffect, useState } from 'react';
import Scaler from './Scaler/Scaler';
import SafeArea from './SafeArea/SafeArea';
import WidgetsRenderer from './WidgetsRenderer/WidgetsRenderer';
import profileButtonTemplate from '../templates/profileButtonTemplate.json';
import { InjectAuthOperations } from '../../store/redux/auth/authOperations';
import { parseJson } from '../parseStyles';

const ProfileButton = (props) => {
  const { auth, loginStatus, onShowLogin } = props;
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

  const escapeRegExp = (str) => {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
  };
  const replaceAll = (str, find, replace) => {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
  };

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

  return (
    widgets && (
      <SafeArea>
        <Scaler>
          <WidgetsRenderer data={widgets} actions={actions} />
        </Scaler>
      </SafeArea>
    )
  );
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
