import styled from 'styled-components';

export const wishlistgroupStyle = {
  width: '100px',
  height: '120px',
  borderRadius: '8px',
  boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.16)',
  backgroundColor: '#ffffff',
  '.vb--wishlist--group--item--container': {
    width: '100%',
    height: '100%',
    padding: '1px'
  },
  '.vb--wishlist--group--item--image': {
    background: 'url(/images/emptyFavorite.svg) center center no-repeat',
    display: 'inline-block',
    width: '99px',
    height: '100px',
    objectFit: 'contain',
    padding: '1px',
    backgroundSize: 'contain'
  },
  '.vb--wishlist--group--item--price': {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '2px'
  },
  span: {
    color: '#0e273b',
    textAlign: 'center',
    fontFamily: 'Source Sans Pro',
    marginBottom: '-10px',
    fontSize: '12px',
    fontWeight: '700'
  }
};

export const Wrapper = styled.div((props) => ({
  ...wishlistgroupStyle,
  ...props.styles
}));
