import styled from 'styled-components';

export const emptylistStyle = {
  width: '100%',
  height: '350px',
  display: 'flex',
  justifyContent: 'center',
  '.vb--component--emptyList-container': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center'
  },
  '.vb--component--emptyList-image': {
    background: 'url(/images/emptyFavorite.svg) center center no-repeat',
    display: 'inline-block',
    width: '220px',
    height: '220px',
    objectFit: 'contain',
    padding: '10px',
    backgroundSize: 'contain',
    marginBottom: '6px'
  },
  '.vb--component--emptyList-content': {},
  span: {
    color: ' #9da7b4',
    textAlign: 'center',
    fontFamily: 'Source Sans Pro',
    fontSize: '12px'
  },
  '.bold': {
    fontWeight: '600'
  }
};

export const Wrapper = styled.div((props) => ({
  ...emptylistStyle,
  ...props.styles
}));
