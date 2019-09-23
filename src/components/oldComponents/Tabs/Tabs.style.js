import styled from 'styled-components';

export const Wrapper = styled.div((props) => ({
  pointerEvents: 'auto',
  position: 'absolute',
  top: '126px',
  left: '50px',
  width: '900px',
  height: '300px',
  '.vb--tabs': {},
  '.vb--tab-list': {
    paddingLeft: '20'
  },
  '.vb--tab': {
    backgroundColor: '#0000',
    borderWidth: '0px 0px 2px 0px',
    '&:focus': {
      borderColor: '#00acd8'
    }
  },
  '.vb--tab-selected': {
    backgroundColor: '#0000',
    borderWidth: '0px 0px 2px 0px',
    borderColor: '#00acd8',
    borderStyle: 'solid',
    color: '#fff'
  },
  '.no-product': {
    display: 'block',
    padding: '10px'
  },
  ...props.styles
}));
