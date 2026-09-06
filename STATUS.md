# STATUS.md

## PROJECT

Project: `PMX DIGITAL HUB`

Partnership ID: `PMX-PART-2026-WINGSTOP-COND-001`

Repository: `packersmexico/packersmexico.github.io`

Public Hub: `https://packersmexico.github.io/`

Season Calendar route: `https://packersmexico.github.io/calendario/`

## CURRENT PHASE

`FASE 2C · HUB EXPANSION · SEASON CALENDAR 2026`

## STATUS

`CORE HUB TECHNICAL PASS · GA4 PASS · CALENDAR 2026 IMPLEMENTED IN SOURCE · CALENDAR PUBLIC BROWSER QA PENDING · FIGMA CALENDAR VISUAL FAMILY CONNECTOR HOLD · EXTERNAL FORM DEPENDENCY`

## CORE HUB · WEEK 1

- Game ID: `PMX-WS-2026-W01`
- Matchup: `Packers @ Minnesota Vikings`
- Date: `DOM 13 SEP 2026`
- Community arrival: `14:00 CDMX`
- Kickoff: `14:25 CDMX`
- Venue: `Wingstop Condesa · CDMX`
- Public wording LOCKED: `Casa Oficial de Packers en CDMX`
- Registration: `https://share.forms.app/form/6a96032ee64cd5f15d1688aa`
- Promo: `OFF`
- Special: `OFF`

Core Hub exact browser QA already completed:
- `390×844 = PASS`
- `1440×900 = PASS`

These prior PASS results apply to the core Hub before the Season Calendar route was added and are not downgraded by the new extension.

## SEASON CALENDAR 2026 EXTENSION

Implementation state:
`SOURCE IMPLEMENTED · PUBLIC BROWSER QA PENDING`

Route:
`/calendario/`

Source of truth:
`Green Bay Packers · Packers announce 2026 schedule`

Official-source facts represented:
- `17` regular-season games
- `9` home
- `8` road
- `6` primetime, subject to flex scheduling
- `Week 11 = BYE`
- `Week 18 vs Detroit = Saturday Jan 9 or Sunday Jan 10, 2027 · day/time/network TBD after Week 17`
- displayed kickoff times converted to `America/Mexico_City / CDMX`

Calendar capabilities:
- next-game detection using CDMX date
- full Week 1–18 list
- `TODOS / CASA / VISITA / PRIMETIME` filters
- mobile-first responsive layout
- share control using Web Share API with clipboard/prompt fallbacks
- public Google Calendar CTA
- return-to-Hub CTA
- canonical / OG / X metadata
- `sitemap.xml`
- `robots.txt`
- explicit independent-brand disclaimer
- no opponent NFL logos used; avoids unvalidated/unmaterialized asset substitutions

Hub integration:
- root Hub navigation now labels and routes `CALENDARIO 2026` to `/calendario/`
- same permanent root Hub URL remains unchanged

## CALENDAR ANALYTICS

Existing taxonomy preserved. No new event name introduced.

Calendar page configuration:
- `gameId = PMX-SEASON-2026`
- `hubVersion = calendar-v1`
- Measurement ID: `G-QEN5F5YY14`

Existing event usage:
- page load → `HUB_VIEW`
- Google Calendar CTA → `CLICK_CALENDAR`

Share URL carries:
- `utm_source=calendar`
- `utm_medium=share`
- `utm_campaign=pmx_2026_schedule`
- `utm_content=season_calendar`

No `REGISTRO_CONFIRMADO` event is fired.

## SOURCE / CODE QA · CALENDAR

Result:
`PASS · SOURCE STRUCTURE REVIEW`

Verified:
- HTML loads shared PMX styles + calendar styles
- authoritative PMX Horizontal V1.1 SVG is reused from repository asset
- Brand Book colors and Bebas Neue / Montserrat hierarchy are inherited/applied
- JavaScript references only IDs present in calendar markup
- current-date logic uses `America/Mexico_City`
- BYE is excluded from next-game selection
- Week 18 remains unresolved instead of inventing a kickoff
- filters operate from explicit HOME/AWAY/PRIME state
- tracking preserves existing event taxonomy
- conditional share fallbacks exist
- internal links preserve incoming UTM attribution

