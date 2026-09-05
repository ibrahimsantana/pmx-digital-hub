import React from 'react';
import {Composition} from 'remotion';
import {BellasArtesReel, BellasArtesCover} from './BellasArtes';

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="PMX_BellasArtes_Reel_Master"
        component={BellasArtesReel}
        durationInFrames={810}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="PMX_BellasArtes_Cover"
        component={BellasArtesCover}
        durationInFrames={150}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
