import React from 'react';
import '../../assets/css/template1/VideoPlay.css';

const VideoPlay = (props) => {
  return (
    <React.Fragment>
      <div className="VideoPlay">
        <div className="VideoPlay--thumbnail">
          <img
            src="/images/videoThumb.jpg"
            alt="vide title"
            className="VideoPlay--thumbnail--img"
          />
        </div>
        <div className="VideoPlay--playBtn"></div>
      </div>
    </React.Fragment>
  );
};

export default VideoPlay;
