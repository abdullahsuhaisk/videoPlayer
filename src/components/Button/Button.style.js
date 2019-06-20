import styled from 'styled-components';

export const ButtonStyle = styled.button((props) => ({
  color: '#ffffff !important',
  width: '150px',
  height: '40px',
  fontFamily: 'Source Sans Pro !important',
  fontSize: '14px !important',
  borderRadius: '38px',
  boxShadow: '-10px 0 6px 0 rgba(0, 0, 0, 0.16)',
  backgroundColor: '#83329c !important',
  padding: '8px 14px',
  border: '1px solid #fff !important',
  textTransform: 'none',
  textAlign: 'center',
  verticalAlign: 'middle',
  lineHeight: '1.5',
  transition:
    'color 0.15s ease-in-out background-color 0.15s ease-in-out border-color 0.15s ease-in-out box-shadow 0.15s ease-in-out !important',
  overflow: 'visible',
  cursor: 'pointer',
  '&:hover': {
    border: '1px solid #82329c !important'
  },
  ...props.styles
}));

// const textColorActive = '#82329c';

// export const AddNewButton = styled(Button)`
//   ${AddNewButtonStyle};
//   svg {
//     position: absolute;
//     top: 0;
//     left: 0;
//   }
// `;
// const ActiveStyle = css`
//   border: solid 1px #82329c;
//   background-color: #fff;
//   color: ${textColorActive};
//   &:hover {
//     opacity: 0.8;
//   }
// `;
