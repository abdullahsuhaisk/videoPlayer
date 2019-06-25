import styled from 'styled-components';

const navigationModalStyle = {
  '.vb--navigationModalContainer': {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '565px',
    boxShadow: '-10px 0 6px 0 rgba(0, 0, 0, 0.16)',
    backgroundColor: '#f5f9fc',
    textAlign: 'left',
    color: '#0e273b',
    fontFamily: 'Source Sans Pro',
    fontStyle: 'normal',
    fontStretch: 'normal',
    '.vb--navigationModal--header': {
      fontSize: '27px',
      fontWeight: '600',
      lineHeight: '1.26',
      letterSpacing: '0.95px',
      display: 'flex',
      flexDirection: 'row',
      height: '15%',
      opacity: '0.4',
      boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.15)',
      backdropFilter: 'blur(30px)',
      backgroundColor: '#ffffff'
    },
    '.vb--navigationModal--header-listItem-Active': {
      color: '#83329c',
      paddingBottom: '10px',
      lineHeight: '48px',
      borderBottom: '1px solid #83329c'
    },
    '.vb--navigationModal--content': {
      height: '85%'
    }
  }
};

export const NavigationDialogWrapper = styled.div((props) => ({
  ...navigationModalStyle,
  ...props.styles
}));
