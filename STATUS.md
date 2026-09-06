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

`CORE HUB TECHNICAL PASS · GA4 PASS · CALENDAR 2026 IMPLEMENTED IN SOURCE · PUBLIC GOOGLE CALENDAR COMPLETE · SOCIAL FOOTER 5/5 · SPECIAL THEMES/UNIFORMS MAPPED · CALENDAR PUBLIC BROWSER QA PENDING · FIGMA CALENDAR VISUAL FAMILY CONNECTOR HOLD · 03.5 ASSET PACKAGE PENDING · EXTERNAL FORM DEPENDENCY`

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

Social footer:
`PASS · 5/5 DESTINATIONS`
- Instagram
- X
- Facebook
- TikTok
- YouTube

Social click tracking:
`CLICK_SOCIAL · PRESERVED TAXONOMY`

Hub integration:
- root Hub navigation now labels and routes `CALENDARIO 2026` to `/calendario/`
- same permanent root Hub URL remains unchanged

## SPECIAL THEMES / UNIFORM METADATA

Mapped in calendar source:
- W3 · Alumni Weekend / Home Opener
- W5 · NFL Rivalries · Packers Rivalries uniform CONFIRMED
- W6 · Packers Vs. Cancer
- W8 · Bob Harlan Tribute
- W10 · Salute to Service
- W12 · Thanksgiving Eve
- W14 · 1923 Classic + Walter Payton Man of the Year · Packers 1923 Classic uniform CONFIRMED
- W15 · Inspire Change
- W16 · Christmas Day · Bears Rivalries uniform CONFIRMED; no Packers special uniform inferred
- W17 · NFL Play 60
- W18 · Fan Appreciation · day/time TBD

Visual-asset rule:
`METADATA MAY DISPLAY · TEAM/UNIFORM VISUALS REQUIRE 03.5 RETURN BEFORE PRODUCTION USE`

## PUBLIC GOOGLE CALENDAR

Calendar:
`PACKERS MÉXICO · Game Days 2026–27`

Calendar ID:
`e3c36567e14e670e73ac31b8e324075e9cc858f916b114d8dfd58d0245424692@group.calendar.google.com`

State:
`PASS · COMPLETE SEASON AGENDA CREATED`

Coverage:
- Week 1 existing Game Day event retained
- Weeks 2–10 created
- Week 11 BYE marker created
- Weeks 12–17 created
- Week 18 created as transparent Jan 9–10 official scheduling window marker with `FECHA/HORA TBD`

Every game event:
- uses `America/Mexico_City`
- points back to PMX Hub with tracked URL
- points to full Season Calendar page with tracked URL
- is public and transparent/non-blocking
- uses Wingstop Condesa as PMX Game Day location where applicable
- carries special theme/uniform metadata when confirmed
- includes independent-brand disclaimer

Tracking convention from Google Calendar:
- `utm_source=google_calendar`
- `utm_medium=calendar_event`
- `utm_campaign=pmx_2026_schedule`
- `utm_content=w##_rival`

Week 18 note:
`Calendar event intentionally spans Jan 9–10 as a placeholder window and MUST be updated when NFL/Packers confirms exact day/time/network.`

## CALENDAR ANALYTICS

Existing taxonomy preserved. No new event name introduced.

Calendar page configuration:
- `gameId = PMX-SEASON-2026`
- `hubVersion = calendar-v1`
- Measurement ID: `G-QEN5F5YY14`

Existing event usage:
- page load → `HUB_VIEW`
- Google Calendar CTA → `CLICK_CALENDAR`
- footer social clicks → `CLICK_SOCIAL`

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
- footer now contains all five current PMX social destinations
- confirmed special-theme/uniform metadata is rendered as text only until 03.5 asset return

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

## 03.5 · REQUIRED SEASON VISUAL PACKAGE

State:
`PENDING HANDOFF / RETURN`

Request scope:
- official/traceable opponent logo asset for every unique 2026 opponent
- Packers Rivalries official visual/uniform references for W5
- Packers 1923 Classic + leather-look helmet official visual references for W14
- Bears Rivalries official visual/uniform reference for W16
- official theme visuals only where useful and licensable/usable under 03.5 rules

03.5 must return per asset:
- ID / normalized filename
- exact source URL
- asset URL when available
- author/credit when applicable
- context and subject identification
- rights/authorization state
- restrictions
- recommended usage

No pseudo-logo, redraw, recolor, watermark removal, or AI recreation may substitute for a missing official asset.

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

1. `Run exact public-browser QA on /calendario/ at 390×844 and 1440×900.`
2. `Verify calendar HUB_VIEW + CLICK_CALENDAR + CLICK_SOCIAL in GA4 while classifying QA traffic separately.`
3. `Send 03.5 season visual-package request and wait for official/traceable asset return.`
4. `Resume Figma Feed + Story build when Figma connector is reachable.`
5. `After calendar browser QA PASS, use /calendario/ as a shareable acquisition destination.`
6. `Monitor official NFL/Packers flex-schedule changes and update source + Google Calendar once changes occur.`

## LAST RELEVANT CHANGE

`Calendar footer expanded to Instagram/X/Facebook/TikTok/YouTube with CLICK_SOCIAL tracking; special themes/uniform metadata added; public Google Calendar now contains the complete 2026 season agenda including BYE and Week 18 TBD window, with tracked links back to the PMX Hub and Season Calendar.`
