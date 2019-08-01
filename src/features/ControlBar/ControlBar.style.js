import styled, { css } from 'styled-components';

export const HotspotPoint = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  top: -4px;
  background-color: #ffffff;
  border-radius: 50%;
  left: ${(props) => props.timeValue + '%'};
  padding: 0;
  cursor: pointer;
  border: 0px solid transparent;
  transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  &:hover {
    transform: scale(1.33);
  }
`;
export const VideoProgressBar = styled.div`
width: 100%;
height: 10px;
position: absolute;
top: -10px;
cursor: pointer;
// &:hover{
//   &:after, &:before{
//     height: 5px;
//   }
}
&:before{
  content: "";
  width: 100%;
  height: 2px;
  position: absolute;
  left: 0;
  bottom:0;
  background-color: rgb(255,255,255,.5);  
}
&:after{
  content: "";
  width: ${(props) => props.progressValue + '%'};
  height: 2px;
  bottom:0;
  background-color: #00acd8;  
  position: absolute;
  left: 0;
}
`;

const ControlBarStyle = css`
  display:block;
  width: 100%;
  height: 44px;
  background-color: rgb(255,255,255,.4);
  position: absolute;
  bottom: 0;
  left: 0;
  pointer-events: auto;
  .videoControlsContainer{
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    align-items: center;
    padding: 0 26px;
    .leftContainer{
      display: flex;
      align-items: center;
      .playPauseBtn {
        width: 21px;
        height: 22px;
        background: url(/images/play-button.svg) center / contain no-repeat;
        margin-right: 27px;
        cursor: pointer;
        &.playing {
          background: url(/images/button-pause.svg) center / contain no-repeat;
        }
        &:focus{
          outline: none
        }
      }
      .timeContainer{
        display: flex;
        margin-left: 23px;
        p{
          font-size: 18px;
          font-weight: 600;        
          padding: 0;
        }
        .timeDevider{
          margin-left: 3px;
          margin-right: 3px;
        }
      }
      .volumControlContainer{
        display: flex;
        align-items: center;
        cursor: pointer;
        .soundIcon{
          width: 19px;
          height: 17px;
          background: url(/images/sound.svg) center / contain no-repeat;
        }
        .muted{
          background: url(/images/volume-off.svg) center / contain no-repeat;
        }
        &:hover .volumControl{
          display: block;
        }
        .volumControl {
          -webkit-appearance: none;
          width:80px
          height:44px;
          cursor: pointer;
          background: transparent;
          display : none;
          &::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 10px;
            width: 10px;
            border-radius: 50%;
            background: #ffffff;
            cursor: pointer;
            margin-top: -3.62px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
          }
          &::-moz-range-thumb {
            height: 10px;
            width: 10px;
            border-radius: 50%;
            background: #ffffff;
            cursor: pointer;
          }      
          &::-ms-thumb {
            height: 10px;
            width: 10px;
            border-radius: 50%;
            background: #ffffff;
            cursor: pointer;
          }      
          &::-ms-track {
            width: 100%;
            cursor: pointer;
            /* Hides the slider so custom styles can be added */
            background: transparent; 
            border-color: transparent;
            color: transparent;
          }
          &:focus {
            outline: none;
          }
          &::-webkit-slider-runnable-track {
            width: 100%;
            height: 2px;
            cursor: pointer;
            background: #ffffff;
            border-radius: 1.3px;
          }
          &::-moz-range-track {
            width: 100%;
            height: 2px;
            cursor: pointer;
            background: #ffffff;
            border-radius: 1.3px;
          }
                
          &:focus::-webkit-slider-runnable-track {
            background: #ffffff;
          }    
        }
      }
    }
    .rightContainer{
      display: flex;
      align-items: center;
      .fullScreenBtn {
        width: 24px;
        height: 20px;
        background: url(/images/full-screen.svg) center / contain no-repeat;
        cursor: pointer;
        &:focus{
          outline: none
        }
      }  
      .settingsBtn {
        width: 24px;
        height: 24px;
        background: url(/images/cogwheel.svg) center / contain no-repeat;
        cursor: pointer;
        margin-right: 20px;
        &:focus{
          outline: none
        }
      }  
      .cartBtn {
        width: 24px;
        height: 24px;
        background: url(/images/cart-simple.svg) center / contain no-repeat;
        cursor: pointer;
        margin-right: 20px;
        &:focus{
          outline: none
        }
      }  
    }
  }
`;

// const ControlBarStyle = {
//   height: '30px',
//   width: '100%',
//   backgroundColor: 'black',
//   position: 'absolute',
//   bottom: '0',
//   left: '0',
//   pointerEvents: 'auto',
//   button: {
//     backgroundColor: 'white'
//   }
// };

export const Wrapper = styled.div((props) => ({
  ...ControlBarStyle,
  ...props.style
}));
