import styled from 'styled-components';

export const HotspotPointWrapper = styled.div`
  .HotspotPoint {
    position: absolute;
    width: 8px;
    height: 8px;
    top: 5px;
    background-color: #ffffff;
    border-radius: 50%;
    left: ${({ position }) => position + '%'};
    padding: 0;
    cursor: pointer;
    border: 0px solid transparent;
    z-index: 2;
    transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    &:hover {
      transform: scale(1.33);
    }
  }
`;
