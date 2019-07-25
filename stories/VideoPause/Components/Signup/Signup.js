import React from 'react';
import './Signup.styles.css';
const Signup = () => {
    return (
        <React.Fragment>
            <div className="signup">
                <figure className="signup--imgWrapper">
                    <img className="signup--img" src="/images/login_image.svg" />
                </figure>
                <div className="signup--emailWrapper">
                    <span className="signup--label">Mobile Number or Email</span>
                    <input type="text" className="signup--input" placeholder="Email"/>
                </div>
                <div className="signup--passwordWrapper">
                    <span className="signup--label">Password</span>
                    <input type="password" className="signup--input"  placeholder="Password"/>
                </div>
                <span className="signup--minChar">*Min 6 characters</span>
                <div className="signup--buttonWrapper">
                    <button className="signup--button">Sign up</button>
                </div>
                <div className="signupWithWrapper">
                    <p className="signup--signupWith">or Signup with</p>
                    <div className="signup--withSocialMedia">
                        <div className="signup--withFacebook" onClick={(e) => e.preventDefault()}></div>
                        <div className="signup--withGoogle" onClick={(e) => e.preventDefault()}></div>
                    </div>
                </div>
                <hr className="signup--hr" />
                <p className="signup-haveAccount">Have an account? </p>
                <button className="signup--signupButton">Login</button>
            </div>
        </React.Fragment>
    );
}; 

export default Signup;