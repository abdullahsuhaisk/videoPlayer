import React from 'react';
import { useCss } from '../features/Overlay/TemplateHook';

import LoginForm from '../features/Auth/LoginForm';

const StoriyRender = () => {
  useCss();

  return (
    <>
      <LoginForm />
    </>
  );
};

export default StoriyRender;
