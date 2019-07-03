import styled from 'styled-components';

const AddtoCardButtonWrapper = styled.div((props) => ({
  '.vb--addToCardButton': {
    color: '#ffffff ',
    minWidth: '120px',
    height: '30px',
    fontFamily: 'Source Sans Pro ',
    fontSize: '14px ',
    boxShadow: '0px 0 6px 0 rgba(0, 0, 0, 0.16)',
    backgroundColor: '#83329c ',
    transition: 'all .2s',
    outline: '0',
    overflow: 'visible',
    cursor: 'pointer',
    border: 'solid 1px #83329c',
    borderRadius: '38px',
    display: 'flex',
    justifyContent: 'space-around',

    '&:hover': {
      border: '7px solid #82329c'
    },
    '.vb--addToCardButton-icon': {
      background: 'url(/images/cart-simple.svg) center / cover no-repeat ',
      display: 'inline-block',
      width: '12px',
      height: '12px'
    }
  },
  ...props.styles
}));

export default AddtoCardButtonWrapper;

// '&:hover': {
//   border: '1px solid #82329c ',
//   color: '#00acd8 ',
//   backgroundColor: '#FFF '
// },
