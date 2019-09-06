import React from 'react';
import Lottie from 'react-lottie';
import animationData from './favorites.json';

const FavoriteLottie = ({ animate, switcher }) => {
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
      height={58}
      width={46}
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

export default FavoriteLottie;
