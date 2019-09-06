import React from 'react';
// import '../../assets/css/template1/Login.css';

const Login = () => {
  return (
    <React.Fragment>
      <div className="login">
        <figure className="login--imgWrapper">
          <img className="login--img" src="/images/login_image.svg" />
        </figure>
        <div className="login--emailWrapper">
          <span className="login--label">Mobile Number or Email</span>
          <input type="text" className="login--input" placeholder="Email" value="email@gmail.com"/>
        </div>
        <div className="login--passwordWrapper">
          <span className="login--label">Password</span>
          <input
            type="password"
            className="login--input"
            placeholder="Password"
          />
        </div>
        <div className="login--resetWrapper">
          <div className="login--staySigned">
            <input
              type="checkbox"
              id="stay_signed"
              className="login--staySigned-checkbox"
            />{' '}
            <label className="login--staySigned--label" for="stay_signed">
              Stay signed in
            </label>
          </div>
          <div className="login--forgotPassword">
            <div
              className="login--forgotPassword--a"
              onClick={(e) => e.preventDefault()}>
              Forgot your password?
            </div>
          </div>
        </div>
        <div className="login--buttonWrapper">
          <button className="login--button">Login</button>
        </div>
        <div className="loginWithWrapper">
          <p className="login--loginWith">or Login with</p>
          <div className="login--withSocialMedia">
            <div
              className="login--withFacebook"
              onClick={(e) => e.preventDefault()}></div>
            <div
              className="login--withGoogle"
              onClick={(e) => e.preventDefault()}></div>
          </div>
        </div>
        <hr className="login--hr" />
        <p className="login-haveAccount">Don’t have an account? </p>
        <div className="login--signupButtonWrapper">
          <button className="login--signupButton">Sign up</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
