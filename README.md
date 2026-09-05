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

Los módulos `PROMO` y `SPECIAL` colapsan completamente cuando están OFF.

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

No introducir datos no confirmados. Si un asset visual aún no está disponible, usar el comportamiento `DATA PENDING` y conservar el slot reemplazable sin fabricar logos o fotografías.

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

## Assets pendientes no bloqueantes

- `PMX Horizontal V1.1` exacto todavía no está materializado en el repo.
- `NFL-MIN-LOGO-01` tiene PASS documental pero sigue pendiente de materialización.
- Wingstop mantiene `MASTER FORMAT HOLD` para su master anual HQ.
- RETURN 02 fotográfico de Wingstop Condesa sigue pendiente.

Nunca reconstruir, vectorizar o improvisar estos assets para cerrar un placeholder.

## QA pendiente

Antes de declarar PASS final:

- QA formal `390×844`
- QA formal `1440×900`
- click QA de redes + GoPackGo
- validación final de UTM/GA4/console
- sustitución del placeholder PMX por Horizontal V1.1 exacto
