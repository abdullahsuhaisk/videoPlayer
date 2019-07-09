import styled from 'styled-components';

export const ProductWishListStyle = {};

export const Wrapper = styled.div((props) => ({
  ...ProductWishListStyle,
  ...props.styles
}));
