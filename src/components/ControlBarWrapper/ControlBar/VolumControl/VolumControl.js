import React from 'react';
import ControlBarHoc from '../ControlBarHoc';
import VolumeIcon from '../../../../assets/icons/VolumeIcon.svg';
import VolumeOffIcon from '../../../../assets/icons/VolumeOffIcon.svg';

const VolumControl = (props) => {
  const { videoPlayer } = props;
  const volumeHandler = (e) => {
    if (videoPlayer) {
      if (e) {
        videoPlayer.volume(e.target.value / 100);
      } else if (videoPlayer.currentTime() === 0) {
        videoPlayer.volume(0.5);
      }
      return videoPlayer.volume() * 100;
    }
    return 0;
  };
  const soundsIconClass = () => {
    let soundsIconClassName = 'soundIcon';
    if (videoPlayer) {
      soundsIconClassName += videoPlayer.muted() ? ' muted' : '';
    }
    return soundsIconClassName;
  };
  const soundsOffHandler = () => {
    videoPlayer.muted(!videoPlayer.muted());
  };

  return (
    <div className="volumControls">
      <img
        src={videoPlayer && videoPlayer.muted() ? VolumeOffIcon : VolumeIcon}
        alt="Volume Icon"
        className="soundIcon"
        onClick={() => {
          soundsOffHandler();
        }}
      />
      <input
        className="volumControl"
        type="range"
        min="0"
        value={volumeHandler()}
        onChange={(e) => volumeHandler(e)}
        max="100"
      />
      <div className="volume--hover-delay" />
    </div>
  );
};

export default ControlBarHoc(VolumControl);
