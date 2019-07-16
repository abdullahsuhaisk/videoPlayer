import styled from 'styled-components';

export const loginFormStyles = {
  pointerEvents: 'auto',
  position: 'absolute',
  top: '0',
  right: '0',
  width: '375px',
  height: '563px',
  backgroundColor: 'white',
  boxShadow: '-24px 0 42px -12px rgba(0,0,0,0.75)',
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  '.vb--login-close': {
    position: 'absolute',
    top: '0',
    left: '0',
    padding: '10px 15px',
    fontSize: '24px',
    color: '#0008',
    cursor: 'pointer',
    outline: 'none'
  },
  '.vb--login-banner': {
    background: 'url(/images/login_image.svg) center / contain no-repeat',
    margin: '30px 0 30px 0',
    width: '100%',
    height: '140px'
  },
  '.vb--login-input-container': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    input: {
      width: '280px',
      height: '25px',
      margin: ' 10px',
      fontSize: '14px',
      fontFamily: 'Source Sans Pro',
      color: '#0B2443CC',
      border: '0 solid #0B2443CC',
      borderWidth: '0 0 1px 0',
      outline: '0'
    }
  },
  '.vb--login-button': {
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
  },
  '.vb--login-with-wrapper': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: '70px',
    span: {
      fontSize: '12px',
      fontFamily: 'Source Sans Pro',
      color: '#0B2443'
    }
  },
  '.vb--login-with-buttons-container': {
    display: 'flex',
    flexDirection: 'row',
    '.vb--login-with-google': {
      background: 'url(/images/google_blue.png) center / contain no-repeat',
      width: '20px',
      height: '20px',
      margin: '0 10px 0 0',
      cursor: 'pointer',
      outline: 'none'
    },
    '.vb--login-with-facebook': {
      background: 'url(/images/facebook_blue.png) center / contain no-repeat',
      width: '20px',
      height: '20px',
      margin: '0 0 0 10px',
      cursor: 'pointer',
      outline: 'none'
    }
  },
  '.vb--login-forgot-password-button': {
    width: '100%',
    marginTop: '50px',
    fontFamily: 'Source Sans Pro',
    fontSize: '12px',
    textDecoration: 'underline',
    color: '#0B2443',
    textAlign: 'center',
    cursor: 'pointer',
    outline: 'none'
  },
  '.vb--login-register-button': {
    width: '200px',
    height: '30px',
    margin: '10px 0 30px 0',
    fontSize: '12px',
    fontFamily: 'Source Sans Pro',
    color: '#0B2443',
    backgroundColor: 'transparent',
    border: '1px solid #0B2443',
    borderRadius: '25px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all .2s',
    outline: '0',
    '&:hover': {
      color: '#FFF',
      backgroundColor: '#0B2443',
      border: '1px solid #FFF'
    }
  }
};

export const Wrapper = styled.div((props) => ({
  ...loginFormStyles,
  ...props.styles
}));
