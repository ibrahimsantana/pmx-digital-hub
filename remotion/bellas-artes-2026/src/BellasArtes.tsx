import React from 'react';
import {AbsoluteFill, Img, Easing, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {Video} from '@remotion/media';
import '@fontsource/bebas-neue';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/800.css';

const C = {field:'#081D13',green:'#123B31',gold:'#FFC62F',cream:'#F2E8CF',white:'#FFFDF7'};
const FPS = 30;
const secToFrame = (sec:number) => Math.round(sec * FPS);

const captions = [
  {start:0.594,end:3.276,lines:['Atención, afición de Green Bay','en México.']},
  {start:3.629,end:8.045,lines:['Llegó el momento de reunirnos, pasarla bien','y armar la convivencia.']},
  {start:8.222,end:10.663,lines:['Y pintar Bellas Artes','de verde y oro.']},
  {start:11.755,end:15.915,lines:['La cita para nuestra foto anual','es este domingo 13 de septiembre,']},
  {start:16.011,end:19.817,lines:['a las 12 del mediodía.','Trae tu jersey, tu gorra,']},
  {start:19.865,end:23.816,lines:['tu familia y la mejor actitud','para representar a la mejor afición.']},
  {start:24.346,end:26.643,lines:['No te quedes fuera','de la foto de este año.']},
  {start:26.787,end:29.164,lines:['Síguenos para más detalles.','¡Go Pack Go!']},
];

const CaptionLayer: React.FC = () => {
  const frame = useCurrentFrame();
  const active = captions.find(c => frame >= secToFrame(c.start) && frame <= secToFrame(c.end));
  if (!active) return null;
  return <div style={{position:'absolute',left:72,right:72,bottom:214,zIndex:100,display:'flex',justifyContent:'center'}}>
    <div style={{maxWidth:900,padding:'18px 24px 16px',background:'rgba(8,29,19,.88)',borderTop:`4px solid ${C.gold}`,boxShadow:'0 14px 40px rgba(0,0,0,.36)',fontFamily:'Montserrat',fontWeight:800,fontSize:48,lineHeight:1.12,textAlign:'center',color:C.white}}>
      {active.lines.map((line,i)=><div key={i}>{line}</div>)}
    </div>
  </div>;
};

const OrganizerStrip: React.FC = () => <div style={{position:'absolute',top:68,left:60,right:60,zIndex:72,display:'flex',alignItems:'center',justifyContent:'space-between'}}>
  <div style={{display:'flex',alignItems:'center',gap:16}}>
    <Img src={staticFile('colectivo_logo.webp')} style={{width:86,height:86,objectFit:'contain'}} />
    <div>
      <div style={{fontFamily:'Montserrat',fontWeight:800,fontSize:18,letterSpacing:1.3,color:C.gold}}>ORGANIZA</div>
      <div style={{fontFamily:'Montserrat',fontWeight:800,fontSize:22,color:C.white,marginTop:3}}>COLECTIVO PACKERS MÉXICO</div>
    </div>
  </div>
  <Img src={staticFile('pmx_logo_v11.png')} style={{width:294,height:74,objectFit:'contain'}} />
</div>;

const OverlayCard: React.FC<{from:number;to:number;children:React.ReactNode}> = ({from,to,children}) => {
  const frame = useCurrentFrame();
  if (frame < from || frame > to) return null;
  const opacity = interpolate(frame,[from,from+8,to-10,to],[0,1,1,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
  const y = interpolate(frame,[from,from+12],[22,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp',easing:Easing.bezier(0.16,1,0.3,1)});
  return <div style={{position:'absolute',left:72,right:72,top:210,zIndex:60,opacity,transform:`translateY(${y}px)`}}>
    <div style={{background:'rgba(8,29,19,.88)',borderLeft:`8px solid ${C.gold}`,padding:'24px 28px 22px',boxShadow:'0 16px 44px rgba(0,0,0,.34)'}}>{children}</div>
  </div>;
};

const Opening: React.FC = () => {
  const frame = useCurrentFrame();
  if (frame > 90) return null;
  const opacity = interpolate(frame,[0,10,80,90],[0,1,1,0],{extrapolateRight:'clamp'});
  return <AbsoluteFill style={{background:C.field,zIndex:80,opacity}}>
    <AbsoluteFill style={{background:'radial-gradient(circle at 84% 18%, rgba(255,198,47,.16), transparent 29%), linear-gradient(180deg, #123B31 0%, #081D13 76%)'}} />
    <div style={{position:'absolute',left:72,right:72,top:310}}>
      <div style={{width:220,height:8,background:C.gold,borderRadius:99}} />
      <div style={{fontFamily:'Bebas Neue',fontSize:168,lineHeight:.84,color:C.cream,marginTop:30}}>FOTO OFICIAL</div>
      <div style={{fontFamily:'Bebas Neue',fontSize:124,lineHeight:.9,color:C.gold,marginTop:16}}>DE LA AFICIÓN PACKER</div>
      <div style={{fontFamily:'Montserrat',fontWeight:800,fontSize:48,color:C.white,marginTop:62}}>CDMX · 13 SEP</div>
    </div>
  </AbsoluteFill>;
};

const Closing: React.FC = () => {
  const frame = useCurrentFrame();
  const start = secToFrame(29.164);
  if (frame < start) return null;
  const local = frame - start;
  const opacity = interpolate(local,[0,10],[0,1],{extrapolateRight:'clamp'});
  return <AbsoluteFill style={{background:C.field,zIndex:82,opacity}}>
    <AbsoluteFill style={{background:'radial-gradient(circle at 82% 18%, rgba(255,198,47,.14), transparent 30%), linear-gradient(180deg, #123B31 0%, #081D13 82%)'}} />
    <div style={{position:'absolute',top:86,left:72,right:72,display:'flex',alignItems:'center',justifyContent:'space-between'}}>
      <div style={{display:'flex',alignItems:'center',gap:16}}>
        <Img src={staticFile('colectivo_logo.webp')} style={{width:108,height:108,objectFit:'contain'}} />
        <div><div style={{fontFamily:'Montserrat',fontWeight:800,fontSize:18,color:C.gold,letterSpacing:1.3}}>ORGANIZA</div><div style={{fontFamily:'Montserrat',fontWeight:800,fontSize:22,color:C.cream,marginTop:4}}>COLECTIVO PACKERS MÉXICO</div></div>
      </div>
      <Img src={staticFile('pmx_logo_v11.png')} style={{width:300,height:76,objectFit:'contain'}} />
    </div>
    <div style={{position:'absolute',left:72,right:72,top:365}}>
      <div style={{fontFamily:'Bebas Neue',fontSize:104,color:C.gold,lineHeight:.9}}>¿TE SUMAS? 📸🧀</div>
      <div style={{fontFamily:'Bebas Neue',fontSize:166,color:C.cream,lineHeight:.86,marginTop:30}}>NOS VEMOS EN</div>
      <div style={{fontFamily:'Bebas Neue',fontSize:174,color:C.gold,lineHeight:.86}}>BELLAS ARTES</div>
      <div style={{fontFamily:'Montserrat',fontWeight:800,fontSize:50,color:C.white,marginTop:58}}>DOM 13 SEP · 12:00 H</div>
    </div>
    <div style={{position:'absolute',left:72,right:72,bottom:164,borderTop:'2px solid rgba(242,232,207,.24)',paddingTop:26,fontFamily:'Montserrat',fontWeight:700,fontSize:27,lineHeight:1.2,color:C.cream}}>PACKERS MÉXICO comparte esta invitación con su comunidad.</div>
  </AbsoluteFill>;
};

const VisualMoments: React.FC = () => <>
  <OverlayCard from={102} to={237}>
    <div style={{fontFamily:'Bebas Neue',fontSize:88,lineHeight:.92,color:C.gold}}>LA AFICIÓN PACKER</div>
    <div style={{fontFamily:'Bebas Neue',fontSize:82,lineHeight:.92,color:C.cream}}>SE REÚNE EN BELLAS ARTES</div>
    <div style={{fontFamily:'Montserrat',fontWeight:700,fontSize:34,lineHeight:1.16,color:C.white,marginTop:14}}>Ven a formar parte de la foto de la comunidad. 📸🧀</div>
  </OverlayCard>
  <OverlayCard from={246} to={383}>
    <div style={{fontFamily:'Bebas Neue',fontSize:90,color:C.gold,lineHeight:.92}}>DOMINGO 13 SEP</div>
    <div style={{fontFamily:'Bebas Neue',fontSize:112,color:C.cream,lineHeight:.9,marginTop:8}}>12:00 H</div>
    <div style={{fontFamily:'Montserrat',fontWeight:700,fontSize:34,color:C.white,marginTop:12}}>Palacio de Bellas Artes · CDMX</div>
  </OverlayCard>
  <OverlayCard from={384} to={522}>
    <div style={{fontFamily:'Bebas Neue',fontSize:78,color:C.gold,lineHeight:.94}}>TE RECOMENDAMOS LLEGAR</div>
    <div style={{fontFamily:'Bebas Neue',fontSize:112,color:C.cream,lineHeight:.9,marginTop:8}}>30 MINUTOS ANTES</div>
    <div style={{fontFamily:'Montserrat',fontWeight:700,fontSize:31,lineHeight:1.16,color:C.white,marginTop:14}}>Así tendremos tiempo para reunirnos y seguir las indicaciones de los organizadores.</div>
  </OverlayCard>
  <OverlayCard from={523} to={665}>
    <div style={{fontFamily:'Bebas Neue',fontSize:88,color:C.gold,lineHeight:.92}}>¿DÓNDE NOS VEMOS?</div>
    <div style={{fontFamily:'Montserrat',fontWeight:800,fontSize:40,lineHeight:1.15,color:C.cream,marginTop:14}}>Costado izquierdo del<br />Palacio de Bellas Artes</div>
    <div style={{fontFamily:'Montserrat',fontWeight:800,fontSize:36,color:C.white,marginTop:12}}>En el pasillo.</div>
  </OverlayCard>
  <OverlayCard from={666} to={792}>
    <div style={{fontFamily:'Bebas Neue',fontSize:70,color:C.gold,lineHeight:.94}}>VEN CON LOS COLORES DE GREEN BAY 💚💛</div>
    <div style={{fontFamily:'Montserrat',fontWeight:700,fontSize:31,color:C.white,marginTop:12}}>Puedes traer:</div>
    <div style={{fontFamily:'Bebas Neue',fontSize:88,color:C.cream,marginTop:6}}>JERSEY · CHEESEHEAD</div>
    <div style={{fontFamily:'Montserrat',fontWeight:700,fontSize:32,color:C.white,marginTop:4}}>Y venir con tu familia.</div>
  </OverlayCard>
  <OverlayCard from={793} to={874}>
    <div style={{fontFamily:'Bebas Neue',fontSize:78,color:C.gold,lineHeight:.94}}>SIGUE LAS INDICACIONES</div>
    <div style={{fontFamily:'Bebas Neue',fontSize:76,color:C.cream,lineHeight:.94}}>DE LOS ORGANIZADORES</div>
    <div style={{fontFamily:'Montserrat',fontWeight:700,fontSize:32,lineHeight:1.16,color:C.white,marginTop:14}}>Ellos coordinarán cómo se forma la fotografía.</div>
  </OverlayCard>
</>;

export const BellasArtesReel: React.FC = () => {
  const frame = useCurrentFrame();
  return <AbsoluteFill style={{background:C.field}}>
    <Video src={staticFile('jen_master_hq.mp4')} style={{width:'100%',height:'100%',objectFit:'cover',filter:'contrast(1.03) saturate(1.05) brightness(1.01)'}} />
    <AbsoluteFill style={{background:'linear-gradient(180deg, rgba(8,29,19,.22) 0%, rgba(8,29,19,0) 34%, rgba(8,29,19,.12) 58%, rgba(8,29,19,.58) 100%)'}} />
    {frame >= 92 && frame < secToFrame(29.164) ? <OrganizerStrip /> : null}
    {frame >= 92 && frame < secToFrame(29.164) ? <VisualMoments /> : null}
    <CaptionLayer />
    <Opening />
    <Closing />
  </AbsoluteFill>;
};

export const BellasArtesCover: React.FC = () => <AbsoluteFill style={{background:C.field,overflow:'hidden'}}>
  <AbsoluteFill style={{background:'radial-gradient(circle at 86% 18%, rgba(255,198,47,.15), transparent 29%), linear-gradient(180deg, #123B31 0%, #081D13 78%)'}} />
  <div style={{position:'absolute',left:72,right:72,top:280}}>
    <div style={{width:230,height:8,background:C.gold,borderRadius:99}} />
    <div style={{fontFamily:'Bebas Neue',fontSize:166,lineHeight:.86,color:C.cream,marginTop:30}}>FOTO OFICIAL</div>
    <div style={{fontFamily:'Bebas Neue',fontSize:122,lineHeight:.9,color:C.gold,marginTop:16}}>DE LA AFICIÓN PACKER</div>
    <div style={{marginTop:94,borderTop:'2px solid rgba(242,232,207,.24)',paddingTop:46}}>
      <div style={{fontFamily:'Bebas Neue',fontSize:108,lineHeight:.9,color:C.white}}>DOM 13 SEP · 12:00 H</div>
      <div style={{fontFamily:'Montserrat',fontWeight:800,fontSize:42,lineHeight:1.18,color:C.cream,marginTop:30}}>PALACIO DE BELLAS ARTES · CDMX</div>
    </div>
  </div>
</AbsoluteFill>;
