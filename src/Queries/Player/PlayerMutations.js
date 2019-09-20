import gql from 'graphql-tag';

const PLAY = gql`
  mutation play {
    play @client
  }
`;
const PAUSE = gql`
  mutation play {
    pause @client
  }
`;

export { PLAY, PAUSE };
