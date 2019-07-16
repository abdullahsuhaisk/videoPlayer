import styled from 'styled-components';

const ScreenPauseStyle = {
  width: '100%',
  height: '200px'
};
export const Wrapper = styled.div((props) => ({
  ...ScreenPauseStyle,
  ...props.style
}));
