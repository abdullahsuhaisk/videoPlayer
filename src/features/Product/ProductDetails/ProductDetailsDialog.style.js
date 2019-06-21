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
      width: '300px'
    },
    'vb--product-detail-dialog-slider-image': {
      width: '300px'
    },
    '.vb--product-detail-dialog-content': {
      minHeight: '450px',
      maxWidth: '600px',
      marginLeft: '15px',
      paddingTop: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      alignItems: 'flex-start',
      justifyContent: 'start'
    },
    '.vb--product-detail-dialog-content-header': {
      fontFamily: 'SourceSansPro',
      fontSize: '30px',
      fontWeight: '600',
      fontStyle: 'normal',
      fontStretch: 'normal',
      lineHeight: '1.26',
      letterSpacing: 'normal',
      textAlign: 'left',
      color: '#0b2443'
    }
  }
};
export const ProductDetailModalDialog = styled.div((props) => ({
  ...productDetailsStyle,
  ...props.styles
}));
