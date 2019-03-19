import React from 'react';
import PropTypes from 'prop-types';
import videojs from 'video.js';
import './player.scss';

window.videojs = videojs;

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
    }

    componentDidMount() {
        const {
            width, height, controls, poster, sources, loop, muted,
            aspectRatio, autoplay, fluid, volume, onReady
        } = this.props;

        this.player = window.player = videojs(this.videoRef.current, {
            width, height, controls, poster, sources, loop, muted,
            autoplay: autoplay ? videojs.browser.IS_IOS || videojs.browser.IS_ANDROID ? 'muted' : true : false,
            aspectRatio, fluid, liveui: true, textTrackSettings: false, controlBar: {
                playbackRateMenuButton: false,
                subsCapsButton: false,
                descriptionsButton: false,
                chaptersButton: false,
                audioTrackButton: false
            }
        });

        this.player.ready(() => {
            if (volume) {
                this.volume(volume);
            }

            if (onReady) {
                onReady();
            }
        });

        // this.hideBigPlayButton();
    }

    hideBigPlayButton() {
        const bigPlayButton = this.player.getChild('bigPlayButton');

        if (bigPlayButton) {
            bigPlayButton.hide();
        }
    }

    componentWillUnmount() {
        if (this.player) {
            this.player.dispose();
        }
    }

    volume(value) {
        if (this.player) {
            return this.player.volume(value);
        }
    }

    render() {
        const playsInline = videojs.browser.TOUCH_ENABLED ? { playsInline: true } : {};

        return (
            <div>
                <div data-vjs-player>
                    <video ref={this.videoRef} className="vjs-vibuy video-js" {...playsInline}></video>
                </div>
            </div>
        );
    }
}

Player.propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    controls: PropTypes.bool,
    poster: PropTypes.string,
    sources: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string.isRequired,
        type: PropTypes.oneOf([
            'video/mp4',
            'video/webm',
            'application/x-mpegURL',
            'application/vnd.apple.mpegURL',
            'application/dash+xml'
        ]).isRequired
    })).isRequired,
    loop: PropTypes.bool,
    muted: PropTypes.bool,
    volume: PropTypes.number,
    autoplay: PropTypes.bool,
    aspectRatio: PropTypes.oneOf(['16:9', '4:3']),
    fluid: PropTypes.bool,
    onReady: PropTypes.func
};

export default Player;