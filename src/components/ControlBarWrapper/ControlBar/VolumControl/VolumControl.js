import React, { useState, useEffect } from 'react';
import ControlBarHoc from '../ControlBarHoc';
import VolumeIcon from '../../../../assets/icons/VolumeIcon.svg';
import VolumeOffIcon from '../../../../assets/icons/VolumeOffIcon.svg';

const VolumControl = (props) => {
  const { videoPlayer } = props;
  const [playerValume, setPlayerValume] = useState(100);
  // const [muted, setMuted] = useState(false);
  const [lastVolume, setlastVolume] = useState(100);
  // console.log(videoPlayer.volume());
  // console.log(playerValume);

  useEffect(() => {
    videoPlayer.volume(playerValume / 100);
  }, [playerValume]);

  const imageHandler = React.useCallback(() => {
    return playerValume >= 0.1 ? VolumeIcon : VolumeOffIcon;
  }, [playerValume]);

  // const volumeHandler = (e) => {
  //   if (videoPlayer) {
  //     if (e) {
  //       videoPlayer.volume(e.target.value / 100);
  //       if (videoPlayer.muted() === true) {
  //         videoPlayer.muted(!videoPlayer.muted());
  //       }
  //     } else if (videoPlayer.currentTime() === 0) {
  //       videoPlayer.volume(0.5);
  //     }
  //     return videoPlayer.volume() * 100;
  //   }
  //   return 0;
  // };

  // const soundsIconClass = () => {
  //   let soundsIconClassName = 'soundIcon';
  //   if (videoPlayer) {
  //     soundsIconClassName += videoPlayer.muted() ? ' muted' : '';
  //   }
  //   return soundsIconClassName;
  // };

  const soundsOffHandler = () => {
    if (videoPlayer.volume() !== 0) {
      setlastVolume(playerValume);
      console.log(lastVolume);
      setPlayerValume(0);
      videoPlayer.volume(playerValume);
    }
    if (videoPlayer.volume() === 0) {
      console.log(lastVolume);
      setPlayerValume(lastVolume);
      videoPlayer.volume(playerValume);
    }
  };

  return (
    <div className="volumControls">
      <img
        src={imageHandler()}
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
        value={playerValume}
        onChange={(e) => setPlayerValume(e.target.value)}
        max="100"
      />
      <div className="volume--hover-delay" />
    </div>
  );
};

export default ControlBarHoc(VolumControl);
