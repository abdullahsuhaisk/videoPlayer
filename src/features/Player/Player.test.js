/* eslint-disable no-undef */
import React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import '../../i18n/i18n';

import Player from './Player';

const playerProps = {
  sources: [
    {
      src: '//d2zihajmogu5jn.cloudfront.net/elephantsdream/ed_hd.mp4',
      type: 'video/mp4'
    }
  ]
};

afterEach(cleanup);

test('player should have title and description', () => {
  const props = {
    ...playerProps,
    title: 'Elephants Dream',
    description: 'An example movie from The Orange Open Movie Project'
  };

  const { container } = render(<Player {...props} />);

  expect(container.querySelector('.vjs-dock-title')).toHaveTextContent(
    props.title
  );
  expect(container.querySelector('.vjs-dock-description')).toHaveTextContent(
    props.description
  );
});

test('player should have poster', () => {
  const props = {
    ...playerProps,
    poster: '//d2zihajmogu5jn.cloudfront.net/elephantsdream/poster.png'
  };

  const { container } = render(<Player {...props} />);

  // expect(container.querySelector('.vjs-poster')).toHaveStyle(
  //   `background-image: url("${props.poster}")`
  // );
});

test('player should have fluid class', () => {
  const props = { ...playerProps, fluid: true };

  const { getByLabelText } = render(<Player {...props} />);

  expect(getByLabelText('Video Player')).toHaveClass('vjs-fluid');
});
