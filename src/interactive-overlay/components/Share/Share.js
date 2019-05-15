/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useMemo, useEffect, useState } from 'react';
import Scaler from '../Scaler/Scaler';
import WidgetsRenderer from '../WidgetsRenderer/WidgetsRenderer';
import shareTemplate from '../../templates/shareTemplate.json';
import { InjectAuthOperations } from '../../../store/redux/auth/authOperations';

const Share = (props) => {
  const { auth, onShowLogin } = props;
  const [widgets, setWidgets] = useState(null);
  const [shareCount, setShareCount] = useState(-1);

  const actions = useMemo(
    () => ({
      click: () => () => {
        setShareCount(shareCount + 1);
        // call service method
      }
    }),
    [shareCount]
  );

  const escapeRegExp = (str) => {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
  };
  const replaceAll = (str, find, replace) => {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
  };

  useEffect(() => {
    // shareCount = 221; // assign share count

    let editedWidgets = replaceAll(
      JSON.stringify(shareTemplate.widgets),
      '{share_count}',
      shareCount
    );

    editedWidgets = JSON.parse(editedWidgets);
    setWidgets(editedWidgets);
  }, [shareCount]);

  return (
    widgets && (
      <Scaler>
        <WidgetsRenderer data={widgets} actions={actions} />
      </Scaler>
    )
  );
};

export default InjectAuthOperations(Share, {
  selectActions: ({ onShowLogin }) => ({
    onShowLogin
  }),
  selectProps: ({ showLogin, auth }) => ({
    showLogin,
    auth
  })
});
