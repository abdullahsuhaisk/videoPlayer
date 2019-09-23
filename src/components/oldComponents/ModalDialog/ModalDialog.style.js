import styled from 'styled-components';

export const Wrapper = styled.div((props) => ({
  position: 'relative',
  width: ' 100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  pointerEvents: 'auto',
  ...props.styles.Wrapper
}));

export const CloseButton = styled.span((props) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  padding: '15px 20px',
  fontSize: '30px',
  color: '#fff',
  cursor: 'pointer',
  ...props.styles.CloseButton
}));
