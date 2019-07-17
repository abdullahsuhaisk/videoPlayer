import styled from 'styled-components';

export const ButtonWrapper = styled.div((props) => ({
  '.vb--button': {
    color: '#ffffff ',
    minWidth: '120px',
    height: '30px',
    fontFamily: 'Source Sans Pro ',
    fontSize: '14px ',
    borderRadius: '38px',
    boxShadow: '0px 0px 10px 0 rgba(0, 0, 0, 0.16)',
    backgroundColor: '#83329c ',
    border: '1px solid #fff ',
    transition: 'all .2s',
    outline: '0',
    overflow: 'visible',
    cursor: 'pointer',
    '&:hover': {
      border: '1px solid #82329c ',
      color: '#00acd8 ',
      backgroundColor: '#FFF '
    }
  },
  ...props.styles
}));

export default ButtonWrapper;

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
