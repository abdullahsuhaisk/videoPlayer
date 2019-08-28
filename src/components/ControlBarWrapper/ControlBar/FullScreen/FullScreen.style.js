import styled from 'styled-components';

export const FullScreenWrapper = styled.div`
  .fullScreenBtn {
    width: 24px;
    height: 20px;
    background: url(/images/full-screen.svg) center / contain no-repeat;
    cursor: pointer;
    border: none;
    &:focus {
      outline: none;
    }
  }
`;
