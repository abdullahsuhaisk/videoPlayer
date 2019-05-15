/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useMemo, useEffect, useState } from 'react';
import Scaler from '../Scaler/Scaler';
import WidgetsRenderer from '../WidgetsRenderer/WidgetsRenderer';
import shareTemplate from '../../templates/shareTemplate.json';
import { InjectAuthOperations } from '../../../store/redux/auth/authOperations';
import { replaceAll } from '../../utils/common';

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

  return widgets && <WidgetsRenderer data={widgets} actions={actions} />;
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
