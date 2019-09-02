import styled from 'styled-components';

const ScreenReadyStyle = {
  pointerEvents: 'auto'
};

export const Wrapper = styled.div((props) => ({
  ...ScreenReadyStyle,
  ...props.styles
}));
