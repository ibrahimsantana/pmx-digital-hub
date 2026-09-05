# STATUS.md

## PROJECT

Project:
`PMX DIGITAL HUB`

Partnership ID:
`PMX-PART-2026-WINGSTOP-COND-001`

Repository:
`ibrahimsantana/pmx-digital-hub`

## CURRENT PHASE

`FASE 2B · FIGMA VISUAL HANDOFF IMPLEMENTATION`

## STATUS

`FIGMA HANDOFF IMPLEMENTED · PUBLIC REDEPLOY / REAL-BROWSER QA PENDING`

## INFRASTRUCTURE

P0 hosting:
`GitHub Pages · ACTIVE`

Public Hub URL:
`https://ibrahimsantana.github.io/pmx-digital-hub/`

Architecture:
`STATIC HTML + CSS + JAVASCRIPT · NO BUILD SYSTEM · NO NEW DEPENDENCIES`

## FIGMA HANDOFF

Visual source of truth:
`FIGMA → CODEX · PMX DIGITAL HUB VISUAL HANDOFF V0.1`

Mobile reference:
`390×844 · NORMAL · PROMO OFF · PROMO ON · SPECIAL ON · DATA PENDING`

Desktop reference:
`1440×900 · 61.8 / 38.2`

Implementation rules preserved:
- `Field Dark #081D13`
- `Lambeau Green #123B31`
- `Gold #FFC62F`
- `Cream #F2E8CF`
- `Bebas Neue + Montserrat`
- responsive margins `21 / 34 / 89`
- primary CTA `CONFIRMA TU ASISTENCIA`
- secondary CTA `CÓMO LLEGAR`
- `Casa Oficial de Packers en CDMX`
- Promo OFF and Special OFF collapse with no dead space
- no generic card/pill/dashboard treatment
- keyboard focus uses `2px Gold` with `4px` offset

## CONTENT / WEEK 1

Game ID:
`PMX-WS-2026-W01`

Week 1:
`Packers @ Minnesota Vikings · DOM 13 SEP · 14:25 CDMX`

Venue:
`Wingstop Condesa · CDMX`

Registration:
`PASS · USER-CONFIRMED CURRENT`

Registration URL:
`https://share.forms.app/form/6a96032ee64cd5f15d1688aa`

Maps:
`PASS · WINGSTOP CONDESA PLACE ID VERIFIED · GOOGLE MAPS SEARCH URL CONFIGURED`

Promo:
`OFF`

Special:
`OFF`

## ASSETS

PMX Horizontal V1.1:
`HOLD · EXACT ASSET NOT YET MATERIALIZED IN REPOSITORY`

Safe behavior:
`TECHNICAL PLACEHOLDER ONLY · NO RECONSTRUCTION`

NFL-MIN-LOGO-01:
`PASS DOCUMENTAL · MATERIALIZATION HOLD ONLY · NON-BLOCKING`

WS-LOGO-01.jpg:
`MATERIALIZED IN PROJECT CONTEXT · SOURCE-VERIFIED TECHNICAL ASSET · MASTER FORMAT HOLD`

Wingstop Condesa photography:
`RETURN 02 PENDING · NON-BLOCKING`

Hero photo behavior while pending:
`LAMBEAU GREEN REPLACEABLE SLOT · NO WRONG PHOTO`

## ANALYTICS

GA4:
`ACTIVE · LIVE CORE QA PASS · CUSTOM DIMENSIONS PASS`

Measurement ID:
`G-QEN5F5YY14`

Custom dimensions:
`8/8 · EVENT SCOPE`

Formal QA cutoff:
`2026-09-05T11:55:39-06:00`

Baseline rule:
`≤ 11:55:39 = TEST / SETUP · EXCLUDE FROM CAMPAIGN PERFORMANCE`
`> 11:55:39 = ELIGIBLE FOR LIVE CAMPAIGN PERFORMANCE`

Events preserved:
`HUB_VIEW · CLICK_REGISTRO · CLICK_MAPS · CLICK_PROMO · CLICK_CALENDAR · CLICK_GOPACKGO · CLICK_SOCIAL · QR_OPEN`

REGISTRO_CONFIRMADO:
`HOLD · DO NOT FIRE P0`

Integrity:
`CLICK_REGISTRO ≠ REGISTRO_CONFIRMADO ≠ ASISTENCIA_MEDIDA`

## IMPLEMENTATION

Files updated:
- `index.html`
- `css/styles.css`
- `js/config.js`
- `js/app.js`
- `STATUS.md`
- `assets/README.md`

Analytics implementation:
`UNCHANGED`

Taxonomy:
`UNCHANGED`

Conditional modules:
`PROMO ON/OFF · SPECIAL ON/OFF READY`

Responsive:
`≤767 one column / 21px margin`
`768–1099 one column wide / 34px margin`
`≥1100 61.8/38.2 / 89px margin / 1262px max width`

## QA

JavaScript syntax:
`PASS · node --check`

Figma contract translation:
`PASS · HTML/CSS/JS IMPLEMENTED`

Real GitHub Pages redeploy:
`PENDING`

Real browser:
`PENDING`

Mobile 390×844:
`PENDING REAL DEPLOY QA`

Desktop 1440×900:
`PENDING REAL DEPLOY QA`

Primary CTA:
`CONFIGURED · FORMS.APP CURRENT`

Maps:
`PASS · VERIFIED WINGSTOP CONDESA DESTINATION CONFIGURED`

Promo OFF:
`IMPLEMENTED · ZERO RESERVED GAP`

Special OFF:
`IMPLEMENTED · ZERO RESERVED GAP`

Keyboard focus:
`IMPLEMENTED · GOLD 2PX / 4PX OFFSET`

## BLOCKERS

### Non-blocking identity asset hold
`PMX Horizontal V1.1 exact repo asset not materialized`

Impact:
`Public implementation continues with a clearly labeled technical placeholder; logo is not fabricated.`

### Non-blocking rival asset hold
`NFL-MIN-LOGO-01 exact SVG materialization pending`

Impact:
`Text data remains; visual rival asset collapses silently per DATA PENDING behavior.`

### Operational URL hold
`Calendar / GoPackGo / social destinations are still unverified or blank in config.`

Impact:
`Those controls remain disabled until authoritative URLs are supplied. Maps is configured and enabled.`

## NEXT ACTION

After GitHub Pages redeploy:
`RUN REAL-BROWSER VISUAL + FUNCTIONAL QA ON 390×844 AND 1440×900`

Then:
`VERIFY PRIMARY CTA · MAPS · UTM PRESERVATION · GA4 EVENTS · CONDITIONAL STATES · CONSOLE`

Do not declare technical PASS until public deployed result is inspected.

## LAST RELEVANT CHANGE

`feat: integrate Figma visual handoff V0.1`

Previous GA4 activation commit:
`4256d1a79c07d13fab83215f472866aedfc71846`
