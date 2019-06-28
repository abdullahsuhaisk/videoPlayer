import React from 'react';
import Button from '../../components/Button/Button';
import { ProfileWrapper } from './Profile.style';

const Profile = ({}) => {
  return (
    <ProfileWrapper>
      <div className="vb--tabs--profile-container">
        <div className="vb--tabs--profile-picture" />
        <div className="vb--tabs-profile-content">
          <div className="vb--tabs-profile-content-info">
            <div className="vb--tabs-profile-content-info-content">
              <div className="vb--tabs-profile-content-info-attiributes">
                Name
              </div>
              <div className="vb--tabs-profile-content-info-properties">
                Andrew Charles
              </div>
            </div>
            <div className="vb--tabs-profile-content-info-content">
              <div className="vb--tabs-profile-content-info-attiributes">
                Name
              </div>
              <div className="vb--tabs-profile-content-info-properties">
                Andrew Charles
              </div>
            </div>
            <div className="vb--tabs-profile-content-info-content">
              <div className="vb--tabs-profile-content-info-attiributes">
                Name
              </div>
              <div className="vb--tabs-profile-content-info-properties">
                Andrew Charles
              </div>
            </div>
            <div className="vb--tabs-profile-content-info-content">
              <div className="vb--tabs-profile-content-info-attiributes">
                Name
              </div>
              <div className="vb--tabs-profile-content-info-properties">
                Andrew Charles
              </div>
            </div>
            <div className="vb--tabs-profile-content-info-content">
              <div className="vb--tabs-profile-content-info-attiributes">
                Name
              </div>
              <div className="vb--tabs-profile-content-info-properties">
                Andrew Charles
              </div>
            </div>
            <div className="vb--tabs-profile-content-info--button">
              <Button>Edit</Button>
            </div>
          </div>

          <div className="vb--tabs-profile-content-info">
            <div className="vb--tabs-profile-address">
              <div className="header">Adresses</div>
              <div className="vb-tabs-profile-address-header">Home</div>
              <div className="vb-tabs-profile-address-content-address">
                istiklal mahallesi akdeniz caddesi tekevler sitesi
              </div>
              <div className="vb-tabs-profile-address-content">
                Bursa - 912070 Turkey
              </div>
              <div className="vb-tabs-profile-address-content">
                Phone : 0126 441 57 72
              </div>
            </div>
            <div className="vb--tabs-profile-content-info--line" />

            <div className="vb--tabs-profile-address">
              <div className="vb-tabs-profile-address-header">Home</div>
              <div className="vb-tabs-profile-address-content-address">
                istiklal mahallesi akdeniz caddesi tekevler sitesi
              </div>
              <div className="vb-tabs-profile-address-content">
                Bursa - 912070 Turkey
              </div>
              <div className="vb-tabs-profile-address-content">
                Phone : 0126 441 57 72
              </div>
              <div className="vb--tabs-profile-content-info--line" />
            </div>

            <div className="vb--tabs-profile-content-info--button">
              <Button>Edit</Button>
            </div>
          </div>
        </div>
      </div>
    </ProfileWrapper>
  );
};
export default Profile;
