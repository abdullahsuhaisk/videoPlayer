import styled from 'styled-components';

export const JumpToProductWrapper = styled.div`
  .jumpToProductBtn {
    width: 24px;
    height: 24px;
    background: url(/images/jump-to-product.svg) center / contain no-repeat;
    cursor: pointer;
    margin-right: 30px;
    border: none;
    &:focus {
      outline: none;
    }
  }
`;
