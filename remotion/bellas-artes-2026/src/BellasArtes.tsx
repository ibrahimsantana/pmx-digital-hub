import React from 'react';
import {AbsoluteFill, Img, Sequence, interpolate, staticFile, useCurrentFrame, useVideoConfig, Easing} from 'remotion';
import {Video} from '@remotion/media';
import '@fontsource/bebas-neue';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';

const C = {
  field: '#081D13',
  green: '#123B31',
  gold: '#FFC62F',
  cream: '#F2E8CF',
  white: '#FFFDF7',
};

const safe = {left: 72, right: 72, top: 88, bottom: 170};

const BrandBug: React.FC = () => (
  <div style={{position:'absolute', top:safe.top, left:safe.left, right:safe.right, display:'flex', alignItems:'center', justifyContent:'space-between', zIndex:20}}>
    <Img src={staticFile('colectivo_logo.webp')} style={{width:118, height:118, objectFit:'contain'}} />
    <Img src={staticFile('pmx_logo.webp')} style={{width:390, height:98, objectFit:'contain'}} />
  </div>
);

const GoldRule: React.FC<{width?:number}> = ({width=180}) => (
  <div style={{width, height:8, background:C.gold, borderRadius:99}} />
);

const Opening: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const opacity = interpolate(frame,[0,0.35*fps],[0,1],{extrapolateRight:'clamp', easing:Easing.bezier(0.16,1,0.3,1)});
  const y = interpolate(frame,[0,0.55*fps],[34,0],{extrapolateRight:'clamp', easing:Easing.bezier(0.16,1,0.3,1)});
  return (
    <AbsoluteFill style={{background:C.field, overflow:'hidden'}}>
      <Video src={staticFile('jen_master.mp4')} muted style={{width:'100%',height:'100%',objectFit:'cover',opacity:0.42}} />
      <AbsoluteFill style={{background:'linear-gradient(180deg, rgba(8,29,19,.3) 0%, rgba(8,29,19,.9) 72%, #081D13 100%)'}} />
      <BrandBug />
      <div style={{position:'absolute', left:safe.left, right:safe.right, bottom:290, opacity, translate:`0 ${y}px`}}>
        <GoldRule width={230}/>
        <div style={{fontFamily:'Bebas Neue', fontSize:164, lineHeight:0.86, color:C.cream, letterSpacing:1, marginTop:30}}>FOTO OFICIAL</div>
        <div style={{fontFamily:'Bebas Neue', fontSize:122, lineHeight:0.9, color:C.gold, marginTop:14}}>DE LA AFICIÓN PACKER</div>
        <div style={{fontFamily:'Montserrat', fontWeight:700, fontSize:44, color:C.white, marginTop:42}}>13 SEP · 12:00 H · BELLAS ARTES · CDMX</div>
      </div>
    </AbsoluteFill>
  );
};

