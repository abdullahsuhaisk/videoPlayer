import React, { useState } from 'react';
import { Query } from 'react-apollo';
import ProfileAddressScreen from './ProfileAddressScreen';
import ProfileShow from './ProfileShow';
import { GET_PERSON, GET_PROFILE_SCREEN_IS_OPEN } from './ProfileQueries';
import ProfileEdit from './ProfileEdit';

const ProfileScreen = () => {
  const renderContent = () => {
    console.log('render profile screen');
    return (
      <div
        style={{ zIndex: 999, marginLeft: 30, width: '100%', marginTop: 10 }}>
        <div className="ProfileAdresses--Container">
          <Query query={GET_PERSON}>
            {({ loading, error, data }) => {
              if (loading) return 'loading';
              if (error) return 'Something Wrong';
              const { consumer } = data;
              const addresses =
                consumer && consumer ? consumer.addresses : null;
              return (
                <>
                  {ShowingProfile === true ? (
                    <ProfileShow
                      consumer={consumer}
                      setShowingProfile={setShowingProfile}
                    />
                  ) : (
                    <ProfileEdit
                      consumer={consumer}
                      setShowingProfile={setShowingProfile}
                    />
                  )}
                  <ProfileAddressScreen addresses={addresses} />
                </>
              );
            }}
          </Query>
        </div>
      </div>
    );
  };

  const [ShowingProfile, setShowingProfile] = useState(true);
  return (
    <Query query={GET_PROFILE_SCREEN_IS_OPEN}>
      {({ data: { isProfileOpen } }) => {
        return isProfileOpen === true ? renderContent() : null;
      }}
    </Query>
  );
};

export default ProfileScreen;
