import styled from 'styled-components';

export const Wrapper = styled.div((props) => ({
  pointerEvents: 'auto',
  width: '150px',
  height: '315px',
  borderRadius: '5px',
  backgroundColor: '#F4F4F8',
  margin: 'auto',
  '.first-container': {
    width: '100%',
    height: '60%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '5px',
    background: '#00acd8'
  },
  '.product-image': {
    width: '100%',
    height: '89%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    cursor: 'default'
  },
  '.add-to-wishlist': {
    color: '#FFFC',
    marginBottom: '5px',
    fontWeight: 'bold',
    fontSize: '10px',
    outline: 'none',
    cursor: 'pointer'
  },
  '.second-container': {
    width: '100%',
    height: '40%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '.brand': {
      color: '#0009',
      marginTop: '5px',
      fontWeight: 'bold',
      fontSize: '12px'
    },
    '.title': {
      color: '#0009',
      padding: '2px',
      fontWeight: 'bold',
      fontSize: '12px'
    },
    '.price-container': {
      margin: '10px',
      '.discount-rate': {
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
      '.base-price': {
        display: 'flex',
        height: '15px',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        span: {
          color: '#525153',
          paddingLeft: '2px',
          fontSize: '9px',
          textDecoration: 'line-through'
        }
      },
      '.current-price': {
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
    },
    '.price': {
      color: '#525153',
      margin: '15px',
      fontSize: '18px',
      fontWeight: 'bold'
    },
    '.in-stock': {
      color: '#00acd8',
      fontSize: '10px',
      fontWeight: 'bold'
    },
    hr: {
      width: '50%',
      margin: '3px',
      borderTop: '1px solid #00acd8'
    },
    '.details': {
      color: '#00acd8',
      fontSize: '12px',
      fontWeight: 'bold',
      outline: 'none',
      cursor: 'pointer'
    }
  },
  ...props.styles
}));
