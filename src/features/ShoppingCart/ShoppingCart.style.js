import styled from 'styled-components';

const shoppingCartBasketStyle = {
  width: '100%',
  height: '498px',
  '.vb--tabs--shoppingCart-basket-container': {
    height: '498px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    '.vb--tabs-shoppingCart-content-Section': {
      padding: '40px',
      '.vb--tabs-profile-content-item': {
        marginTop: '20px',
        width: '600px',
        height: '70px',
        borderRadius: '8px',
        border: 'solid 1px #ebeae9',
        backgroundColor: '#ffffff'
      }
    },
    '.vb--tabs--shoppingCart-basket-below': {
      width: '100%',
      position: 'absolute',
      bottom: '0',
      height: '50px',
      background: '#f5f9fc',
      boxShadow: '-10px 0 6px 0 rgba(0, 0, 0, 0.16)',
      display: 'flex',
      justifyContent: 'flex-end',

      '.vb--tabs--shoppingCart-basket-below-item': {
        paddingLeft: '10px',
        paddingRight: '40px',
        marginTop: '15px'
      }
    }
  }
};
export const ShoppingCartItemWrapper = styled.div((props) => ({
  ...shoppingCartBasketStyle,
  ...props.styles
}));
