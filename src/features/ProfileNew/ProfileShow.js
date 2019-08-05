import React from 'react';
import { Query } from 'react-apollo';

import { GET_COUNTRIES } from '../../components/Base/BaseQueries';

const ProfileShow = ({ consumer, setShowingProfile }) => {
  // console.log(consumer);
  const name = consumer && consumer.name;
  const Birthdate = consumer && consumer.birthDate;
  const Country = consumer && consumer.countryId;
  const Gender = consumer && consumer.gender;
  const Phone = consumer && consumer.phone;
  const Mail = consumer && consumer.email;
  const image = consumer.coverImageUrl
    ? consumer.coverImageUrl
    : '/images/dp.png';
  return (
    <React.Fragment>
      <div className="Profile" style={{ height: 520 }}>
        <div className="profile--head">
          <img src={image} className="profile--head--img" alt="Profile" />
          <label className="profile--head--label">Profile</label>
        </div>
        <div className="profile--info">
          <label className="profile--info--label">Name</label>
          <p className="profile--info--p">{name}</p>
        </div>
        <div className="profile--info">
          <label className="profile--info--label">Birthdate</label>
          <p className="profile--info--p">{Birthdate}</p>
        </div>

        <Query query={GET_COUNTRIES} fetchPolicy="cache-first">
          {({ loading, error, data }) => {
            if (error) {
              // console.log(error);
            }
            if (loading) {
              return 'loading...';
            }
            const { countries } = data;
            return (
              <div className="profile--info">
                <label className="profile--info--label">Country</label>
                <p className="profile--info--p">
                  {Country !== null
                    ? countries.map((item) =>
                        item.id === Country ? item.name : null
                      )
                    : null}
                </p>
              </div>
            );
          }}
        </Query>

        <div className="profile--info">
          <label className="profile--info--label">Gender</label>
          <p className="profile--info--p">{Gender}</p>
        </div>
        <div className="profile--info">
          <label className="profile--info--label">Phone Number</label>
          <p className="profile--info--p">{Phone}</p>
        </div>
        <div className="profile--info">
          <label className="profile--info--label">Mail Adress</label>
          <p className="profile--info--p">{Mail}</p>
        </div>
        <div className="profile--editButtonWrapper">
          <button
            className="profile--editButton"
            onClick={() => {
              setShowingProfile(false);
            }}>
            Edit
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileShow;
