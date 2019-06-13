import styled from 'styled-components';

export const profileButtonStyles = {
  pointerEvents: 'auto',
  position: 'absolute',
  top: '32px',
  right: '32px',
  cursor: 'pointer',
  '.vb--profile-button-username': {
    display: 'inline-block',
    width: '100px',
    height: '18px',
    marginRight: '5px',
    fontFamily: 'Source Sans Pro',
    fontWeight: 600,
    fontSize: ' 12px',
    textAlign: 'right',
    color: '#0b2443',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  '.vb--profile-button-avatar': {
    background: 'url(/images/user_avatar.svg) center / cover no-repeat',
    display: 'inline-block',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    border: '1px solid #494949'
  }
};

export const Wrapper = styled.div((props) => ({
  ...profileButtonStyles,
  ...props.styles
}));
