import React from 'react';
import { cleanup, render, wait } from 'react-testing-library';
import 'jest-dom/extend-expect';

import { Player } from './Player';

let playerProps = {
    sources: [{
        src: 'https://d2zihajmogu5jn.cloudfront.net/elephantsdream/ed_hd.mp4',
        type: 'video/mp4'
    }]
};

afterEach(cleanup);

test('player should have source', () => {
    const playerRef = React.createRef();

    render(<Player {...playerProps} ref={playerRef} />);

    expect(playerRef.current.player.currentSources()).toEqual(playerProps.sources);
});

test('player should have correct size', () => {
    const props = { ...playerProps, width: 320, height: 240 };
    const playerRef = React.createRef();

    render(<Player {...props} ref={playerRef} />);

    expect(playerRef.current.player.width()).toBe(props.width);
    expect(playerRef.current.player.height()).toBe(props.height);
});

test('controls should be set', () => {
    const props = { ...playerProps, controls: true };
    const playerRef = React.createRef();

    render(<Player {...props} ref={playerRef} />);

    expect(playerRef.current.player.controls()).toBe(props.controls);
});

test('poster should be set', () => {
    const props = { ...playerProps, poster: 'https://d2zihajmogu5jn.cloudfront.net/elephantsdream/poster.png' };
    const playerRef = React.createRef();

    render(<Player {...props} ref={playerRef} />);

    expect(playerRef.current.player.poster()).toBe(props.poster);
});

test('video element should have playsinline attribute', () => {
    let props = { ...playerProps, playsInline: true };

    const utils = render(<Player {...props} />);

    expect(utils.container.querySelector('video').playsInline).toBeTruthy();
});