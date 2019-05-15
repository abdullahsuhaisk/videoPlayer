/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useMemo, useEffect, useState } from 'react';
import Scaler from '../Scaler/Scaler';
import WidgetsRenderer from '../WidgetsRenderer/WidgetsRenderer';
import favoriteTemplate from '../../templates/favoriteTemplate.json';
import { InjectAuthOperations } from '../../../store/redux/auth/authOperations';

const Favorite = (props) => {
  const { auth, onShowLogin } = props;
  const [widgets, setWidgets] = useState(null);
  const [favoriteCount, setFavoriteCount] = useState(-1);

  const actions = useMemo(
    () => ({
      click: () => () => {
        setFavoriteCount(favoriteCount + 1);
        // call service method
      }
    }),
    [favoriteCount]
  );

  const escapeRegExp = (str) => {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
  };
  const replaceAll = (str, find, replace) => {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
  };

  useEffect(() => {
    // favoriteCount = 221; // assign favorite count

    let editedWidgets = replaceAll(
      JSON.stringify(favoriteTemplate.widgets),
      '{favorite_count}',
      favoriteCount
    );

    editedWidgets = JSON.parse(editedWidgets);
    setWidgets(editedWidgets);
  }, [favoriteCount]);

  return (
    widgets && (
      <Scaler>
        <WidgetsRenderer data={widgets} actions={actions} />
      </Scaler>
    )
  );
};

export default InjectAuthOperations(Favorite, {
  selectActions: ({ onShowLogin }) => ({
    onShowLogin
  }),
  selectProps: ({ showLogin, auth }) => ({
    showLogin,
    auth
  })
});
