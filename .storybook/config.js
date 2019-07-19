import React from 'react';
import PropTypes from 'prop-types';
import {
  configure,
  setAddon,
  addDecorator,
  addParameters
} from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import StoryRouter from 'storybook-react-router';
import chaptersAddon from 'react-storybook-addon-chapters';
import { withA11y } from '@storybook/addon-a11y';
import '@storybook/addon-console';
import { setConsoleOptions, withConsole } from '@storybook/addon-console';

React.Fragment = ({ children }) => children;
React.Fragment.propTypes = {
  children: PropTypes.node.isRequired
};
React.Fragment.displayName = 'Fragment';

addParameters({
  options: {
    panelPosition: 'right',
    name: 'Vibuy Book'
  }
});

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
setConsoleOptions({
  panelExclude: []
});

addDecorator(withInfo);
addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(StoryRouter());
setAddon(JSXAddon);
setAddon(chaptersAddon);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
