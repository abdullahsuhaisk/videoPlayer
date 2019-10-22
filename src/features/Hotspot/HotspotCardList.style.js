import styled from 'styled-components';

export const Wrapper = styled.div((props) => ({
  position: 'absolute',
  width: '100px',
  height: '100%',
  right: '30px',
  '.vb--hotspot-card-list-cards': {
    height: '95%',
    overflow: 'hidden auto',
    marginTop: '60px',
    display: 'grid',
    gridTemplateRows:
      '100px 100px 100px 100px 100px 100px 100px 100px 100px 100px',
    gridGap: '15px'
  },
  ...props.styles
}));
