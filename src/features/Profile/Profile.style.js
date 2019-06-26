import styled from 'styled-components';

const profileStyle = {
  '.vb--tabs--profile-container': {
    display: 'flex',
    width: '100%',
    height: '498px',
    '.vb--tabs--profile-picture': {
      height: '498px',
      width: '244px',
      backgroundImage: 'url(/images/profilScreen.png)',
      backgroundSize: 'contain'
    },
    'vb--tabs-profile-content': {
      'vb--tabs-profile-content-info': {},
      'vb--tabs-profile-address': {}
    }
  }
};
export const ProfileWrapper = styled.div((props) => ({
  ...profileStyle,
  ...props.styles
}));
