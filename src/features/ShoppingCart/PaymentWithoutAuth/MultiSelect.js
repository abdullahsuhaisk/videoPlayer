import Select from 'react-select';
import styled from 'styled-components';

export const Multiselect = styled(Select)`
  .select__menu-list::-webkit-scrollbar {
    display: none;
  }
  &.select--multi {
    .select-value {
      display: inline-flex;
      align-items: center;
    }
  }

  & .select__single-value {
    color: hsl(0, 0%, 20%);
    max-width: calc(100% - 8px);
    overflow: unset;
    position: absolute;
    text-overflow: ellipsis;
    white-space: nowrap;
    top: 55%;
    box-sizing: border-box;
    font-size: 14px;
    text-align: left;
    color: #000;
    max-height: 46px;
    border-radius: 0px;
    padding: 0;
    font-family: 'Nunito Sans', sans-serif;

    @media screen and (min-width: 851px) and (max-width: 999px) {
      font-size: 20px !important;
    }
    @media screen and (min-width: 1000px) and (max-width: 1200px) {
      font-size: 18px !important;
    }
  }
  & .select__control {
    font-size: smaller;
    border: solid 1px
      ${(props) =>
        props.error === 'true' ? 'rgba(243, 6, 64 , 0.4)' : '#eaeaea'};
    background-color: ${(props) =>
      props.error === 'true' ? 'rgba(243, 6, 64 , 0.1)' : '#fafafa'};
    max-height: 46px;
    border-radius: 0px;
    padding: 0 14px;
    font-family: 'Nunito Sans', sans-serif;
    ::-webkit-scrollbar {
      display: none;
    }
    &:hover {
      border: solid 1px #bfbfbf;
    }
    &--is-focused {
      border: solid 1px #bfbfbf;
    }
    &--menu-is-open {
      border: solid 1px #bfbfbf;
    }
  }
  & .select__indicator {
    display: none;
  }
  & .select__indicators .select__indicator-separator {
    display: none;
  }
  .select__menu {
    font-size: 16px;
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.15);
    border: solid 1px #f5f5f5;
    background-color: #ffffff;
    text-align: left;
    color: #929292;
    margin: 0;
    border-radius: 0px;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 14px;

    @media screen and (min-width: 851px) and (max-width: 999px) {
      font-size: 20px !important;
    }
    @media screen and (min-width: 1000px) and (max-width: 1200px) {
      font-size: 18px !important;
    }
  }

  & .select__value-container {
    max-height: 46px;
    border-radius: 0px;
    padding: 0;
  }
  .select__option--is-selected {
    color: #0b2443;
    background: #f5f5f5;
  }
  .select__option--is-focused {
    color: #0b2443;
    background: #f5f5f5;
  }
  .select__option {
    :hover {
      background: #f5f5f5;
      color: #0b2443;
    }
  }

  .select__placeholder {
    top: 55%;
    font-size: 14px;
  }
`;
