import styled, { keyframes } from 'styled-components';
import { bounceInRight } from 'react-animations';

const bounceAnimation = keyframes`${bounceInRight}`;
export const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;
export const Wrapper = styled.div((props) => ({
  pointerEvents: 'auto',
  width: '100px',
  height: '100px',
  borderRadius: '5px',
  margin: '0px auto',
  border: '#fff 1px solid',
  boxShadow: '#000 3px 3px 6px 0',
  cursor: 'pointer',
  '.vb--hotspot-card-product-image': {
    width: '100%',
    height: '100%',
    borderRadius: '5px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  },
  'vb--hotspot-card-list': {
    margin: '30px'
  },
  ...props.styles
}));
