import styled from 'styled-components';

const ControlBarStyle = {
  height: '30px',
  width: '100%',
  backgroundColor: 'black',
  position: 'absolute',
  bottom: '0',
  left: '0',
  pointerEvents: 'auto',
  button: {
    backgroundColor: 'white'
  }
};

export const Wrapper = styled.div((props) => ({
  ...ControlBarStyle,
  ...props.style
}));
