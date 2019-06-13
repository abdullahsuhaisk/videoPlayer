import styled from 'styled-components';

export const Wrapper = styled.div((props) => ({
  pointerEvents: 'auto',
  width: '800px',
  height: '315px',
  '.vb--carousel-next-arrow': {
    right: '-100px',
    top: '80px',
    width: '90px',
    height: '90px',
    '&:before': {
      background: 'url(/images/sign-right.svg) no-repeat center /contain',
      display: 'block',
      width: '100%',
      height: '100%'
    }
  },
  '.vb--carousel-prev-arrow': {
    transform: 'scaleX(-1)',
    right: '-100px',
    top: '180px',
    width: '90px',
    height: '90px',
    '&:before': {
      background: 'url(/images/sign-right.svg) no-repeat center /contain',
      display: 'block',
      width: '100%',
      height: '100%'
    }
  },
  ...props.styles
}));
