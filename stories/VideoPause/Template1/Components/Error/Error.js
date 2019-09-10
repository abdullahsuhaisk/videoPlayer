import React from 'react';

const Error = () => {
  return (
    <div className="Error">
      {/* <div class="stars"></div>
      <div class="twinkling"></div>
      <div class="clouds"></div> */}
      <div class="error_bg"></div>
      <div className="Error--container">
        <figure className="Error--logo">
          <img src="/images/logo-white.svg" className="Error--logo--img" alt="Vibuy"/>
        </figure>
        <p className="Error--404">404</p>
        <p className="Error--description">Opss, something went wrong!</p>
        <button className="Error--returnBtn">Return to home</button>
      </div>
      <div className="Error--stars">
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
      </div>
    </div>
  );
};

export default Error;