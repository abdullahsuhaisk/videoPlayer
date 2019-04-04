import React, { useState } from 'react';
import '../overlay.scss';

const Login = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div className="login-wrapper">
      {!isLoggedIn && (
        <>
          <h1>Login</h1>
          <input type="text" placeholder="Username" />
          <br />
          <input type="password" placeholder="Password" />
          <br />
          <button
            className="login-btn"
            onClick={() => {
              setLoggedIn(true);
            }}>
            Login
          </button>
          <button
            className="open-close"
            onClick={() => {
              const tag = document.querySelector('.login-wrapper');
              const tag1 = document.querySelector('.full-popup-login');
              if (tag.classList.contains('expand')) {
                tag.classList.remove('expand');
                tag1.classList.add('slide-expand');
              } else {
                tag.classList.add('expand');
                tag1.classList.remove('slide-expand');
              }
            }}>
            login
          </button>
        </>
      )}
      {isLoggedIn && (
        <>
          <h1>You are logged in as Fatih.</h1>
          <button
            className="login-btn"
            onClick={() => {
              setLoggedIn(false);
            }}>
            Logout
          </button>
          <button
            className="open-close"
            onClick={() => {
              const tag = document.querySelector('.login-wrapper');
              if (tag.classList.contains('expand'))
                tag.classList.remove('expand');
              else tag.classList.add('expand');
            }}>
            login
          </button>
        </>
      )}
    </div>
  );
};

export default Login;
