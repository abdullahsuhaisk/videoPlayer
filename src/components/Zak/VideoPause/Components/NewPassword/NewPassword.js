import React from 'react';
import '../../assets/css/template1/NewPassword.css';

const NewPassword = () => {
  return (
    <React.Fragment>
      <div className="newPassword">
        <figure className="newPassword--imgWrapper">
          <img className="newPassword--img" src="/images/login_image.svg" />
        </figure>
        <div className="newPassword--passwordWrapper">
          <span className="newPassword--label">New password</span>
          <input
            type="password"
            className="newPassword--input"
            placeholder="New password"
          />
        </div>
        <div className="newPassword--passwordRepeatWrapper">
          <span className="newPassword--label">Password again</span>
          <input
            type="password"
            className="newPassword--input"
            placeholder="New password"
          />
        </div>
        <div className="newPassword--minCharErrorWrapper">
          <span className="newPassword--minChar">*Min 6 characters</span>
          <div className="newPassword--error">Password not match!</div>
        </div>
        <div className="newPassword--buttonWrapper">
          <button className="newPassword--button">Send</button>
        </div>
        <button className="newPassword--signupButton">Back</button>
      </div>
    </React.Fragment>
  );
};

export default NewPassword;
