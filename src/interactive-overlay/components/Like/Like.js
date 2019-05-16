/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useMemo, useEffect, useState } from 'react';
import WidgetsRenderer from '../WidgetsRenderer/WidgetsRenderer';
import likeTemplate from '../../templates/likeTemplate.json';
import { replaceAll } from '../../utils/common';

const Like = (props) => {
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

  return widgets && <WidgetsRenderer data={widgets} actions={actions} />;
};

export default Like;
