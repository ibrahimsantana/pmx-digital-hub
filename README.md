# PACKERS MÉXICO · DIGITAL HUB

Hub público, estático y mobile-first para `PACKERS MÉXICO × WINGSTOP CONDESA · 2026–27`.

## URL pública

`https://packersmexico.github.io/`

Repository:

`packersmexico/packersmexico.github.io`

## Propósito

Concentrar la experiencia operativa de Game Day de PACKERS MÉXICO: próximo juego, confirmación de asistencia, ubicación, calendario, GoPackGo MX y redes sociales, con atribución UTM y medición GA4.

PACKERS MÉXICO opera como comunidad/editorial independiente y no como organización oficial de Green Bay Packers ni de la NFL.

## Estructura

- `index.html`: estructura semántica de la interfaz.
- `css/styles.css`: presentación responsive basada en el handoff visual aprobado de Figma.
- `js/config.js`: fuente única de contenido semanal y destinos.
- `js/analytics.js`: atribución de sesión, helper de eventos y carga de GA4.
- `js/app.js`: render, comportamiento y conservación modular de UTM.
- `assets/README.md`: dependencias de identidad y assets.
- `STATUS.md`: estado operativo vigente.

## Implementación visual

Fuente de verdad visual:

`FIGMA → CODEX · PMX DIGITAL HUB VISUAL HANDOFF V0.1`

Referencias:

- Mobile: `390×844`
- Desktop: `1440×900`
- Desktop principal: proporción `61.8 / 38.2`
- Márgenes responsive: `21 / 34 / 89`
- Tipografía: `Bebas Neue + Montserrat`
- Colores: `Field Dark / Lambeau Green / Gold / Cream`

Los módulos `PROMO` y `SPECIAL` colapsan completamente cuando están OFF. En estado `DATA PENDING`, el visual pendiente también colapsa silenciosamente: no se reserva un bloque verde vacío ni se muestra un warning público.

## Week 1

Game ID:

`PMX-WS-2026-W01`

Juego:

`Packers @ Minnesota Vikings · DOM 13 SEP · 14:25 CDMX`

Llegada comunidad:

`14:00 CDMX`

Sede:

`Wingstop Condesa · CDMX`

Wording aprobado:

`Casa Oficial de Packers en CDMX`

CTA principal:

`CONFIRMA TU ASISTENCIA`

Registro:

`https://share.forms.app/form/6a96032ee64cd5f15d1688aa`

## Destinos activos

- Maps · Wingstop Condesa
- Calendario público · `PACKERS MÉXICO · Game Days 2026–27`
- GoPackGo MX · YouTube
- Facebook · `https://www.facebook.com/gopackgomx/`
- Instagram · `https://www.instagram.com/packers_mx/`
- X · `https://x.com/Packers_Mx`
- TikTok · `https://www.tiktok.com/@packers_mx`
- YouTube · `https://www.youtube.com/@gopackgomx6092`

## Actualizar el próximo juego

Edita únicamente `window.PMX_CONFIG` en `js/config.js`.

No introducir datos no confirmados. Si un asset visual aún no está disponible, usar el comportamiento `DATA PENDING` sin fabricar logos o fotografías.

## Analytics GA4

Measurement ID activo:

```text
G-QEN5F5YY14
```

Estado:

`GA4 ACTIVE · LIVE CORE QA PASS · CUSTOM DIMENSIONS PASS`

El helper global `pmxTrack(eventName, extraParams)` es el único punto de envío y conserva atribución UTM de sesión.

Eventos P0:

- `HUB_VIEW`
- `CLICK_REGISTRO`
- `CLICK_MAPS`
- `CLICK_PROMO`
- `CLICK_CALENDAR`
- `CLICK_GOPACKGO`
- `CLICK_SOCIAL`
- `QR_OPEN`

`REGISTRO_CONFIRMADO` permanece deshabilitado en P0.

Regla de integridad:

`CLICK_REGISTRO ≠ REGISTRO_CONFIRMADO ≠ ASISTENCIA_MEDIDA`

Formal QA cutoff:

`2026-09-05T11:55:39-06:00`

Todo tráfico anterior o igual al cutoff es `TEST / SETUP · EXCLUDE FROM CAMPAIGN PERFORMANCE`.

## Identidad · hold P0

Único logo autorizado:

`PMX_LOGO_HISTORICO_HORIZONTAL_CANVA_MASTER_V1.1.svg`

El componente vigente ya fue localizado y verificado en el Brand Book V5.1 de Figma:

`fileKey z30v1pEwZPp7F4sV7JaExJ · node 75:4098 · PMX/Logo/Current/Horizontal/V1.1`

Mientras los bytes exactos no estén materializados en el repositorio, el Hub muestra únicamente un fallback tipográfico `PACKERS MÉXICO`. No se reconstruye ni imita el logo.

## Assets pendientes no bloqueantes

- `NFL-MIN-LOGO-01` tiene PASS documental pero sigue pendiente de materialización.
- Wingstop mantiene `MASTER FORMAT HOLD` para su master anual HQ.
- RETURN 02 fotográfico de Wingstop Condesa sigue pendiente.

Nunca reconstruir, vectorizar o improvisar estos assets.

## QA / cierre pendiente

Antes de declarar PASS final:

- materializar `PMX Horizontal V1.1` exacto y sustituir el fallback tipográfico;
- verificar/corregir el wording del formulario externo a `Casa Oficial de Packers en CDMX`;
- QA formal `390×844`;
- QA formal `1440×900`;
- click QA de redes + GoPackGo;
- validación final de UTM/GA4/console.
