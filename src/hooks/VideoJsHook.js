import videoJs from 'video.js';
import { useState, useEffect } from 'react';

export const getVideoJs = () => {
  const [videoJS, setVideoJS] = useState(null);
  const videoPlayerJs = videoJs.getPlayer('vjs_video_3');
  useEffect(() => {
    setVideoJS(videoPlayerJs);
  }, [videoJS]);
  return videoJS;
};
