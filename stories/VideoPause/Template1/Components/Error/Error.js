import React from 'react';

const Error = () => {
  return (
    <div className="Error">
      {/* <div class="stars"></div>
      <div class="twinkling"></div>
      <div class="clouds"></div> */}
      <div className="error_bg"></div>
      <div className="Error--container">
        <figure className="Error--logo">
          <img src="/images/logo-white.svg" className="Error--logo--img" alt="Vibuy"/>
        </figure>
        <p className="Error--404">404</p>
        {content.map((item, key) => (
          <p className="Error--description" key={key}>
            {item.code === 'ERR004' ? 'There is no ProdLink' : item.message}
          </p>
        ))}
        <button
          className="Error--returnBtn"
          onClick={async () => {
            goVideo();
          }}>
          Return to home
        </button>

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