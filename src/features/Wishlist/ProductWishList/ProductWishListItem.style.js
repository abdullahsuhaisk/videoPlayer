import styled from 'styled-components';

const ProductWishListItemStyle = {
  marginTop: '15px',
  border: 'solid 1px #f7f7f7',
  width: '390px',
  '.vb-product-detail-wish-list-container': {
    padding: '5px',
    display: 'flex',
    position: 'relative',
    backgroundColor: '#ffffff',
    font: 'Sans Serif Pro',
    alignItems: 'center',
    fontWeight: '700',
    color: '#515252',
    width: '390px',
    height: '50px',
    border: 'solid 1px #fff',
    borderRadius: '8px'
  },
  '.vb-product-detail-wish-list-item-image': {
    borderRadius: '8px',
    marginRight: '20px',
    width: '40px',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage:
      'url(http://storage.googleapis.com/vibuy-staging-uploads/product/1/images/300_thumbnail@dontDelete.jpg)'
  },
  '.vb-product-detail-wish-list-item-name': {
    marginRight: '20px',
    marginBottom: '20px'
  },
  '.vb-product-detail-wish-list-item-counter': {
    marginRight: '20px',
    position: 'absolute',
    top: '33px',
    left: '67px',
    fontSize: '11px'
  },
  '.vb-product-detail-wish-list-item-icon': {
    position: 'absolute',
    right: '15px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: 'url(/images/wishadded.svg)',
    width: '15px',
    height: '15px'
  },
  '.selected': {
    border: 'solid 1px #83329c'
  },
  '.already-added': {
    border: 'solid 1px #eaeaea',
    backgroundColor: 'rgba(0, 172, 216, 0.1)'
  },
  '.vb-product-detail-wish-list-container:hover': {
    border: 'solid 1px #83329c'
  }
};

export const Wrapper = styled.div((props) => ({
  ...ProductWishListItemStyle,
  ...props.styles
}));
