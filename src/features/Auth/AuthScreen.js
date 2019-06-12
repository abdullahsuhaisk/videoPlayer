import React from 'react';
import authTemplate from './authTemplate.json';
import WidgetsRenderer from '../../components/WidgetsRenderer/WidgetsRenderer';
import ProfileButton from './ProfileButton';

const AuthScreen = () => {
  // const { widgets } = authTemplate;
  // return <WidgetsRenderer widgets={widgets} />;
  return <ProfileButton />;
};

export default AuthScreen;
