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

const safe = {left: 72, right: 72, top: 82, bottom: 190};
const PMX = staticFile('pmx_logo_v11.png');

const GoldRule: React.FC<{width?: number}> = ({width = 180}) => (
  <div style={{width, height: 8, background: C.gold, borderRadius: 99}} />
);

const OrganizerHeader: React.FC<{compact?: boolean}> = ({compact = false}) => (
  <div
    style={{
      position: 'absolute',
      top: safe.top,
      left: safe.left,
      right: safe.right,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 50,
    }}
  >
    <div style={{display: 'flex', alignItems: 'center', gap: compact ? 14 : 18}}>
      <Img
        src={staticFile('colectivo_logo.webp')}
        style={{width: compact ? 92 : 118, height: compact ? 92 : 118, objectFit: 'contain'}}
      />
      <div>
        <div style={{fontFamily: 'Montserrat', fontWeight: 800, fontSize: compact ? 18 : 22, color: C.gold, letterSpacing: 1.4}}>
          ORGANIZA
        </div>
        <div style={{fontFamily: 'Montserrat', fontWeight: 700, fontSize: compact ? 20 : 25, color: C.cream, marginTop: 4}}>
          COLECTIVO PACKERS MÉXICO
        </div>
      </div>
    </div>
    <Img src={PMX} style={{width: compact ? 270 : 340, height: compact ? 68 : 85, objectFit: 'contain'}} />
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
            'radial-gradient(circle at 84% 20%, rgba(255,198,47,.17), transparent 28%), linear-gradient(180deg, #123B31 0%, #081D13 74%)',
        }}
      />
      <div style={{position: 'absolute', right: -140, top: 250, width: 780, height: 780, borderRadius: '50%', border: '2px solid rgba(255,198,47,.14)'}} />
      <OrganizerHeader />

      <div style={{position: 'absolute', left: safe.left, right: safe.right, top: 390, opacity, transform: `translateY(${y}px)`}}>
        <GoldRule width={235} />
        <div style={{fontFamily: 'Bebas Neue', fontSize: 166, lineHeight: 0.86, color: C.cream, marginTop: 30}}>FOTO OFICIAL</div>
        <div style={{fontFamily: 'Bebas Neue', fontSize: 124, lineHeight: 0.9, color: C.gold, marginTop: 14}}>DE LA AFICIÓN PACKER</div>

        <div style={{display: 'grid', gridTemplateColumns: '1.35fr .75fr', gap: 32, marginTop: 64}}>
          <div>
            <div style={{fontFamily: 'Bebas Neue', fontSize: 92, lineHeight: 0.9, color: C.white}}>DOM 13 SEP</div>
            <div style={{fontFamily: 'Montserrat', fontWeight: 700, fontSize: 34, color: C.cream, marginTop: 18}}>BELLAS ARTES · CDMX</div>
          </div>
          <div style={{borderLeft: '2px solid rgba(242,232,207,.24)', paddingLeft: 30}}>
            <div style={{fontFamily: 'Bebas Neue', fontSize: 104, lineHeight: 0.9, color: C.gold}}>12:00 H</div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

type CaptionCue = {startMs: number; endMs: number; text: string};

const captions: CaptionCue[] = [
  {startMs: 594, endMs: 3276, text: 'Atención, afición de Green Bay\nen México.'},
  {startMs: 3629, endMs: 8045, text: 'Llegó el momento de reunirnos, pasarla bien\ny armar la convivencia.'},
  {startMs: 8222, endMs: 10663, text: 'Y pintar Bellas Artes\nde verde y oro.'},
  {startMs: 11755, endMs: 15915, text: 'La cita para nuestra foto anual\nes este domingo 13 de septiembre,'},
  {startMs: 16011, endMs: 19817, text: 'a las 12 del mediodía.\nTrae tu jersey, tu gorra,'},
  {startMs: 19865, endMs: 23816, text: 'tu familia y la mejor actitud\npara representar a la mejor afición.'},
  {startMs: 24346, endMs: 26643, text: 'No te quedes fuera\nde la foto de este año.'},
  {startMs: 26787, endMs: 29164, text: 'Síguenos para más detalles.\n¡Go Pack Go!'},
];

