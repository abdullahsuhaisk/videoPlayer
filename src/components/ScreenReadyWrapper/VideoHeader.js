import React from 'react';
import Wrapper from './VideoHeader.style';
const VideoHeader = (props) => {
  console.log(props);
  const brandInfoClass = props.inline
    ? 'mainMenu--brandInfo--inline'
    : 'mainMenu--brandInfo';
  return (
    <Wrapper {...props}>
      <div className="Header">
        <div className={brandInfoClass}>
          <h1 className="company--name">Zara</h1>
          <h5 className="campaign--name">Spring- Summer 2019 Best Creation</h5>
        </div>
      </div>
    </Wrapper>
  );
};

export default VideoHeader;
