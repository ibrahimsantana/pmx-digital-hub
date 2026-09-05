# STATUS.md

## PROJECT

Project:
`PMX DIGITAL HUB`

Partnership ID:
`PMX-PART-2026-WINGSTOP-COND-001`

Repository:
`packersmexico/packersmexico.github.io`

Organization:
`packersmexico`

## CURRENT PHASE

`FASE 2B · PUBLIC HUB IMPLEMENTATION + FINAL QA`

## STATUS

`FIGMA HANDOFF IMPLEMENTED · ORG MIGRATION PASS · PUBLIC HUB ACTIVE · FINAL MOBILE QA PENDING`

## INFRASTRUCTURE

P0 hosting:
`GitHub Pages · ACTIVE`

Public Hub URL:
`https://packersmexico.github.io/`

Repository migration:
`PASS · MOVED FROM ibrahimsantana/pmx-digital-hub TO packersmexico/packersmexico.github.io`

GitHub App access:
`PASS · ChatGPT Codex Connector INSTALLED ON packersmexico · ALL REPOSITORIES`

Latest Pages deploy after social activation:
`PASS · COMPLETED · SUCCESS`

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

Community arrival:
`14:00 CDMX`

Venue:
`Wingstop Condesa · CDMX`

Registration:
`PASS · USER-CONFIRMED CURRENT`

Registration URL:
`https://share.forms.app/form/6a96032ee64cd5f15d1688aa`

Maps:
`PASS · WINGSTOP CONDESA PLACE ID VERIFIED · GOOGLE MAPS SEARCH URL CONFIGURED`

Calendar:
`PASS · PUBLIC PMX CALENDAR ACTIVE · WEEK 1 EVENT CREATED`

Calendar name:
`PACKERS MÉXICO · Game Days 2026–27`

Calendar event Hub URL:
`https://packersmexico.github.io/`

GoPackGo MX:
`PASS · YOUTUBE DESTINATION ACTIVE`

GoPackGo destination:
`https://www.youtube.com/@gopackgomx6092`

Social destinations:
- `TikTok · https://www.tiktok.com/@packers_mx`
- `Facebook · https://www.facebook.com/gopackgomx/`
- `Instagram · https://www.instagram.com/packers_mx/`
- `X · https://x.com/Packers_Mx`
- `YouTube · https://www.youtube.com/@gopackgomx6092`

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

Analytics implementation:
`UNCHANGED DURING ORG MIGRATION / SOCIAL ACTIVATION`

Taxonomy:
`UNCHANGED`

## IMPLEMENTATION

Conditional modules:
`PROMO ON/OFF · SPECIAL ON/OFF READY`

Responsive:
`≤767 one column / 21px margin`
`768–1099 one column wide / 34px margin`
`≥1100 61.8/38.2 / 89px margin / 1262px max width`

Active destinations:
`REGISTRO · MAPS · CALENDARIO · GOPACKGO MX · FACEBOOK · INSTAGRAM · X · TIKTOK · YOUTUBE`

## QA

JavaScript syntax:
`PASS · node --check`

Figma contract translation:
`PASS · HTML/CSS/JS IMPLEMENTED`

GitHub Pages deploy:
`PASS · COMPLETED · SUCCESS`

Real browser:
`PASS · HUB LOAD CONFIRMED ON https://packersmexico.github.io/`

Desktop functional inspection:
`PASS OPERATIVO · NO CLIPPING/OVERFLOW OBSERVED · CTA/MAPS/CALENDAR WORKING`

Mobile 390×844:
`PENDING FORMAL FINAL QA`

Desktop 1440×900:
`PENDING FORMAL FINAL QA AGAINST FIGMA REFERENCE`

Primary CTA:
`PASS · FORMS.APP CURRENT`

Maps:
`PASS · VERIFIED WINGSTOP CONDESA DESTINATION`

Calendar:
`PASS · PUBLIC CALENDAR DESTINATION WORKING`

Social / GoPackGo:
`CONFIGURED · PUBLIC DEPLOY PASS · CLICK QA PENDING`

Promo OFF:
`PASS · ZERO RESERVED GAP`

Special OFF:
`PASS · ZERO RESERVED GAP`

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

### Non-blocking partner asset hold
`Wingstop annual master HQ and RETURN 02 photography remain pending`

Impact:
`Partner and hero slots remain modular/replacement-safe.`

## NEXT ACTION

`MATERIALIZE PMX HORIZONTAL V1.1 EXACT ASSET`

Then:
`RUN FINAL 390×844 + 1440×900 VISUAL/FUNCTIONAL QA`

Verify:
`REGISTRO · MAPS · CALENDAR · SOCIAL · GOPACKGO · UTM PRESERVATION · GA4 EVENTS · CONSOLE`

Do not declare final technical PASS until mobile and desktop reference QA are closed.

## LAST RELEVANT CHANGE

`feat: activate PMX social and GoPackGo links`

Commit:
`5f1d71da7592c6e4891a60ea2d7cb98a8ee43b4c`
