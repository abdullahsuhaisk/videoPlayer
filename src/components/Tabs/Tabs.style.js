import styled from 'styled-components';

export const Wrapper = styled.div((props) => ({
  'pointer-events': 'auto',
  position: 'absolute',
  top: '126px',
  left: '50px',
  width: '900px',
  height: '300px',
  '.vibuy--tabs': {},
  '.vibuy--tab-list': {},
  '.vibuy--tab': {
    'background-color': '#0000',
    'border-width': '0px 0px 2px 0px',
    '&:focus': {
      'border-color': '#00acd8'
    }
  },
  '.vibuy--tab-selected': {
    'background-color': '#0000',
    'border-width': '0px 0px 2px 0px',
    'border-color': '#00acd8',
    'border-style': 'solid',
    color: '#fff'
  },
  '.vibuy--tab-panel': {},
  '.no-product': {
    display: 'block',
    padding: '10px'
  },
  ...props.styles
}));
