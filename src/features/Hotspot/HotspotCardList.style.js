import styled from 'styled-components';

export const Wrapper = styled.div((props) => ({
  position: 'absolute',
  width: '100px',
  height: '100%',
  right: '10px',
  '.vb--hotspot-card-list-header': {
    pointerEvents: 'auto',
    textAlign: 'center',
    padding: '5px'
  },
  '.vb--hotspot-card-list-cards': {
    height: '95%',
    overflow: 'hidden auto',
    marginTop: '10px',
    display: 'grid',
    gridTemplateRows:
      '100px 100px 100px 100px 100px 100px 100px 100px 100px 100px',
    gridGap: '15px'
  },
  ...props.styles
}));
