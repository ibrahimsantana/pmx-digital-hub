import React from 'react';
import {Composition} from 'remotion';
import {BellasArtesReel, BellasArtesCover} from './BellasArtes';

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="PMX-BellasArtes-Reel-Master"
        component={BellasArtesReel}
        durationInFrames={1180}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="PMX-BellasArtes-Cover"
        component={BellasArtesCover}
        durationInFrames={90}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
