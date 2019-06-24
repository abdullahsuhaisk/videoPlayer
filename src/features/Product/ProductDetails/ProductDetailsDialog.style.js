import styled from 'styled-components';

const productDetailsStyle = {
  '.vb--product-details-container': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    color: 'black',
    '.vb--product-detail-dialog-slider': {
      width: '40%'
    },
    'vb--product-detail-dialog-slider-image': {
      width: '40%'
    },
    '.vb--product-detail-dialog-contents': {
      minHeight: '450px',
      width: '60%',
      marginLeft: '15px',
      paddingTop: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      alignItems: 'flex-start',
      justifyContent: 'start',
      marginBottom: '15px',
      fontFamily: 'Source Sans Pro'
    },
    '.vb--product-detail-dialog-content-header': {
      fontFamily: 'Source Sans Pro',
      fontSize: '20px',
      fontWeight: '600',
      fontStyle: 'normal',
      fontStretch: 'normal',
      lineHeight: '1.26',
      letterSpacing: 'normal',
      textAlign: 'left',
      color: '#0b2443'
    },
    '.vb--product-detail-dialog-content-content': {
      fontSize: '15px',
      display: 'list-item',
      marginLeft: '15px',
      marginBottom: '5px'
    },
    '.vb--product-detail-dialog-content-features': {
      marginTop: '15px',
      marginBottom: '5px',
      '.vb--product-detail-dialog-content-features-header': {
        fontSize: '20px',
        marginBottom: '3px'
      },
      '.vb--product-detail-dialog-content-features-content': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        minWidth: '300px',
        marginBottom: '7px'
      },
      button: {
        borderRadius: '6px',
        border: 'solid 1px #b9b9b9;',
        backgroundColor: '#ffffff',
        outline: 'none',
        cursor: 'pointer',
        padding: '10px'
      },
      '.active': {
        border: 'solid 2px #83329c'
      }
    },
    '.vb--product-detail-dialog-content-price-and-cartButton': {
      width: '100%',
      header: '40%',
      display: 'flex',
      justifyContent: 'space-around'
    }
  },
  '.vb--product-card-price-container': {
    width: '100%',
    height: '100%',
    margin: '10px',
    '.vb--product-card-discount-rate': {
      marginLeft: '-10px',
      marginRight: '10px',
      float: 'left',
      width: '60px',
      height: '45px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#D53738',
      fontWeight: 'bold',
      borderRadius: '5px',
      span: {
        fontSize: '25px',
        color: '#ffffff'
      }
    },
    '.vb--product-card-discount-rate-and-price': {
      display: 'flex',
      width: '100%'
    },
    '.vb--product-card-base-price': {
      alignItems: 'center',
      marginBottom: '5px',
      paddingLeft: '70px',
      span: {
        color: '#1a1a1a',
        paddingLeft: '4px',
        fontSize: '18px',
        textDecoration: 'line-through'
      }
    },
    '.vb--product-card-current-price': {
      paddingRight: '100px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'black',
      span: {
        padding: '2px',
        fontSize: '25px',
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#1a1a1a'
      }
    }
  }
};
export const ProductDetailsWrapper = styled.div((props) => ({
  ...productDetailsStyle,
  ...props.styles
}));
