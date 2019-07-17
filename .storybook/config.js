import { configure, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';

// Option defaults.

function loadStories() {
  const req = require.context('../stories', true, /\.stories\.js$/);
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
