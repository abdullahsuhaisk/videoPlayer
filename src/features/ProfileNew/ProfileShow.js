import React from 'react';

const ProfileShow = ({ consumer, setShowingProfile }) => {
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
          <p className="profile--info--p">07/03/1992 {Birthdate}</p>
        </div>
        <div className="profile--info">
          <label className="profile--info--label">Country</label>
          <p className="profile--info--p">{Country}</p>
        </div>
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
