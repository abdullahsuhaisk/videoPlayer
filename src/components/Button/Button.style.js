import styled, { css } from 'styled-components';

// const textColor1 = '#4d4f5c';
const textColor2 = '#585a66';
const textColorActive = '#82329c';
const textColor = textColor2;

const ButtonSt = css`
  color: ${textColor};
  font-family: 'Source Sans Pro';
  font-size: 14px;
  border-radius: 4px;
  padding: 8px 14px;
  background-color: #fff;
  border: 1px solid #fff;
  text-transform: none;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  line-height: 1.5;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: button;
  overflow: visible;
  -webkit-appearance: inherit;
  cursor: pointer;
  box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.16);
  font-weight: 600;
  &:hover {
    border: 0;
    border: 1px solid #82329c;
  }
  &:focus {
    outline: -webkit-focus-ring-color auto 0px;
  }
`;

const ActiveStyle = css`
  border: solid 1px #82329c;
  background-color: #fff;
  color: ${textColorActive};
  &:hover {
    opacity: 0.8;
  }
`;

export const ButtonStyle = styled.button`
  ${ButtonSt}
  ${({ active }) => active && ActiveStyle}
`;

// export const AddNewButton = styled(Button)`
//   ${AddNewButtonStyle};
//   svg {
//     position: absolute;
//     top: 0;
//     left: 0;
//   }
// `;
