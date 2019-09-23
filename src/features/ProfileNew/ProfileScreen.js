import React, { useState } from 'react';
import { Query } from 'react-apollo';
import ProfileAddressScreen from './ProfileAddressScreen';
import ProfileShow from './ProfileShow';
import {
  GET_PERSON,
  GET_PROFILE_SCREEN_IS_OPEN
} from '../../Queries/Profile/ProfileQueries';
import ProfileEdit from './ProfileEdit';
import BaseQueryHoc from '../../components/HOCS/Grapqhl/BaseQueryHoc';

const ProfileScreen = ({ data }) => {
  const { consumer } = data;
  const addresses = consumer && consumer ? consumer.addresses : null;
  const renderContent = () => {
    return (
      <div
        style={{ zIndex: 999, marginLeft: 30, width: '100%', marginTop: 10 }}>
        <div
          className="ProfileAdresses--Container"
          style={{ position: 'absolute', top: 200 }}>
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
        </div>
      </div>
    );
  };

  const [ShowingProfile, setShowingProfile] = useState(true);
  return (
    <Query query={GET_PROFILE_SCREEN_IS_OPEN}>
      {({ data: { isProfileOpen }, loading }) => {
        if (loading) {
          return null;
        }
        return isProfileOpen === true ? renderContent() : null;
      }}
    </Query>
  );
};

export default BaseQueryHoc(ProfileScreen, GET_PERSON);
