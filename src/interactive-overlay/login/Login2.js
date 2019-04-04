import React, { useState } from 'react';
import '../overlay.scss';

const Login2 = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div className="full-popup-login">
      <div
        className="close-button"
        onClick={() => {
          const tag = document.querySelector('.full-popup-login');
          if (tag.classList.contains('slide-expand'))
            tag.classList.remove('slide-expand');
          else tag.classList.add('slide-expand');
        }}>
        <span>&times;</span>
      </div>
      {!isLoggedIn && (
        <div className="full-popup-inner">
          <div>
            <h1>Login to continue</h1>
          </div>
          <div>
            <input type="text" placeholder="Username" />
          </div>
          <div>
            <input type="password" placeholder="Password" />
          </div>
          <div className="div-login-btn">
            <button
              className="login-btn"
              onClick={() => {
                setLoggedIn(true);
              }}>
              Login
            </button>
          </div>
        </div>
      )}

      {isLoggedIn && (
        <div className="full-popup-inner">
          <div>
            <h1>You are logged in as Fatih.</h1>
          </div>

          <div className="div-login-btn">
            <button
              className="login-btn"
              onClick={() => {
                setLoggedIn(false);
              }}>
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login2;
