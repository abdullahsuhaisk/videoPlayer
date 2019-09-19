/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { getProdLinkUniqueId } from '../../../../hooks/ProdLinkHook';
import { GET_VIDEO_QUALITIES } from '../../../Base/AppQueries';

const SettingQuality = ({
  setqualityMenuToggle,
  setSelectQuality,
  selectQuality,
  client,
  videoPlayer
}) => {
  const prodLinkUniqueId = getProdLinkUniqueId();
  const [qualities, setQualities] = useState([]);

  useEffect(() => {
    client
      .query({
        query: GET_VIDEO_QUALITIES,
        variables: { prodLinkUniqueId }
      })
      .then(({ data }) => setQualities(data.prodLink.video.qualities));
  }, []);

  const SELECTEDCLASSNAME = (value) => {
    if (value === selectQuality) {
      return 'Settings--info--options--p Settings--info--options--selected';
    }
    return 'Settings--info--options--p';
  };

  const selectQualityHandler = (itemQuality, key) => {
    setSelectQuality(itemQuality);
    // console.log(key);
    client.writeData({
      data: {
        player: {
          __typename: 'Player',
          selectedQuality: itemQuality,
          currentQuality: key
        }
      }
    });
    videoPlayer.load();
  };

  return (
    <div
      className="Settings spacing"
      style={{ position: 'absolute', top: -385, right: -73 }}>
      <div className="Settings--info">
        <div
          className="Settings--info--head"
          onClick={() => setqualityMenuToggle(false)}>
          <p className="Settings--info--head--p">Quality</p>
        </div>
        <div className="Settings--info--options">
          {qualities &&
            qualities.map((item, key) => {
              // console.log(item.quality);
              return (
                <p
                  className={SELECTEDCLASSNAME(item.quality)}
                  onClick={() => selectQualityHandler(item.quality, key)}
                  key={item.id}>
                  {item.quality}
                  {item.quality === '1080' ? (
                    <i className="Settings--info--options--p--i">HD</i>
                  ) : item.quality === '720' ? (
                    <i className="Settings--info--options--p--i">HD</i>
                  ) : null}
                </p>
              );
            })}

          <p className="Settings--info--options--p Settings--info--options--selected">
            Auto
          </p>
        </div>
      </div>
    </div>
  );
};
export default SettingQuality;
