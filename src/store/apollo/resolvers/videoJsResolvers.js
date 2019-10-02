// import videoJs from 'video.js';

// const videoPlayerJs = videoJs.getPlayer('vjs_video_3');
// console.log(videoJs.getPlayer('vjs_video_3'));

const videoJsResolvers = {
  Query: {},
  Mutation: {
    pause: (_, __, { cache }) => {
      // videoPlayerJs.pause();
      cache.writeData({
        data: {
          player: {
            __typename: 'Player',
            playingState: 'PAUSE'
          }
        }
      });
    },
    play: async (_, __, { cache }) => {
      cache.writeData({
        data: {
          player: {
            __typename: 'Player',
            playingState: 'PLAY',
            isSettingMenuOpen: false
          },
          isLoginFormShowing: false,
          isProfileOpen: false,
          isShoppingCartShowing: false
        }
      });
      // const a = videoPlayerJs.play;
      // console.log(a);
    }
  }
};

export { videoJsResolvers };
