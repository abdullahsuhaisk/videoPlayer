import styled from 'styled-components';

export const registerFormStyles = {
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
  '.vb--register-close': {
    position: 'absolute',
    top: '0',
    left: '0',
    padding: '10px 15px',
    fontSize: '24px',
    color: '#0008',
    cursor: 'pointer',
    outline: 'none'
  },
  '.vb--register-banner': {
    background: 'url(/images/login_image.svg) center / contain no-repeat',
    margin: '30px 0 30px 0',
    width: '100%',
    height: '140px'
  },
  '.vb--register-input-container': {
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
  '.vb--register-button': {
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
  '.vb--register-with-wrapper': {
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
  '.vb--register-with-buttons-container': {
    display: 'flex',
    flexDirection: 'row',
    '.vb--register-with-google': {
      background: 'url(/images/google_blue.png) center / contain no-repeat',
      width: '20px',
      height: '20px',
      margin: '0 10px 0 0',
      cursor: 'pointer',
      outline: 'none'
    },
    '.vb--register-with-facebook': {
      background: 'url(/images/facebook_blue.png) center / contain no-repeat',
      width: '20px',
      height: '20px',
      margin: '0 0 0 10px',
      cursor: 'pointer',
      outline: 'none'
    }
  },
  '.vb--register-login-button': {
    width: '200px',
    height: '30px',
    margin: 'auto',
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
  ...registerFormStyles,
  ...props.styles
}));
