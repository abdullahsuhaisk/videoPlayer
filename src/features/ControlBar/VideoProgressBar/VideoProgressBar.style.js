import styled from 'styled-components';

export const VideoProgressBarWrapper = styled.div`
width: 100%;
height: 15px;
position: absolute;
top: -9px;
progress, input {
    width: 100%;
}

progress[value] {
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    
    border: none;
    height: 2px;
    display: block;
    position: absolute;
    bottom: 5px;
    pointer-events: none;
    /* For IE10 */
    color: #00acd8;
}
&:hover{
    progress{
        height: 5px; 
    }
    .HotspotPoint{
        top: 4px;
        transition-property: none;
    }
}
progress[value]::-webkit-progress-value {
    background-color: #00acd8;
}

progress[value]::-moz-progress-bar {
    background-color: #00acd8;
}

input[type="range"] {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -moz-apperance: none !important;
    /* height: 4px; */
    background: none;
    outline: none !important;
    border: none;
    margin: 0;
    padding: 0;
    opacity: 0;
    cursor: pointer;
}

input[type="range"]:focus {
    outline: none;
    border: none;
}

input[type="range"]::-moz-range-track {
    border: none;
    background: transparent;
    outline: none;
}

input[type="range"]::-ms-track {
    border: inherit;
    color: transparent; /* don't drawn vertical reference line */
    background: transparent;
}

input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: blue;
    height: 15px;
    width: 15px;
    border-radius: 50%;
}

input[type="range"]::-moz-range-thumb {
    -moz-appearance: none;
    background: blue;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    border: none;
}

input[type="range"]::-ms-thumb {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 0;
    background: blue;
}

input[type="range"]::-ms-fill-lower,
input[type="range"]::-ms-fill-upper {
  background: transparent;
}

input[type="range"]::-ms-tooltip {
  display: none;
}
// width: 100%;
// height: 10px;
// position: absolute;
// top: -10px;
// cursor: pointer;
// &:hover{
//   &:after, &:before{
//     height: 5px;
//   }
//   .HotspotPoint{
//     top: 3px;
//     transition-property: none;
//   }
// }
// &:before{
//   content: "";
//   width: 100%;
//   height: 2px;
//   position: absolute;
//   left: 0;
//   bottom:0;
//   background-color: rgb(255,255,255,.5);  
//   z-index: 1;
// }
// &:after{
//   content: "";
//   width: ${(props) => props.progressValue + '%'};
//   height: 2px;
//   bottom:0;
//   background-color: #00acd8;  
//   position: absolute;
//   left: 0;
//   z-index: 1;
// }
`;
