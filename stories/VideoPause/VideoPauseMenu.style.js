import styled, { css } from 'styled-components';
import bg from '../VideoPause/assets/bg.png';

export const Link = styled.a`
  opacity: ${(props) => (props.active ? 1 : 0.4)};
`;

export const StyledComponent = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  .mainMenu--background {
    width: 1588px;
    height: 894px;
    background-image: url(${bg});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -2;
  }

  .mainMenu--overlay {
    position: absolute;
    top: 8px;
    left: 8px;
    width: 1588px;
    height: 894px;
    opacity: 0.8;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: #f5f9fc;
  }
  .mainMenu--content {
    position: absolute;
    top: 0;
    max-width: 1588px;
  }
  .mainMenu--header {
    display: flex;
    justify-content: space-between;
    width: 1588px;
    height: 150px;
    h1 {
      height: 110px;
      font-family: SourceSansPro;
      font-size: 87px;
      font-weight: 600;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.26;
      letter-spacing: normal;
      text-align: left;
      color: #0b2443;
      margin: 0.5em;
    }
    h5 {
      height: 23px;
      font-family: SourceSansPro;
      font-size: 18px;
      font-weight: 600;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.28;
      letter-spacing: normal;
      text-align: left;
      color: #0b2443;
      padding: 0.5em;
    }
    .BrandInfo {
      display: flex;
      align-content: center;
      align-items: center;
    }
    .profileInfo {
      display: flex;
      height: 150px;
      width: 200px;
      padding: 0.2em;

      h6 {
        align-self: center;
        height: 23px;
        opacity: 0.4;
        font-family: SourceSansPro;
        font-size: 18px;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.28;
        letter-spacing: normal;
        text-align: left;
        color: #0b2443;
        padding: 0.5em;
      }
      img {
        align-self: center;
        width: 50px;
        height: 50px;
      }
    }
  }
  .mainMenu--productsMenu {
    display: flex;
    justify-content: space-between;
    padding: 3em 2em 0em 2em;

    .products {
      width: 50%;
      ${Link} {
        height: 23px;
        color: #0b2443;
        font-family: SourceSansPro;
        font-size: 18px;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.28;
        letter-spacing: normal;
        text-align: left;
        text-decoration: none;
        padding: 0 1em;
      }
    }
    .stats {
      display: flex;
      justify-content: space-evenly;
      div {
        height: 30px;
        display: flex;
        align-items: center;
        padding: 0 1em;
      }
    }
  }
  .mainMenu--borderline {
    width: 100%;
    opacity: 0.4;
    height: 1px;
    background: #0b2443;
  }
  .mainMenu--productsWrapper {
    display: flex;
    width: 100%;
    padding: 2.5em 3em 0em 3em;
    max-width: 90%;

    .card {
      width: 228px;
      height: 500px;
      border-radius: 8px;
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.16);
      background-color: #f4f5f7;
      display: flex;
      flex-direction: column;
      margin: 0 1em;
    }

    .imageWrapper,
    .imageWrapperW {
      width: 228px;
      height: 303px;
      border-radius: 8px;
      background-color: #00acd8;

      .cardImage {
        width: 228px;
        height: 269px;
        object-fit: contain;
        border-radius: 8px;
        border: solid 1px #ffffff;
      }
      .checkImage {
        display: inline;
      }
      .wishlistable {
        height: 23px;
        font-family: SourceSansPro;
        font-size: 18px;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.28;
        letter-spacing: normal;
        text-align: left;
        color: #ebeae9;
        text-align: center;
      }
      .wishlisted {
        height: 23px;
        font-family: SourceSansPro;
        font-size: 18px;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.28;
        letter-spacing: normal;
        text-align: left;
        color: #00acd8;
        text-align: center;
      }
    }
    .priceWrapper {
      height: 70px;
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
    }

    .imageWrapperW {
      background: #e5e5e5;

      div {
        display: flex;
        justify-content: center;

        img {
          width: 20px;
          height: 20px;
          margin-right: 0.5em;
        }
      }
    }

    .discount {
      display: flex;
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
    h3 {
      display: block;
      position: relative;
      height: 46px;
      font-family: SourceSansPro;
      font-size: 18px;
      font-weight: 600;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.28;
      letter-spacing: 0.43px;
      text-align: center;
      color: #515252;
      padding: 0.5em 0.5em;
    }
    h2 {
      height: 32px;
      font-family: SourceSansPro;
      font-size: 25px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.28;
      letter-spacing: 0.16px;
      color: #515252;
      text-align: center;
    }
    p.instock {
      height: 17px;
      font-family: SourceSansPro;
      font-size: 13px;
      font-weight: 600;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.31;
      letter-spacing: 0.09px;
      text-align: center;
      color: #00acd8;
      padding-top: 0.5em;
    }
    .underline {
      height: 1px;
      width: 50%;
      margin: 0 auto;
      background: #00acd8;
      margin-top: 0.4em;
    }
    a.detail {
      height: 23px;
      font-family: SourceSansPro;
      font-size: 18px;
      font-weight: 600;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.28;
      letter-spacing: normal;
      text-align: left;
      color: #00acd8;
      text-align: center;
      padding: 0.3em;
    }
  }
`;
