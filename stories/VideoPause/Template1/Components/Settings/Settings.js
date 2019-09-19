import React from 'react';

const Settings = () => {
  return (
    <div className="storybook--settings--container">
      {/* Settings Component Start*/}
      <div className="Settings spacing">
        <div className="Settings--panel">
          <label className="Settings--panel--label">Prodlink</label>
          <div class="Settings--panel--switchBtn">
            <input type="checkbox" class="Settings--panel--switchBtn--checkbox"/>
            <div class="Settings--panel--switchBtn--knobs"></div>
            <div class="Settings--panel--switchBtn--layer"></div>
          </div>
        </div>
        <div className="Settings--panel">
          <label className="Settings--panel--label">Playback Speed</label>
          <p className="Settings--panel--p">Normal</p>
        </div>
        <div className="Settings--panel">
          <label className="Settings--panel--label">Quality</label>
          <p className="Settings--panel--p">
            Auto 720 
            <i className="Settings--panel--p--i">HD</i>
          </p>
        </div>
      </div>
      {/* Settings Component End*/}

      {/* Settings Quality Component Start*/}
      <div className="Settings spacing">
        <div className="Settings--info">
          <div className="Settings--info--head">
            <p className="Settings--info--head--p">Quality</p>
          </div>
          <div className="Settings--info--options">
            <p className="Settings--info--options--p">
              720p 
              <i className="Settings--info--options--p--i">HD</i>
            </p>
            <p className="Settings--info--options--p">
               480p
            </p>
            <p className="Settings--info--options--p">
               360p
            </p>
            <p className="Settings--info--options--p">
               240p
            </p>
            <p className="Settings--info--options--p">
               144p
            </p>
            <p className="Settings--info--options--p Settings--info--options--selected">
               Auto
            </p>
          </div>
        </div>
      </div>
      {/* Settings Quality Component End*/}

    </div>
  );
};

export default Settings;