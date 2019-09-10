import React from 'react';
import './error.css';

const Error = ({ content }) => {
  console.log(content);
  const goVideo = () => {
    window.location.replace(
      'https://vibuy-player.appspot.com/prodLinkId/5d5fc886769b4'
    );
  };
  return (
    <div className="Error">
      <div className="Error--container">
        <figure className="Error--logo">
          <img
            src="/images/logo-white.svg"
            className="Error--logo--img"
            alt="Vibuy"
          />
        </figure>
        <p className="Error--404">404</p>
        <p className="Error--description">Opss, something went wrong!</p>

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
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  );
};

export default Error;
