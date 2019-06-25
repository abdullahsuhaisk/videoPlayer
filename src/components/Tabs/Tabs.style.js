import styled from 'styled-components';

export const Wrapper = styled.div((props) => ({
  pointerEvents: 'auto',
  position: 'absolute',
  top: '126px',
  left: '50px',
  width: '900px',
  height: '300px',
  '.vb--tabs': {},
  '.vb--tab-list': {},
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
  '.vb--tab-panel': {},
  '.no-product': {
    display: 'block',
    padding: '10px'
  },
  ...props.styles
}));

export const NavigationTabsWrapper = styled.div((props) => ({
  pointerEvents: 'auto',
  position: 'absolute',
  top: '0',
  left: '50px',
  width: '900px',
  height: '565px',
  '.vb--tabs': {
    boxShadow: '-10px 0 6px 0 rgba(0, 0, 0, 0.16)',
    backgroundColor: '#f5f9fc',
    textAlign: 'left',
    color: '#0e273b',
    fontFamily: 'Source Sans Pro',
    fontStyle: 'normal',
    fontStretch: 'normal',
    display: 'flex',
    flexDirection: 'column'
  }
}));
