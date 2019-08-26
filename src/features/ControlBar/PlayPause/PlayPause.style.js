import styled from 'styled-components';

export const PlayPauseWrapper = styled.div`
  .playPauseBtn {
    width: 21px;
    height: 22px;
    background: url(/images/play-button.svg) center / contain no-repeat;
    margin-right: 30px;
    cursor: pointer;
    border: none;
    &.playing {
      background: url(/images/button-pause.svg) center / contain no-repeat;
    }
    &:focus {
      outline: none;
    }
  }
`;
