import React from 'react';
import Lottie from 'react-lottie';
import animationData from './like.json';

const LikeLottie = ({ animate, switcher }) => {
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <Lottie
      options={defaultOptions}
      height={52}
      width={40}
      margin={0}
      isStopped={animate}
      eventListeners={[
        {
          eventName: 'complete',
          callback: () => switcher()
        }
      ]}
    />
  );
};

export default LikeLottie;
