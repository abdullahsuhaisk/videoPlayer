import styled, { css } from 'styled-components';
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
    }
    .rightContainer{
      display: flex;
      align-items: center;
      }  
    }
  }
`;

export const Wrapper = styled.div((props) => ({
  ...ControlBarStyle,
  ...props.style
}));
