import React from 'react';
import {Composition} from 'remotion';
import {BellasArtesReel, BellasArtesCover} from './BellasArtes';

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="PMX-BellasArtes-Reel-Master"
        component={BellasArtesReel}
        durationInFrames={810}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="PMX-BellasArtes-Cover"
        component={BellasArtesCover}
        durationInFrames={150}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
