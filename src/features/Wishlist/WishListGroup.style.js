import styled from 'styled-components';

export const styledWishListGroup = {
  height: '185px',
  width: '720px',
  borderRadius: '8px',
  border: ' solid 1px #ebeae9',
  backgroundColor: '#ffffff',
  '.vb--wishlist--group--container': {
    margin: '10px'
  },
  '.vb--wishlist--group--header': {
    position: 'relative',
    height: '25px',
    width: '100%',
    '.vb--wishlist-group--header--content': {
      position: 'absolute',
      top: 0,
      left: 0
    },
    '.vb--wishlist-group--header--see-all': {
      position: 'absolute',
      top: 0,
      left: 240,
      cursor: 'pointer'
    },
    span: {
      fontFamily: 'Source Sans Pro',
      fontWeight: '600',
      fontSize: '12px',
      color: '#0b2443'
    },
    '.blue-color': {
      color: '#00acd8',
      fontSize: '11px'
    }
  },
  '.vb----wishlist--group--content': {
    display: 'flex'
  },
  '.vb----wishlist--group--content--item': {
    marginRight: '15px'
  }
};

export const Wrapper = styled.div((props) => ({
  ...styledWishListGroup,
  ...props.styles
}));
