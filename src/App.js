import React, { Suspense } from 'react';
import { Query } from 'react-apollo';
import Player from './features/Player/Player';
import './i18n/i18n';
import OverlayContainer from './features/Overlay/OverlayContainer';
import OverlayScreen from './features/Overlay/OverlayScreen';
// import { PRODLINK_ID } from './common/GrapqlConstant';
import { getProdLinkIdApollo } from './hooks/ProdLinkHook';
import { GET_VIDEO, GET_PLAYER } from './components/Base/AppQueries';

const App = ({ client }) => {
  const prodLinkId = getProdLinkIdApollo(client);
  console.log(prodLinkId);
  return (
    <div className="vibuy--container" style={{ width: '100%', height: '100%' }}>
      <Query query={GET_VIDEO} variables={{ prodLinkId: prodLinkId }}>
        {({ loading, error, data }) => {
          if (loading || error) return null;
          // console.log(data)
          const { video } = data.prodLink;
          const { image } = data.prodLink;
          const poster =
            (image && image.imageUrl) ||
            'https://ngatapuwae.govt.nz/sites/default/files/infographic/somme-1918.jpg';
          const src = video.qualities[2].url;
          const { type } = video.qualities[2];

          return (
            <Suspense fallback={<></>}>
              <Player poster={poster} sources={[{ src, type }]} />
            </Suspense>
          );
        }}
      </Query>
      <OverlayContainer>
        <Query query={GET_PLAYER}>
          {({
            data: {
              player: { playingState }
            }
          }) => {
            return <OverlayScreen playingState={playingState} />;
          }}
        </Query>
      </OverlayContainer>
    </div>
  );
};

export default App;
