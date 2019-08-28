import styled from 'styled-components';

export const CartWrapper = styled.div`
.cartBtn {
    width: 24px;
    height: 24px;
    background: url(/images/cart-simple-add.svg) center / contain no-repeat;
    cursor: pointer;
    margin-right: 20px;
    border: none;
    &:focus{
      outline: none
    }
`;
