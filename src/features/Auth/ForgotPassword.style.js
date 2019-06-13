import styled from 'styled-components';

export const forgotPasswordStyles = {
  pointerEvents: 'auto',
  position: 'absolute',
  top: '0',
  right: '0',
  width: '375px',
  height: '563px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'white',
  boxShadow: '-24px 0 42px -12px rgba(0,0,0,0.75)',
  '.vb--forgot-password-close': {
    position: 'absolute',
    top: '0',
    left: '0',
    padding: '10px 15px',
    fontSize: '24px',
    color: '#0008',
    cursor: 'pointer'
  },
  '.vb--forgot-password-banner': {
    background: 'url(/images/lock.png) center / contain no-repeat',
    margin: '30px 0 10px 0',
    width: '100%',
    height: '140px'
  },
  '.vb--forgot-password-text': {
    margin: '50px',
    fontSize: '12px',
    fontFamily: 'Source Sans Pro',
    color: '#0B2443'
  },
  '.vb--forgot-password-input-container': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    input: {
      width: '280px',
      height: '25px',
      margin: '5px',
      fontSize: '14px',
      fontFamily: 'Source Sans Pro',
      color: '#0B2443CC',
      border: '0 solid #0B2443CC',
      borderWidth: '0 0 1px 0',
      outline: '0'
    },
    span: {
      width: '280px',
      fontSize: '10px',
      fontFamily: 'Source Sans Pro',
      color: '#0B2443CC',
      marginTop: '5px'
    }
  },
  '.vb--forgot-password-button': {
    width: '200px',
    height: '30px',
    margin: '20px 0 20px 0',
    fontSize: '14px',
    fontFamily: 'Source Sans Pro',
    color: 'white',
    backgroundColor: '#00acd8',
    border: '1px solid white',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'all .2s',
    outline: '0',
    '&:hover': {
      color: '#00acd8',
      backgroundColor: '#FFF',
      border: '1px solid #00acd8'
    }
  }
};

export const Wrapper = styled.div((props) => ({
  ...forgotPasswordStyles,
  ...props.styles
}));
