import styled from 'styled-components';

const ProductWishListItemStyle = {
  width: '390px',
  height: '50px',
  padding: '3px',
  display: 'flex',
  position: 'relative',
  border: 'solid 1px #83329c',
  backgroundColor: '#ffffff',
  font: 'Sans Serif Pro',
  '.vb-product-detail-wish-list-item-image': {
    marginRight: '20px'
  },
  '.vb-product-detail-wish-list-item-name': {
    marginRight: '20px'
  },
  '.vb-product-detail-wish-list-item-counter': {
    marginRight: '20px',
    position: 'absolute',
    top: '29px',
    left: '60px',
    fontSize: '11px'
  },
  '.vb-product-detail-wish-list-item-icon': {
    marginRight: '20px'
  }
};

export const Wrapper = styled.div((props) => ({
  ...ProductWishListItemStyle,
  ...props.styles
}));