const CaptionLayer: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const ms = (frame / fps) * 1000;
  const cue = captions.find((c) => ms >= c.startMs && ms <= c.endMs);
  if (!cue) return null;

  const local = ms - cue.startMs;
  const remaining = cue.endMs - ms;
  const opacity = Math.min(1, local / 130, remaining / 130);

  return (
    <div
      style={{
        position: 'absolute',
        left: 86,
        right: 86,
        bottom: 205,
        zIndex: 70,
        opacity,
        textAlign: 'center',
      }}
    >
      <div
        style={{
          display: 'inline-block',
          fontFamily: 'Montserrat',
          fontWeight: 800,
          fontSize: 46,
          lineHeight: 1.12,
          color: C.white,
          whiteSpace: 'pre-line',
          textShadow: '0 4px 22px rgba(0,0,0,.95), 0 1px 4px rgba(0,0,0,1)',
          maxWidth: 900,
        }}
      >
        {cue.text}
      </div>
    </div>
  );
};

const DataPunch: React.FC<{startMs: number; endMs: number; label: string; sub: string}> = ({startMs, endMs, label, sub}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const ms = (frame / fps) * 1000;
  if (ms < startMs || ms > endMs) return null;

  const local = ms - startMs;
  const remaining = endMs - ms;
  const opacity = Math.min(1, local / 220, remaining / 280);
  const y = interpolate(local, [0, 320], [20, 0], {extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)});

  return (
    <div
      style={{
        position: 'absolute',
        left: 68,
        right: 78,
        top: 320,
        zIndex: 60,
        opacity,
        transform: `translateY(${y}px)`,
        filter: 'drop-shadow(0 5px 26px rgba(0,0,0,.46))',
      }}
    >
      <div style={{display: 'inline-block', background: C.gold, color: C.field, padding: '12px 20px 10px', fontFamily: 'Montserrat', fontWeight: 800, fontSize: 27, letterSpacing: 1.1}}>
        EN SIMPLE
      </div>
      <div style={{fontFamily: 'Bebas Neue', fontSize: 104, lineHeight: 0.92, color: C.cream, marginTop: 18}}>{label}</div>
      <div style={{fontFamily: 'Montserrat', fontWeight: 800, fontSize: 35, lineHeight: 1.12, color: C.white, marginTop: 14, maxWidth: 890}}>{sub}</div>
    </div>
  );
};

const Speaker: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const fade = interpolate(frame, [0, 0.22 * fps], [0, 1], {extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill style={{background: C.field}}>
      <Video
        src={staticFile('jen_master_hq.mp4')}
        style={{width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.025) saturate(1.04) brightness(1.01)'}}
      />
      <AbsoluteFill
        style={{
          background: 'linear-gradient(180deg, rgba(8,29,19,.38) 0%, rgba(8,29,19,.03) 25%, rgba(8,29,19,.04) 58%, rgba(8,29,19,.72) 100%)',
          opacity: fade,
        }}
      />

      <div style={{position: 'absolute', top: 74, left: 64, zIndex: 75, display: 'flex', alignItems: 'center', gap: 16, filter: 'drop-shadow(0 5px 18px rgba(0,0,0,.35))'}}>
        <Img src={staticFile('colectivo_logo.webp')} style={{width: 92, height: 92, objectFit: 'contain'}} />
        <div>
          <div style={{fontFamily: 'Montserrat', fontWeight: 800, fontSize: 19, color: C.gold, letterSpacing: 1.3}}>ORGANIZA</div>
          <div style={{fontFamily: 'Montserrat', fontWeight: 700, fontSize: 22, color: C.white, marginTop: 3}}>COLECTIVO PACKERS MÉXICO</div>
        </div>
      </div>
      <Img src={PMX} style={{position: 'absolute', top: 86, right: 64, width: 250, height: 63, objectFit: 'contain', zIndex: 75, filter: 'drop-shadow(0 4px 14px rgba(0,0,0,.3))'}} />

      <DataPunch startMs={3100} endMs={8500} label="DOM 13 SEP" sub="Palacio de Bellas Artes · CDMX" />
      <DataPunch startMs={11100} endMs={16600} label="12:00 H" sub="Llega 30 min antes" />
      <DataPunch startMs={19100} endMs={25600} label="PUNTO DE ENCUENTRO" sub="Costado izquierdo del Palacio · pasillo" />
      <DataPunch startMs={26700} endMs={32300} label="VEN EN FAMILIA" sub="Jersey y/o cheesehead" />

      <CaptionLayer />
    </AbsoluteFill>
  );
};

const Closing: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const opacity = interpolate(frame, [0, 0.28 * fps], [0, 1], {extrapolateRight: 'clamp'});
  const y = interpolate(frame, [0, 0.5 * fps], [24, 0], {extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1)});

  return (
    <AbsoluteFill style={{background: C.field, padding: `${safe.top}px ${safe.right}px ${safe.bottom}px ${safe.left}px`}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 18}}>
          <Img src={staticFile('colectivo_logo.webp')} style={{width: 132, height: 132, objectFit: 'contain'}} />
          <div>
            <div style={{fontFamily: 'Montserrat', fontWeight: 800, fontSize: 21, color: C.gold, letterSpacing: 1.3}}>ORGANIZA</div>
            <div style={{fontFamily: 'Montserrat', fontWeight: 700, fontSize: 24, color: C.cream, marginTop: 4}}>COLECTIVO PACKERS MÉXICO</div>
          </div>
        </div>
        <Img src={PMX} style={{width: 320, height: 80, objectFit: 'contain'}} />
      </div>

      <div style={{marginTop: 250, opacity, transform: `translateY(${y}px)`}}>
        <GoldRule width={260} />
        <div style={{fontFamily: 'Bebas Neue', fontSize: 164, lineHeight: 0.88, color: C.cream, marginTop: 28}}>NOS VEMOS EN</div>
        <div style={{fontFamily: 'Bebas Neue', fontSize: 170, lineHeight: 0.88, color: C.gold}}>BELLAS ARTES</div>
        <div style={{fontFamily: 'Montserrat', fontWeight: 800, fontSize: 48, color: C.white, marginTop: 52}}>DOM 13 SEP · 12:00 H</div>
        <div style={{fontFamily: 'Montserrat', fontWeight: 800, fontSize: 38, color: C.gold, marginTop: 20}}>LLEGA 30 MIN ANTES</div>
      </div>

      <div style={{marginTop: 'auto', borderTop: '2px solid rgba(242,232,207,.26)', paddingTop: 34}}>
        <div style={{fontFamily: 'Montserrat', fontWeight: 700, fontSize: 28, color: C.cream}}>ORGANIZA · COLECTIVO PACKERS MÉXICO</div>
        <div style={{fontFamily: 'Montserrat', fontWeight: 600, fontSize: 25, lineHeight: 1.25, color: C.cream, marginTop: 14, maxWidth: 870}}>
          PACKERS MÉXICO comparte la convocatoria con su comunidad.
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const BellasArtesReel: React.FC = () => (
  <AbsoluteFill style={{background: C.field}}>
    <Sequence from={0} durationInFrames={78}>
      <Opening />
    </Sequence>
    <Sequence from={78} durationInFrames={985}>
      <Speaker />
    </Sequence>
    <Sequence from={1063} durationInFrames={135}>
      <Closing />
    </Sequence>
  </AbsoluteFill>
);

