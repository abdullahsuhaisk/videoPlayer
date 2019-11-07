import React from 'react';

const IyzicoHtml = ({ renderOrder }) => {
  React.useEffect(() => {
    const myIframe = document.getElementById('iframeForPayment').contentWindow
      .document;
    myIframe.open();
    myIframe.write(renderOrder);
    myIframe.close();

    // document.write(renderOrder);
    // document.close();
  }, []);
  return null;
};

export default IyzicoHtml;
