import React, { Suspense } from 'react';
import { Query } from 'react-apollo';
import Player from './features/Player/Player';
import './i18n/i18n';
import OverlayContainer from './features/Overlay/OverlayContainer';
import OverlayScreen from './features/Overlay/OverlayScreen';
// import { PRODLINK_ID } from './common/GrapqlConstant';
import { getProdLinkIdApollo, getProdLinkId } from './hooks/ProdLinkHook';
import { GET_VIDEO, GET_PLAYER } from './components/Base/AppQueries';
import { VideoPlayerIndicator } from './components/LoadingIndicator/VideoPlayerIndicator';
import { httpToHttps } from './utils/httpTohttps';
import Error from './components/Error/Error';
// import MainLoader from './components/ContentLoader/MainLoader';

const App = ({ client }) => {
  const prodLinkId = getProdLinkIdApollo(client);
  // console.log(prodLinkId);
  return (
    <div className="vibuy--container" style={{ width: '100%', height: '100%' }}>
      <Query query={GET_VIDEO} variables={{ prodLinkUniqueId: prodLinkId }}>
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) {
            const errorContentsArray = [];
            error.graphQLErrors.map((
              item // Check the Model
            ) => errorContentsArray.push(item));
            return <Error content={errorContentsArray} />;
          }
          if (data.prodLink === null) return <div>No video</div>;
          const { video } = data.prodLink;
          const { image } = data.prodLink;
          const poster =
            (image && httpToHttps(image.imageUrl)) ||
            'https://ngatapuwae.govt.nz/sites/default/files/infographic/somme-1918.jpg';
          const src = video.qualities && httpToHttps(video.qualities[2].url);
          const { type } = video.qualities && video.qualities[2];

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
        <VideoPlayerIndicator />
      </OverlayContainer>
    </div>
  );
};

export default App;
