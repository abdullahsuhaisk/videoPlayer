import styled from 'styled-components';

export const emptyFavoriteListStyle = {
  width: '100%',
  height: '350px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  '.vb--empty-favorite-list-container': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-60px'
  },
  '.vb--empty-favorite-list-image': {
    background: 'url(/images/emptyFavorite.svg) center center no-repeat',
    display: 'inline-block',
    width: '160px',
    height: '160px',
    objectFit: 'contain',
    padding: '10px',
    backgroundSize: 'contain',
    marginBottom: '6px'
  },
  '.vb--empty-favorite-list-content': {},
  span: {
    color: ' #9da7b4',
    textAlign: 'center',
    fontFamily: 'Source Sans Pro',
    marginBottom: '-10px',
    fontSize: '12px'
  },
  '.bold': {
    fontWeight: '600'
  }
};
export const Wrapper = styled.div((props) => ({
  ...emptyFavoriteListStyle,
  ...props.styles
}));
