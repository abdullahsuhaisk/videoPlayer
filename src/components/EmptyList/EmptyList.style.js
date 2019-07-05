import styled from 'styled-components';

export const emptylistStyle = {
  width: '100%',
  height: '350px',
  '.vb--component--emptyList-container': {},
  '.vb--component--emptyList-image': {},
  '.vb--component--emptyList-content': {}
};

export const Wrapper = styled.div((props) => ({
  ...emptylistStyle,
  ...props.styles
}));