const Punch: React.FC<{label:string; sub?:string; from:number; duration:number}> = ({label, sub, from, duration}) => {
  const frame = useCurrentFrame() - from;
  const {fps} = useVideoConfig();
  const opacity = interpolate(frame,[0,0.18*fps,duration-0.25*fps,duration],[0,1,1,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
  const y = interpolate(frame,[0,0.28*fps],[30,0],{extrapolateRight:'clamp', easing:Easing.bezier(0.16,1,0.3,1)});
  return <div style={{position:'absolute',left:72,right:72,bottom:350,opacity,translate:`0 ${y}px`,zIndex:30}}>
    <div style={{display:'inline-block', background:C.gold, color:C.field, padding:'16px 24px 12px', fontFamily:'Montserrat',fontWeight:800,fontSize:32,letterSpacing:1.2}}>EN SIMPLE</div>
    <div style={{fontFamily:'Bebas Neue',fontSize:118,lineHeight:.92,color:C.cream,marginTop:18,textShadow:'0 4px 24px rgba(0,0,0,.34)'}}>{label}</div>
    {sub ? <div style={{fontFamily:'Montserrat',fontWeight:700,fontSize:38,lineHeight:1.12,color:C.white,marginTop:14,maxWidth:860,textShadow:'0 3px 16px rgba(0,0,0,.36)'}}>{sub}</div> : null}
  </div>;
};

const Speaker: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const fade = interpolate(frame,[0,0.25*fps],[0,1],{extrapolateRight:'clamp'});
  return (
    <AbsoluteFill style={{background:C.field}}>
      <Video src={staticFile('jen_master.mp4')} trimBefore={30} style={{width:'100%',height:'100%',objectFit:'cover'}} />
      <AbsoluteFill style={{background:'linear-gradient(180deg, rgba(8,29,19,.48) 0%, rgba(8,29,19,.05) 30%, rgba(8,29,19,.18) 58%, rgba(8,29,19,.88) 100%)', opacity:fade}} />
      <BrandBug />
      <div style={{position:'absolute',left:72,bottom:205,zIndex:25}}>
        <div style={{fontFamily:'Montserrat',fontWeight:700,fontSize:28,color:C.gold,letterSpacing:2}}>COLECTIVO PACKERS MÉXICO</div>
        <div style={{fontFamily:'Montserrat',fontWeight:600,fontSize:24,color:C.cream,marginTop:8}}>Convocatoria comunitaria · CDMX</div>
      </div>
      <Punch from={30} duration={105} label="DOM 13 SEP" sub="Palacio de Bellas Artes · CDMX" />
      <Punch from={150} duration={105} label="12:00 H" sub="Llega 30 minutos antes" />
      <Punch from={285} duration={135} label="PUNTO DE ENCUENTRO" sub="Costado izquierdo del Palacio, en el pasillo." />
      <Punch from={445} duration={140} label="VEN EN FAMILIA" sub="Lleva tu jersey y tu cheesehead." />
    </AbsoluteFill>
  );
};

const Closing: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const opacity = interpolate(frame,[0,0.28*fps],[0,1],{extrapolateRight:'clamp'});
  const scale = interpolate(frame,[0,0.55*fps],[0.97,1],{extrapolateRight:'clamp', easing:Easing.bezier(0.16,1,0.3,1)});
  return (
    <AbsoluteFill style={{background:C.field, padding:`${safe.top}px ${safe.right}px ${safe.bottom}px ${safe.left}px`}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <Img src={staticFile('colectivo_logo.webp')} style={{width:150,height:150,objectFit:'contain'}} />
        <Img src={staticFile('pmx_logo.webp')} style={{width:430,height:110,objectFit:'contain'}} />
      </div>
      <div style={{marginTop:230, opacity, scale}}>
        <GoldRule width={260}/>
        <div style={{fontFamily:'Bebas Neue',fontSize:166,lineHeight:.88,color:C.cream,marginTop:28}}>NOS VEMOS EN</div>
        <div style={{fontFamily:'Bebas Neue',fontSize:170,lineHeight:.88,color:C.gold}}>BELLAS ARTES</div>
        <div style={{fontFamily:'Montserrat',fontWeight:800,fontSize:50,color:C.white,marginTop:48}}>DOM 13 SEP · 12:00 H</div>
      </div>
      <div style={{marginTop:'auto',borderTop:`2px solid rgba(242,232,207,.28)`,paddingTop:34}}>
        <div style={{fontFamily:'Montserrat',fontWeight:700,fontSize:29,color:C.cream}}>ORGANIZA · COLECTIVO PACKERS MÉXICO</div>
        <div style={{fontFamily:'Montserrat',fontWeight:600,fontSize:26,color:C.cream,marginTop:10}}>PACKERS MÉXICO · COMPARTE CON SU COMUNIDAD</div>
        <div style={{display:'inline-block',marginTop:34,background:C.gold,color:C.field,padding:'22px 30px 18px',fontFamily:'Montserrat',fontWeight:800,fontSize:34}}>VER UBICACIÓN</div>
      </div>
    </AbsoluteFill>
  );
};

export const BellasArtesReel: React.FC = () => (
  <AbsoluteFill style={{background:C.field}}>
    <Sequence from={0} durationInFrames={66}><Opening /></Sequence>
    <Sequence from={66} durationInFrames={654}><Speaker /></Sequence>
    <Sequence from={720} durationInFrames={90}><Closing /></Sequence>
  </AbsoluteFill>
);

export const BellasArtesCover: React.FC = () => (
  <AbsoluteFill style={{background:C.field,overflow:'hidden'}}>
    <Video src={staticFile('jen_master.mp4')} muted startFrom={60} style={{width:'100%',height:'100%',objectFit:'cover',opacity:.48}} />
    <AbsoluteFill style={{background:'linear-gradient(180deg, rgba(8,29,19,.2), rgba(8,29,19,.95) 78%)'}} />
    <BrandBug />
    <div style={{position:'absolute',left:72,right:72,bottom:280}}>
      <GoldRule width={220}/>
      <div style={{fontFamily:'Bebas Neue',fontSize:162,lineHeight:.86,color:C.cream,marginTop:28}}>FOTO OFICIAL</div>
      <div style={{fontFamily:'Bebas Neue',fontSize:122,lineHeight:.9,color:C.gold}}>DE LA AFICIÓN PACKER</div>
      <div style={{fontFamily:'Montserrat',fontWeight:800,fontSize:44,color:C.white,marginTop:40}}>13 SEP · 12:00 H · BELLAS ARTES</div>
    </div>
  </AbsoluteFill>
);
