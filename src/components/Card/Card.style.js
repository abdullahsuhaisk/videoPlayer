import styled from 'styled-components';

export const Wrapper = styled.div((props) => ({
  'pointer-events': 'auto',
  ...props.styles
}));

export default Wrapper;