export const BellasArtesCover: React.FC = () => (
  <AbsoluteFill style={{background: C.field, overflow: 'hidden'}}>
    <AbsoluteFill style={{background: 'radial-gradient(circle at 82% 17%, rgba(255,198,47,.18), transparent 26%), linear-gradient(180deg, #123B31 0%, #081D13 76%)'}} />
    <div style={{position: 'absolute', right: -130, top: 245, width: 760, height: 760, borderRadius: '50%', border: '2px solid rgba(255,198,47,.14)'}} />

    <Img src={PMX} style={{position: 'absolute', top: 92, right: 72, width: 320, height: 80, objectFit: 'contain'}} />

    <div style={{position: 'absolute', left: 72, right: 72, top: 330}}>
      <GoldRule width={230} />
      <div style={{fontFamily: 'Bebas Neue', fontSize: 166, lineHeight: 0.86, color: C.cream, marginTop: 30}}>FOTO OFICIAL</div>
      <div style={{fontFamily: 'Bebas Neue', fontSize: 122, lineHeight: 0.9, color: C.gold, marginTop: 14}}>DE LA AFICIÓN PACKER</div>

      <div style={{marginTop: 88, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28}}>
        <div>
          <div style={{fontFamily: 'Bebas Neue', fontSize: 94, lineHeight: 0.9, color: C.white}}>DOM 13 SEP</div>
        </div>
        <div style={{borderLeft: '2px solid rgba(242,232,207,.24)', paddingLeft: 30}}>
          <div style={{fontFamily: 'Bebas Neue', fontSize: 108, lineHeight: 0.9, color: C.gold}}>12:00 H</div>
        </div>
      </div>

      <div style={{fontFamily: 'Montserrat', fontWeight: 800, fontSize: 40, lineHeight: 1.18, color: C.cream, marginTop: 66, maxWidth: 820}}>
        PALACIO DE BELLAS ARTES · CDMX
      </div>
      <div style={{fontFamily: 'Montserrat', fontWeight: 800, fontSize: 38, color: C.gold, marginTop: 28}}>LLEGA 30 MIN ANTES</div>
    </div>
  </AbsoluteFill>
);
