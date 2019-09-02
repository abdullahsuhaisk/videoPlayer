import React from 'react';

const Share = (props) => {
  return (
    <React.Fragment>
      <div className="ShareOnSocialMedia">
        <div className="ShareOnSocialMedia--icons">
          <div className="ShareOnSocialMedia--icons--facebook"></div>
          <div className="ShareOnSocialMedia--icons--linkedin"></div>
          <div className="ShareOnSocialMedia--icons--pinterest"></div>
          <div className="ShareOnSocialMedia--icons--twitter"></div>
          <div className="ShareOnSocialMedia--icons--whatsapp"></div>
        </div>
        <div className="ShareOnSocialMedia--link">
          <p className="ShareOnSocialMedia--link--p">
            https://vi.buy/P_bl1TnpqBw
          </p>
          <label className="ShareOnSocialMedia--link--label">Copy</label>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Share;
