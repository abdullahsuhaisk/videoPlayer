import styled from 'styled-components';

export const SettingsWrapper = styled.div`
  .settingsBtn {
    width: 24px;
    height: 24px;
    background: url(/images/cogwheel.svg) center / contain no-repeat;
    cursor: pointer;
    margin-right: 20px;
    border: none;
    &:focus {
      outline: none;
    }
  }
`;
