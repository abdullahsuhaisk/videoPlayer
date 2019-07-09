import styled from 'styled-components';

export const ShoppingCartItemStyles = {
  width: '685px',
  height: '85px',
  borderRadius: '8px',
  border: 'solid 1px #ebeae9',
  backgroundColor: '#ffffff',
  fontFamily: 'Source Sans Pro',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '15px 15px 15px 70px'
};

export const Wrapper = styled.div((props) => ({
  ...ShoppingCartItemStyles,
  ...props.styles
}));
