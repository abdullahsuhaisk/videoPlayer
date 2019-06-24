import styled from 'styled-components';

const productPriceStyle = {
  width: '100%',
  height: '40%',
  '.vb--product-card-price-container': {
    width: '50%',
    margin: '10px',
    '.vb--product-card-discount-rate': {
      float: 'left',
      width: '24px',
      height: '15px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#D53738',
      fontWeight: 'bold',
      borderRadius: '5px',
      span: {
        fontSize: '10px'
      }
    },
    '.vb--product-card-base-price': {
      display: 'flex',
      height: '15px',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'black',
      span: {
        color: '#525153',
        paddingLeft: '4px',
        fontSize: '25px',
        textDecoration: 'line-through'
      }
    },
    '.vb--product-card-current-price': {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'black',
      span: {
        color: '#525153',
        padding: '2px',
        fontSize: '18px',
        fontWeight: 'bold'
      }
    }
  }
};

export const ProductPriceWrapper = styled.div((props) => ({
  ...productPriceStyle,
  ...props.styles
}));
