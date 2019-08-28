import styled from 'styled-components';

export const VolumControlWrapper = styled.div`
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
`;
