import styled from 'styled-components';

const profileStyle = {
  '.vb--tabs--profile-container': {
    display: 'flex',
    width: '100%',
    height: '498px',
    fontSize: '14px',

    '.vb--tabs--profile-picture': {
      height: '498px',
      width: '244px',
      backgroundImage: 'url(/images/profilScreen.png)',
      backgroundSize: 'contain'
    },
    '.vb--tabs-profile-content': {
      width: '35%',
      marginLeft: '40px',
      fontFamily: 'Source Sans Pro',
      color: '#0e273b',

      '.vb--tabs-profile-content-info': {
        maxWidth: '520px',
        minHeight: '150px',
        borderRadius: '8px',
        border: 'solid 1px #ebeae9',
        marginTop: '20px',
        marginButtom: '20px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#ffffff',

        '.vb--tabs-profile-content-info-content': {
          display: 'flex',
          flexDirection: 'row',
          textAligment: 'center',
          '.vb--tabs-profile-content-info-attiributes': {
            fontWeight: 'bolder',
            fontStyle: 'inherit',
            paddingTop: '10px',
            paddingLeft: '10px',
            color: '#0b2443'
          },
          '.vb--tabs-profile-content-info-properties': {
            paddingLeft: '30px',
            paddingTop: '10px',
            color: '#0e273b',
            marginLeft: '10px'
          }
        },
        '.vb--tabs-profile-address': {
          padding: '10px',
          '.header': {
            color: '#83329c',
            marginBottom: '5px'
          },
          '.vb-tabs-profile-address-header': {
            marginBottom: '5px',
            marginTop: '5px',
            color: '#0e273b',
            fontWeight: '600'
          },
          '.vb-tabs-profile-address-content-address': {
            marginTop: '10px'
          },
          '.vb-tabs-profile-address-content': {
            marginTop: '10px'
          }
        }
      }
    }
  },
  '.vb--tabs-profile-content-info--button': {
    marginLeft: '205px',
    marginBottom: '15px'
  },
  '.vb--tabs-profile-content-info--line': {
    width: '300px',
    borderRadius: '8px',
    border: 'solid 1px #ebeae9',
    backgroundColor: '#ffffff',
    margin: '20px'
  }
};
export const ProfileWrapper = styled.div((props) => ({
  ...profileStyle,
  ...props.styles
}));
