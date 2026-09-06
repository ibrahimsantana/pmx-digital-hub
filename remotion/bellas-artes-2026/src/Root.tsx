import React from 'react';
import {Composition} from 'remotion';
import {BellasArtesReel, BellasArtesCover, INTRO_FRAMES, TOTAL_FRAMES} from './BellasArtes';

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="PMX-BellasArtes-Reel-Master"
        component={BellasArtesReel}
        durationInFrames={TOTAL_FRAMES}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="PMX-BellasArtes-Cover"
        component={BellasArtesCover}
        durationInFrames={INTRO_FRAMES}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
