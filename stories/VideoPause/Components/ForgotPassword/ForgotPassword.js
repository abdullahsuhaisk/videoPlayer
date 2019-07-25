import React from 'react';
import './ForgotPassword.styles.css';
const ForgotPassword = () => {
    return (
        <React.Fragment>
            <div className="forgotPassword">
                <figure className="forgotPassword--imgWrapper">
                    <img className="forgotPassword--img" src="/images/login_image.svg" />
                </figure>
                <div className="forgotPassword--emailWrapper">
                    <span className="forgotPassword--label">Enter your email address or phone number to help us identify you</span>
                    <input type="text" className="forgotPassword--input" placeholder="Email"/>
                </div>
                <div className="forgotPassword--buttonWrapper">
                    <button className="forgotPassword--button">Send</button>
                </div>
                <button className="forgotPassword--signupButton">Back</button>
            </div>
        </React.Fragment>
    );
}; 

export default ForgotPassword;