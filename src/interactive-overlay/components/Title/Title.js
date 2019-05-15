/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import WidgetsRenderer from '../WidgetsRenderer/WidgetsRenderer';
import titleTemplate from '../../templates/titleTemplate.json';

const Title = (props) => {
  return <WidgetsRenderer data={titleTemplate.widgets} />;
};

export default Title;
