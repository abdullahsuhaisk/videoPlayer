import styled from 'styled-components';

export const emptyWishListstyle = {
  width: '100%',
  height: '100%',
  position: 'relative',
  '.vb--empty-wish-list-content': {
    position: 'absolute',
    top: '15%',
    left: '37%',
    display: 'flex',
    flexDirection: 'column'
  },
  '.vb--empty-wish-list-content-image': {
    background: 'url(/images/emptyFavorite.svg) center center no-repeat',
    display: 'inline-block',
    width: '185px',
    height: '185px',
    objectFit: 'contain',
    padding: '10px',
    backgroundSize: 'contain',
    marginBottom: '6px'
  },
  '.vb--empty-wish-list-content-item': {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
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
  ...emptyWishListstyle,
  ...props.styles
}));
