import styled from 'styled-components';

const productDetailsStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignContent: 'center',
  height: '500px',
  '.vb--product-detail-dialog-slider': {},
  '.vb--product-detail-dialog-content': {}
};
export const ProductDetailModalDialog = styled.div((props) => ({
  ...productDetailsStyle,
  ...props.styles
}));
