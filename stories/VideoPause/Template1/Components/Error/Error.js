import React from 'react';

const Error = () => {
  return (
    <div className="Error">
      <div className="Error--container">
        <figure className="Error--logo">
          <img src="/images/logo-white.svg" className="Error--logo--img" alt="Vibuy"/>
        </figure>
        <p className="Error--404">404</p>
        <p className="Error--description">Opss, something went wrong!</p>
        <button className="Error--returnBtn">Return to home</button>
      </div>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
    </div>
  );
};

export default Error;