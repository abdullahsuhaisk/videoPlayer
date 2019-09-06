import React, { useEffect } from 'react';
import { useApolloNetworkStatus } from 'react-apollo-network-status';
import { NProgress } from '@tanem/react-nprogress';
import { Container, Bar } from './MainLoading';

export function VideoPlayerIndicator() {
  const status = useApolloNetworkStatus();
  const [loadingBarProgress, setLoadingBarProgress] = React.useState(true);

  useEffect(() => {
    if (status.numPendingQueries === 0) {
      setLoadingBarProgress(false);
    } else {
      setLoadingBarProgress(true);
    }
  }, [status]);
  return (
    <NProgress isAnimating={loadingBarProgress}>
      {({ isFinished, progress, animationDuration }) => (
        <Container
          isFinished={isFinished}
          animationDuration={animationDuration}>
          <Bar progress={progress} animationDuration={animationDuration} />
        </Container>
      )}
    </NProgress>
  );
}