Limitation:
`This is source-level QA, not a public-browser PASS for the newly created /calendario/ route.`

## FIGMA · SEASON CALENDAR VISUAL FAMILY

Planned family:
`PMX · SEASON CALENDAR 2026 · VISUAL FAMILY V1.0`

Scope:
- Feed `1080×1350`
- Story `1080×1920`
- CTA to Season Calendar route
- no opponent logos until exact 03.5-approved assets exist

Design-system discovery completed:
- authoritative Brand Book V5.1 library available in target file
- PMX Horizontal V1.1 component resolved
- Field Dark / Lambeau Green / Cheese Gold / Cream variables resolved
- Bebas Neue + Montserrat PMX text styles resolved

Write state:
`HOLD · FIGMA MCP NETWORK CONNECTION FAILED`

This is a connector/network failure, not a permissions failure. Figma account was confirmed with Full seat on `Ibrahim · Design Lab`. No Figma canvas PASS is claimed and no fake completion is recorded.

## IDENTITY / ASSETS

PMX Horizontal V1.1:
`PASS · AUTHORITATIVE SVG COMMITTED AND ACTIVE`

Repository path:
`assets/PMX_LOGO_HISTORICO_HORIZONTAL_CANVA_MASTER_V1.1.svg`

Wingstop partner logo:
`PASS PROVISIONAL · SOURCE-VERIFIED JPG`

Repository path:
`assets/WS-LOGO-01.jpg`

Calendar opponent identities:
`NOT USED · NO PSEUDO-LOGOS / NO UNVALIDATED NFL ASSET SUBSTITUTION`

## ANALYTICS CORE

GA4:
`ACTIVE · LIVE CORE QA PASS · CUSTOM DIMENSIONS PASS · STREAM METADATA PASS`

Measurement ID:
`G-QEN5F5YY14`

Web Stream:
- Name: `PMX Digital Hub`
- URL: `https://packersmexico.github.io`
- Data collection: `ACTIVE`

Custom dimensions:
`8/8 · EVENT SCOPE`

Formal QA cutoff:
`2026-09-05T11:55:39-06:00`

Baseline rule:
- `≤ 11:55:39 = TEST / SETUP · EXCLUDE FROM CAMPAIGN PERFORMANCE`
- `> 11:55:39 = ELIGIBLE FOR LIVE CAMPAIGN PERFORMANCE` only when traffic is not internal QA

Events preserved:
`HUB_VIEW · CLICK_REGISTRO · CLICK_MAPS · CLICK_PROMO · CLICK_CALENDAR · CLICK_GOPACKGO · CLICK_SOCIAL · QR_OPEN`

Integrity:
`CLICK_REGISTRO ≠ REGISTRO_CONFIRMADO ≠ ASISTENCIA_MEDIDA`

## EXTERNAL FORMS.APP DEPENDENCY

The external registration form is not owned or editable by PMX.

State:
`EXTERNAL DEPENDENCY · NO PMX EDIT ACCESS`

Known conflicts on external surface:
- broader official-sounding wording
- 14:00 shown without clear 14:25 kickoff distinction
- reservation-like wording

PMX-controlled surfaces remain locked to:
`Casa Oficial de Packers en CDMX`

PMX-controlled CTA remains:
`CONFIRMA TU ASISTENCIA`

Governance treatment remains with `00` / partnership contact.

## NEXT ACTION

1. `Wait for GitHub Pages deployment of /calendario/.`
2. `Run exact public-browser QA on /calendario/ at 390×844 and 1440×900.`
3. `Verify calendar HUB_VIEW + CLICK_CALENDAR in GA4 while classifying QA traffic separately.`
4. `Resume Figma Feed + Story build when Figma connector is reachable.`
5. `After calendar browser QA PASS, use /calendario/ as a shareable acquisition destination.`
6. `Monitor official NFL/Packers flex-schedule changes and update one source file when changes occur.`

## LAST RELEVANT CHANGE

`Season Calendar 2026 source implementation completed and linked from the Hub. Official 2026 schedule facts and CDMX conversions are represented without opponent logos. Public browser QA for the new calendar route and Figma visual-family production remain open.`
