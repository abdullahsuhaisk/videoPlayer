import styled from 'styled-components';

export const Wrapper = styled.div((props) => ({
  'pointer-events': 'auto',
  width: '150px',
  height: '315px',
  'border-radius': '5px',
  'background-color': '#F4F4F8',
  margin: 'auto',
  '.first-container': {
    width: '100%',
    height: '60%',
    display: 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    'justify-content': 'space-between',
    'border-radius': '5px',
    background: '#00acd8',
    cursor: 'pointer'
  },
  '.product-image': {
    width: '100%',
    height: '89%',
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    'border-radius': '5px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    cursor: 'default',
    img: {
      'max-width': '100%',
      'max-height': '100%',
      border: 'none'
    }
  },
  '.add-to-wishlist': {
    color: '#FFFC',
    'margin-bottom': '5px',
    'font-weight': 'bold',
    'font-size': '10px'
  },
  '.second-container': {
    width: '100%',
    height: '40%',
    display: 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    '.brand': {
      color: '#0009',
      'margin-top': '5px',
      'font-weight': 'bold',
      'font-size': '12px'
    },
    '.title': {
      color: '#0009',
      padding: '2px',
      'font-weight': 'bold',
      'font-size': '12px'
    },
    '.price-container': {
      margin: '10px',
      '.discount-rate': {
        float: 'left',
        width: '24px',
        height: '15px',
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        'background-color': '#D53738',
        'font-weight': 'bold',
        'border-radius': '5px',
        span: {
          'font-size': '10px'
        }
      },
      '.base-price': {
        display: 'flex',
        height: '15px',
        'align-items': 'center',
        'justify-content': 'center',
        color: 'black',
        span: {
          color: '#525153',
          'padding-left': '2px',
          'font-size': '9px',
          'text-decoration': 'line-through'
        }
      },
      '.current-price': {
        width: '100%',
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        color: 'black',
        span: {
          color: '#525153',
          padding: '2px',
          'font-size': '18px',
          'font-weight': 'bold'
        }
      }
    },
    '.price': {
      color: '#525153',
      margin: '15px',
      'font-size': '18px',
      'font-weight': 'bold'
    },
    '.in-stock': {
      color: '#00acd8',
      'font-size': '10px',
      'font-weight': 'bold'
    },
    hr: {
      width: '50%',
      margin: '3px',
      'border-top': '1px solid #00acd8'
    },
    '.details': {
      color: '#00acd8',
      'font-size': '12px',
      'font-weight': 'bold'
    }
  },
  ...props.styles
}));
