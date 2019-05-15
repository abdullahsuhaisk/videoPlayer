/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useMemo, useEffect, useState } from 'react';
import Scaler from '../Scaler/Scaler';
import WidgetsRenderer from '../WidgetsRenderer/WidgetsRenderer';
import likeTemplate from '../../templates/likeTemplate.json';
import { InjectAuthOperations } from '../../../store/redux/auth/authOperations';

const Like = (props) => {
  const { auth, onShowLogin } = props;
  const [widgets, setWidgets] = useState(null);
  const [likeCount, setLikeCount] = useState(-1);

  const actions = useMemo(
    () => ({
      click: () => () => {
        setLikeCount(likeCount + 1);
        // call service method
      }
    }),
    [likeCount]
  );

  const escapeRegExp = (str) => {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
  };
  const replaceAll = (str, find, replace) => {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
  };

  useEffect(() => {
    // likeCount = 221; // assign like count

    let editedWidgets = replaceAll(
      JSON.stringify(likeTemplate.widgets),
      '{like_count}',
      likeCount
    );

    editedWidgets = JSON.parse(editedWidgets);
    setWidgets(editedWidgets);
  }, [likeCount]);

  return (
    widgets && (
      <Scaler>
        <WidgetsRenderer data={widgets} actions={actions} />
      </Scaler>
    )
  );
};

export default InjectAuthOperations(Like, {
  selectActions: ({ onShowLogin }) => ({
    onShowLogin
  }),
  selectProps: ({ showLogin, auth }) => ({
    showLogin,
    auth
  })
});
