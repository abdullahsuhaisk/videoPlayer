import styled from 'styled-components';

const ScreenReadyStyle = {
  pointerEvents: 'auto',
  width: '100%',
  height: '500px',
  display: 'flex',
  justifyContent: 'center',
  cursor: 'pointer',
  alignItems: 'center',
  '.container': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '3em',
    height: '3em',
    borderRadius: '50%',
    backgroundColor: 'rgba(43, 51, 63, 0.7)',
    transition: 'all 0.4s'
  },
  '.container-button': {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: ' url(/images/big-play-button.svg)',
    transition: 'all 0.3s ease',
    backgroundSize: 'cover',
    '&:before': {
      content: 'none'
    },
    '&:hover': {
      backgroundColor: 'rgb(0, 172, 216)'
    }
  }
};

export const Wrapper = styled.div((props) => ({
  ...ScreenReadyStyle,
  ...props.styles
}));
