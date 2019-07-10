import styled from 'styled-components';

export const ProductWishListStyle = {
  width: '60%',
  height: '455px',
  borderRadius: '8px',
  boxShadow: ' 0 3px 6px 0 rgba(0, 0, 0, 0.16)',
  backgroundColor: '#f7f7f7',
  position: 'relative',
  display: 'inline-block',

  '.vb-product-wish-list-container': {
    padding: '30px'
  },
  '.vb-product-wish-list-container span': {
    fontSize: '13px',
    fontFamily: 'Source Sans Pro',
    textAlign: 'left',
    color: '#515252',
    fontWeight: '700'
  },
  '.vb-product-wish-list-search-container': {
    marginTop: '5px',
    width: '390px',
    height: '22px',
    position: 'relative',
    borderBottom: '1px solid',
    marginBottom: '10px',
    '.icon': {
      width: '20px',
      height: '20px',
      backgroundImage: 'url(/images/magnifier.svg)',
      objectFit: 'contain',
      opacity: '0.5',
      position: 'absolute',
      top: '0',
      left: '0'
    }
  }
};

export const Wrapper = styled.div((props) => ({
  ...ProductWishListStyle,
  ...props.styles
}));
