import styled from 'styled-components';

const ScreenPauseStyle = {
  width: '100%',
  height: '100%'
};
export const Wrapper = styled.div((props) => ({
  ...ScreenPauseStyle,
  ...props.style
}));
