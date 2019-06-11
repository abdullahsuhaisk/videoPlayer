import styled from 'styled-components';

export const Wrapper = styled.div((props) => ({
  position: 'absolute',
  width: '100px',
  height: '100%',
  right: '10px',
  pointerEvents: 'auto',
  '.list-header': {
    textAlign: 'center',
    padding: '5px'
  },
  '.hotspot-list': {
    height: '95%',
    overflow: 'hidden auto'
  },
  ...props.styles
}));
