import React from 'react';

const Profile = () => {
  return (
    <div className="SideBar--profile">
      <figure className="SideBar--profile--figure">
        <img src="/images/product1.png" className="SideBar--profile--figure--img" />
      </figure>
      <p className="SideBar--profile--name">Joey Liyngtan</p>
      <div className="SideBar--profile--follow-Container">
        <div className="SideBar--profile--follow">
          <span className="SideBar--profile--follow--label">Followers</span>
          <p className="SideBar--profile--follow--number">358</p>
        </div>
        <div className="SideBar--profile--follow">
          <span className="SideBar--profile--follow--label">Following</span>
          <p className="SideBar--profile--follow--number">275</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;