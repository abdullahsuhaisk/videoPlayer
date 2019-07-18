import styled, { css } from 'styled-components';
import bg from '../VideoPause/assets/bg.png';

export const Link = styled.a`
  opacity: ${(props) => (props.active ? 1 : 0.4)};
`;

export const CardWrapper = styled.div`
  .discount {
    display: ${(props) => (props.discount ? 'flex' : 'none')};
    justify-content: center;
    p.percent {
      font-family: SourceSansPro;
      font-size: 13px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.31;
      letter-spacing: 0.09px;
      color: #ffffff;
      border-radius: 6px;
      background-color: #d33737;
      text-align: center;
      display: inline-block;
      margin: 0.2em;
      padding: 0.3em;
    }

    p.linethrough {
      position: relative;
      height: 17px;
      font-family: SourceSansPro;
      font-size: 13px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.31;
      letter-spacing: 0.09px;
      text-align: left;
      color: #515252;
      padding-top: 0.6em;
    }
    p.linethrough:before {
      position: absolute;
      content: '';
      left: 0;
      top: 60%;
      right: 0;
      border-top: 1px solid #d33737;
      border-color: #d33737;

      -webkit-transform: rotate(-5deg);
      -moz-transform: rotate(-5deg);
      -ms-transform: rotate(-5deg);
      -o-transform: rotate(-5deg);
      transform: rotate(-5deg);
    }
  }
`;

export const WishlistWrapper = styled.div``;

export const StyledComponent = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  .mainMenu--content {
    position: absolute;
    top: 0;
    max-width: 1588px;
  }
`;
