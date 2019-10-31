import styled from 'styled-components';

export const Wrapper = styled.div((props) => ({
  position: 'absolute',
  width: '120px',
  height: '100%',
  right: '35px',
  '.vb--hotspot-card-list-cards': {
    height: '95%',
    overflow: 'hidden auto',
    marginTop: '60px',
    display: 'grid',
    gridTemplateRows:
      '120px 120px 120px 120px 120px 120px 120px 120px 120px 120px',
    gridGap: '15px'
  },
  ...props.styles
}));
