import React, { useState  } from 'react'
import Lottie from 'react-lottie'
import animationData from './heart.json'

const HeartLottie = () => {
  const [isStopped, setIsStopped] = useState(true);

    const style = {
      cursor: 'pointer'
    }
    const defaultOptions = {
      loop: false,
      autoplay: false, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    const toggleAnimation = () => {
      setIsStopped(!isStopped);
    }
    return(
      <div onClick={() => toggleAnimation()}>
        <Lottie 
              options={defaultOptions}
              height={200}
              width={200}
              isStopped={isStopped}
              style={style}
        />
      </div>
    )
  }

export default HeartLottie