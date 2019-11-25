import React from 'react';
import { Query } from 'react-apollo';
import ReactGA from 'react-ga';
// import Player from './features/Player/Player';
import './i18n/i18n';
import OverlayContainer from './features/Overlay/OverlayContainer';
import OverlayScreen from './features/Overlay/OverlayScreen';
import { getProdLinkIdApollo, getParams } from './hooks/ProdLinkHook';
import { GET_VIDEO, GET_PLAYER } from './components/Base/AppQueries';
import { VideoPlayerIndicator } from './components/LoadingIndicator/VideoPlayerIndicator';
// import { httpToHttps } from './utils/httpTohttps';
import { sourceParser } from './utils/sourceParser';
import Error from './components/Error/Error';
import Spinner from './components/Spinner/Spinner';
// import MainLoader from './components/ContentLoader/MainLoader';

const Player = React.lazy(() => import('./features/Player/Player'));

function initializeReactGA() {
  ReactGA.initialize('UA-153313809-1');
  // ReactGA.pageview('/prodLinkId');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const App = ({ client }) => {
  // React.useEffect(() => {
  //   client
  //     .query({ query: GET_VIDEO, variables: { prodLinkUniqueId: prodLinkId } })
  //     .then((res) => console.log(res));
  // }, []);
  React.useEffect(() => {
    // console.log(getParams('haslink'));
    initializeReactGA();
    ReactGA.event({
      category: 'Video',
      action: 'loaded'
    });
  }, []);
  const prodLinkId = getProdLinkIdApollo(client);
  // console.log(prodLinkId);
  return (
    <div
      className="vibuy--container"
      style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      <Query query={GET_VIDEO} variables={{ prodLinkUniqueId: prodLinkId }}>
        {({ loading, error, data }) => {
          if (loading) return <Spinner />;
          if (error) {
            const errorContentsArray = [];
            error.graphQLErrors.map((
              item // Check the Model
            ) => errorContentsArray.push(item));
            return <Error content={errorContentsArray} />;
          }
          if (data.prodLink === null) return <div>No video</div>;
          const { id } = data.prodLink;
          client.writeData({ data: { prodlinkId: id } });
          const { video } = data.prodLink;
          {
            /* const { image } = data.prodLink; */
          }
          {
            /* const poster =
            (image && httpToHttps(image.imageUrl)) ||
            'https://puhutv-image.akamaized.net/img/1920x1080/19-06/24/1546932082770-erkencikus_16x9_rev-1561406522.jpg'; */
          }

          const source = sourceParser(video.qualities);

          {
            /* const source = {
            src:
              'https://storage.googleapis.com/vibuy-uploads/converted/test7/manifest.m3u8',
            type: 'application/x-mpegURL'
          }; */
          }

          {
            /* const source = {
            src:
              'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
            type: 'application/x-mpegURL'
          }; */
          }

          return (
            <Query query={GET_PLAYER}>
              {({ data: { player } }) => {
                const { currentQuality } = player;
                // You can use like that source[currentQuality] but it's not working we need to change video quality
                return <Player sources={source} />;
              }}
            </Query>
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
