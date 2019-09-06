import React from 'react';
// import '../../assets/css/template1/Profile.css';

const Profile = () => {
  return (
    <React.Fragment>
      <div className="ProfileAdresses--Container">
        <div className="Profile">
          <div className="profile--head">
            <img src="/images/dp.png" className="profile--head--img" />
            <label className="profile--head--label">Profile</label>
          </div>
          <div className="profile--info">
            <label className="profile--info--label">Name</label>
            <p className="profile--info--p">Andrew Charles</p>
          </div>
          <div className="profile--info">
            <label className="profile--info--label">Birthdate</label>
            <p className="profile--info--p">07/03/1992</p>
          </div>
          <div className="profile--info">
            <label className="profile--info--label">Country</label>
            <p className="profile--info--p">France</p>
          </div>
          <div className="profile--info">
            <label className="profile--info--label">Gender</label>
            <p className="profile--info--p">Not Specified</p>
          </div>
          <div className="profile--info">
            <label className="profile--info--label">Phone Number</label>
            <p className="profile--info--p">532 799 00 00</p>
          </div>
          <div className="profile--info">
            <label className="profile--info--label">Mail Adress</label>
            <p className="profile--info--p">hello@smartover.net</p>
          </div>
          <div className="profile--editButtonWrapper">
            <button className="profile--editButton">Edit</button>
          </div>
          <p className="logout">Logout</p>
        </div>
        <div className="Adresses">
          <div className="adresses--head">
            <label className="profile--head--label">Adresses</label>
          </div>
          <div className="Adresses--container">
            <div className="adresses--info">
              <label className="adresses--info--label">Home Adress</label>
              <p className="adresses--info--p">
                Istiklal mahallesi akdeniz caddesi tekevler sitesi <br />
                Bursa - 91270 Turkey <br />
                Phone: 01701077215
              </p>
            </div>
            <div className="adresses--editButtonWrapper">
              <button className="adresses--editButton">Edit</button>
            </div>
            {/* <hr className="adresses--hr" /> */}
            <div className="adresses--info adresses--info-m">
              <label className="adresses--info--label">Depot Adress</label>
              <p className="adresses--info--p">
                Doruk mahallesi akdeniz caddesi tevler sitesi <br />
                Bursa - 91270 Turkey <br />
                Phone: 01701077215
              </p>
            </div>
            <div className="adresses--editButtonWrapper">
              <button className="adresses--editButton">Edit</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
