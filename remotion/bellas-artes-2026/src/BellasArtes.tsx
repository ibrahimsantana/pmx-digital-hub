import React from 'react';
import {
  AbsoluteFill,
  Img,
  Sequence,
  Easing,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {Video} from '@remotion/media';
import '@fontsource/bebas-neue';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/800.css';

const C = {
  field: '#081D13',
  green: '#123B31',
  gold: '#FFC62F',
  cream: '#F2E8CF',
  white: '#FFFDF7',
};

const safe = {left: 72, right: 72, top: 88, bottom: 178};

const GoldRule: React.FC<{width?: number}> = ({width = 180}) => (
  <div style={{width, height: 8, background: C.gold, borderRadius: 99}} />
);

const BrandHeader: React.FC<{compact?: boolean}> = ({compact = false}) => (
  <div
    style={{
      position: 'absolute',
      top: safe.top,
      left: safe.left,
      right: safe.right,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      zIndex: 30,
    }}
  >
    <div style={{display: 'flex', alignItems: 'center', gap: 20}}>
      <Img
        src={staticFile('colectivo_logo.webp')}
        style={{width: compact ? 92 : 126, height: compact ? 92 : 126, objectFit: 'contain'}}
      />
      <div>
        <div
          style={{
            fontFamily: 'Montserrat',
            fontWeight: 800,
            fontSize: compact ? 20 : 24,
            color: C.gold,
            letterSpacing: 1.5,
          }}
        >
          ORGANIZA
        </div>
        <div
          style={{
            fontFamily: 'Montserrat',
            fontWeight: 700,
            fontSize: compact ? 22 : 27,
            color: C.cream,
            marginTop: 4,
          }}
        >
          COLECTIVO PACKERS MÉXICO
        </div>
      </div>
    </div>

    <div style={{background: C.field, display: 'flex', alignItems: 'center'}}>
      <Img
        src={staticFile('pmx_logo.webp')}
        style={{width: compact ? 300 : 352, height: compact ? 76 : 88, objectFit: 'contain'}}
      />
    </div>
  </div>
);

const OrganizerBug: React.FC = () => (
  <div
    style={{
      position: 'absolute',
      top: 80,
      left: 64,
      zIndex: 35,
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      filter: 'drop-shadow(0 6px 18px rgba(0,0,0,.28))',
    }}
  >
    <Img src={staticFile('colectivo_logo.webp')} style={{width: 98, height: 98, objectFit: 'contain'}} />
    <div>
      <div style={{fontFamily: 'Montserrat', fontWeight: 800, fontSize: 21, color: C.gold, letterSpacing: 1.5}}>
        ORGANIZA
      </div>
      <div style={{fontFamily: 'Montserrat', fontWeight: 700, fontSize: 24, color: C.white, marginTop: 3}}>
        COLECTIVO PACKERS MÉXICO
      </div>
    </div>
  </div>
);

const Opening: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const opacity = interpolate(frame, [0, 0.35 * fps], [0, 1], {
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const y = interpolate(frame, [0, 0.55 * fps], [34, 0], {
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <AbsoluteFill style={{background: C.field, overflow: 'hidden'}}>
      <AbsoluteFill
        style={{
          background:
            'radial-gradient(circle at 82% 22%, rgba(255,198,47,.16), transparent 30%), linear-gradient(180deg, #123B31 0%, #081D13 72%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: -120,
          top: 280,
          width: 720,
          height: 720,
          borderRadius: '50%',
          border: '2px solid rgba(255,198,47,.16)',
        }}
      />
      <BrandHeader />

      <div
        style={{
          position: 'absolute',
          left: safe.left,
          right: safe.right,
          top: 390,
          opacity,
          transform: `translateY(${y}px)`,
        }}
      >
        <GoldRule width={230} />
        <div style={{fontFamily: 'Bebas Neue', fontSize: 164, lineHeight: 0.86, color: C.cream, marginTop: 30}}>
          FOTO OFICIAL
        </div>
        <div style={{fontFamily: 'Bebas Neue', fontSize: 122, lineHeight: 0.9, color: C.gold, marginTop: 14}}>
          DE LA AFICIÓN PACKER
        </div>

        <div style={{display: 'flex', gap: 26, alignItems: 'stretch', marginTop: 64}}>
          <div style={{flex: 1}}>
            <div style={{fontFamily: 'Bebas Neue', fontSize: 92, lineHeight: 0.9, color: C.white}}>DOM 13 SEP</div>
            <div style={{fontFamily: 'Montserrat', fontWeight: 700, fontSize: 32, color: C.cream, marginTop: 16}}>
              Palacio de Bellas Artes · CDMX
            </div>
          </div>
          <div style={{width: 2, background: 'rgba(242,232,207,.25)'}} />
          <div style={{width: 310}}>
            <div style={{fontFamily: 'Bebas Neue', fontSize: 104, lineHeight: 0.9, color: C.gold}}>12:00 H</div>
            <div style={{fontFamily: 'Montserrat', fontWeight: 800, fontSize: 30, color: C.white, marginTop: 18}}>
              LLEGA 30 MIN ANTES
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const Punch: React.FC<{label: string; sub?: string; from: number; duration: number}> = ({label, sub, from, duration}) => {
  const frame = useCurrentFrame() - from;
  const {fps} = useVideoConfig();
  const opacity = interpolate(frame, [0, 0.22 * fps, duration - 0.45 * fps, duration], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const y = interpolate(frame, [0, 0.32 * fps], [26, 0], {
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <div
      style={{
        position: 'absolute',
        left: 72,
        right: 110,
        bottom: 315,
        opacity,
        transform: `translateY(${y}px)`,
        zIndex: 40,
        filter: 'drop-shadow(0 5px 24px rgba(0,0,0,.42))',
      }}
    >
      <div
        style={{
          display: 'inline-block',
          background: C.gold,
          color: C.field,
          padding: '14px 22px 11px',
          fontFamily: 'Montserrat',
          fontWeight: 800,
          fontSize: 29,
          letterSpacing: 1.1,
        }}
      >
        EN SIMPLE
      </div>
      <div style={{fontFamily: 'Bebas Neue', fontSize: 116, lineHeight: 0.92, color: C.cream, marginTop: 18}}>
        {label}
      </div>
      {sub ? (
        <div
          style={{
            fontFamily: 'Montserrat',
            fontWeight: 700,
            fontSize: 37,
            lineHeight: 1.12,
            color: C.white,
            marginTop: 14,
            maxWidth: 880,
          }}
        >
          {sub}
        </div>
      ) : null}
    </div>
  );
};

const Speaker: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const fadeIn = interpolate(frame, [0, 0.25 * fps], [0, 1], {extrapolateRight: 'clamp'});
  const fadeBottom = interpolate(frame, [0, 0.25 * fps], [0.72, 1], {extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill style={{background: C.field}}>
      <Video
        src={staticFile('jen_master_hq.mp4')}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'contrast(1.035) saturate(1.055) brightness(1.015)',
        }}
      />
      <AbsoluteFill
        style={{
          background:
            'linear-gradient(180deg, rgba(8,29,19,.30) 0%, rgba(8,29,19,0) 27%, rgba(8,29,19,.08) 52%, rgba(8,29,19,.86) 100%)',
          opacity: fadeIn,
        }}
      />
      <OrganizerBug />

      <div
        style={{
          position: 'absolute',
          left: 72,
          bottom: 194,
          zIndex: 34,
          opacity: fadeBottom,
        }}
      >
        <div style={{fontFamily: 'Montserrat', fontWeight: 600, fontSize: 23, color: C.cream}}>
          PACKERS MÉXICO · COMPARTE CON SU COMUNIDAD
        </div>
      </div>

      <Punch from={45} duration={150} label="DOM 13 SEP" sub="Palacio de Bellas Artes · CDMX" />
      <Punch from={245} duration={150} label="12:00 H" sub="Llega 30 minutos antes" />
      <Punch from={445} duration={180} label="PUNTO DE ENCUENTRO" sub="Costado izquierdo del Palacio, en el pasillo." />
      <Punch from={690} duration={180} label="VEN EN FAMILIA" sub="Lleva tu jersey y tu cheesehead." />
    </AbsoluteFill>
  );
};

const Closing: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const opacity = interpolate(frame, [0, 0.3 * fps], [0, 1], {extrapolateRight: 'clamp'});
  const scale = interpolate(frame, [0, 0.55 * fps], [0.975, 1], {
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <AbsoluteFill style={{background: C.field, padding: `${safe.top}px ${safe.right}px ${safe.bottom}px ${safe.left}px`}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 20}}>
          <Img src={staticFile('colectivo_logo.webp')} style={{width: 144, height: 144, objectFit: 'contain'}} />
          <div>
            <div style={{fontFamily: 'Montserrat', fontWeight: 800, fontSize: 22, color: C.gold, letterSpacing: 1.4}}>ORGANIZA</div>
            <div style={{fontFamily: 'Montserrat', fontWeight: 700, fontSize: 25, color: C.cream, marginTop: 4}}>
              COLECTIVO PACKERS MÉXICO
            </div>
          </div>
        </div>
        <div style={{background: C.field}}>
          <Img src={staticFile('pmx_logo.webp')} style={{width: 350, height: 90, objectFit: 'contain'}} />
        </div>
      </div>

      <div style={{marginTop: 230, opacity, transform: `scale(${scale})`, transformOrigin: 'left center'}}>
        <GoldRule width={260} />
        <div style={{fontFamily: 'Bebas Neue', fontSize: 166, lineHeight: 0.88, color: C.cream, marginTop: 28}}>NOS VEMOS EN</div>
        <div style={{fontFamily: 'Bebas Neue', fontSize: 170, lineHeight: 0.88, color: C.gold}}>BELLAS ARTES</div>
        <div style={{fontFamily: 'Montserrat', fontWeight: 800, fontSize: 50, color: C.white, marginTop: 48}}>
          DOM 13 SEP · 12:00 H
        </div>
        <div style={{fontFamily: 'Montserrat', fontWeight: 700, fontSize: 34, lineHeight: 1.2, color: C.cream, marginTop: 22, maxWidth: 820}}>
          Llega 30 minutos antes · costado izquierdo del Palacio, en el pasillo.
        </div>
      </div>

      <div style={{marginTop: 'auto', borderTop: `2px solid rgba(242,232,207,.28)`, paddingTop: 34}}>
        <div style={{fontFamily: 'Montserrat', fontWeight: 600, fontSize: 26, color: C.cream}}>
          PACKERS MÉXICO · COMPARTE CON SU COMUNIDAD
        </div>
        <div
          style={{
            display: 'inline-block',
            marginTop: 34,
            background: C.gold,
            color: C.field,
            padding: '22px 30px 18px',
            fontFamily: 'Montserrat',
            fontWeight: 800,
            fontSize: 34,
          }}
        >
          VER UBICACIÓN
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const BellasArtesReel: React.FC = () => (
  <AbsoluteFill style={{background: C.field}}>
    <Sequence from={0} durationInFrames={90}>
      <Opening />
    </Sequence>
    <Sequence from={90} durationInFrames={985}>
      <Speaker />
    </Sequence>
    <Sequence from={1075} durationInFrames={135}>
      <Closing />
    </Sequence>
  </AbsoluteFill>
);

export const BellasArtesCover: React.FC = () => (
  <AbsoluteFill style={{background: C.field, overflow: 'hidden'}}>
    <AbsoluteFill
      style={{
        background:
          'radial-gradient(circle at 86% 18%, rgba(255,198,47,.15), transparent 28%), linear-gradient(180deg, #123B31 0%, #081D13 76%)',
      }}
    />

    <div
      style={{
        position: 'absolute',
        right: -130,
        top: 230,
        width: 760,
        height: 760,
        borderRadius: '50%',
        border: '2px solid rgba(255,198,47,.14)',
      }}
    />

    <BrandHeader />

    <div style={{position: 'absolute', left: 72, right: 72, top: 360}}>
      <GoldRule width={230} />
      <div style={{fontFamily: 'Bebas Neue', fontSize: 160, lineHeight: 0.86, color: C.cream, marginTop: 28}}>FOTO OFICIAL</div>
      <div style={{fontFamily: 'Bebas Neue', fontSize: 119, lineHeight: 0.9, color: C.gold, marginTop: 12}}>DE LA AFICIÓN PACKER</div>

      <div style={{display: 'flex', alignItems: 'stretch', gap: 28, marginTop: 70}}>
        <div style={{flex: 1}}>
          <div style={{fontFamily: 'Bebas Neue', fontSize: 112, lineHeight: 0.9, color: C.white}}>DOM 13 SEP</div>
          <div style={{fontFamily: 'Montserrat', fontWeight: 800, fontSize: 34, color: C.cream, marginTop: 22}}>PALACIO DE BELLAS ARTES · CDMX</div>
        </div>
        <div style={{width: 2, background: 'rgba(242,232,207,.25)'}} />
        <div style={{width: 315}}>
          <div style={{fontFamily: 'Bebas Neue', fontSize: 114, lineHeight: 0.9, color: C.gold}}>12:00 H</div>
          <div style={{fontFamily: 'Montserrat', fontWeight: 800, fontSize: 31, color: C.white, marginTop: 20}}>LLEGA 30 MIN ANTES</div>
        </div>
      </div>

      <div style={{marginTop: 78, paddingTop: 34, borderTop: '2px solid rgba(242,232,207,.22)'}}>
        <div style={{fontFamily: 'Montserrat', fontWeight: 800, fontSize: 25, color: C.gold, letterSpacing: 1.2}}>PUNTO DE ENCUENTRO</div>
        <div style={{fontFamily: 'Montserrat', fontWeight: 700, fontSize: 34, lineHeight: 1.18, color: C.cream, marginTop: 12, maxWidth: 850}}>
          Costado izquierdo del Palacio de Bellas Artes, en el pasillo.
        </div>
      </div>
    </div>

    <div style={{position: 'absolute', left: 72, right: 72, bottom: 120}}>
      <div style={{fontFamily: 'Montserrat', fontWeight: 700, fontSize: 27, color: C.cream}}>
        Lleva tu jersey y tu cheesehead · ven con toda tu familia.
      </div>
      <div style={{fontFamily: 'Montserrat', fontWeight: 600, fontSize: 23, color: 'rgba(242,232,207,.78)', marginTop: 14}}>
        PACKERS MÉXICO · COMPARTE CON SU COMUNIDAD
      </div>
    </div>
  </AbsoluteFill>
);
