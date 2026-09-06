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

`CORE HUB PATCH DEPLOYED · GA4 PASS · CALENDAR 2026 IMPLEMENTED · PUBLIC GOOGLE CALENDAR COMPLETE · SOCIAL 5/5 · SPECIAL THEMES/UNIFORMS MAPPED · 03.5 PROVENANCE PASS / MATERIALIZATION + FAMILY AUTHORIZATION HOLD · CALENDAR PUBLIC BROWSER QA PENDING · FIGMA CALENDAR FAMILY HOLD · EXTERNAL FORM DEPENDENCY`

## CORE HUB · WEEK 1

- Game ID: `PMX-WS-2026-W01`
- Matchup: `PACKERS @ VIKINGS`
- Weekly label: `WEEK 1 · SEASON OPENER`
- Date: `DOM 13 SEP 2026`
- Community arrival: `14:00 CDMX`
- Kickoff: `14:25 CDMX`
- Venue: `Wingstop Condesa · CDMX`
- Public wording LOCKED: `Casa Oficial de Packers en CDMX`
- Registration: `https://share.forms.app/form/6a96032ee64cd5f15d1688aa`
- Promo: `OFF`
- Special: `OFF`

Latest Hub UI patch:
- removed `AT`; away matchup now uses `@`
- home matchup remains `VS`
- Week/game-label language aligned with Calendar style (`WEEK 1 · SEASON OPENER`, future `HOME OPENER`, themes, etc.)
- removed redundant `REDES` navigation because social destinations already live in footer
- removed Wingstop partner logo/footer block
- venue relationship remains in hero only
- retained `CONFIRMA TU ASISTENCIA` + `CÓMO LLEGAR`
- retained `CALENDARIO 2026` + `GOPACKGO MX`
- social footer remains 5/5: Instagram, X, Facebook, TikTok, YouTube

Prior core Hub browser QA:
- `390×844 = PASS`
- `1440×900 = PASS`

Because the Hub UI was patched after those captures, a short visual recheck is required before treating the new layout as final browser PASS.

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
- share control
- public Google Calendar CTA
- return-to-Hub CTA
- canonical / OG / X metadata
- sitemap / robots
- independent-brand disclaimer

Social footer:
`PASS · 5/5 DESTINATIONS`
- Instagram
- X
- Facebook
- TikTok
- YouTube

Social click tracking:
`CLICK_SOCIAL · PRESERVED TAXONOMY`

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

## PUBLIC GOOGLE CALENDAR

Calendar:
`PACKERS MÉXICO · Game Days 2026–27`

Calendar ID:
`e3c36567e14e670e73ac31b8e324075e9cc858f916b114d8dfd58d0245424692@group.calendar.google.com`

State:
`PASS · COMPLETE SEASON AGENDA CREATED`

Coverage:
- Week 1 retained
- Weeks 2–10 created
- Week 11 BYE marker created
- Weeks 12–17 created
- Week 18 created as Jan 9–10 TBD window marker

Every game event:
- uses `America/Mexico_City`
- points to PMX Hub with tracked URL
- points to full Season Calendar with tracked URL
- is public and transparent/non-blocking
- carries special theme/uniform metadata when confirmed
- includes independent-brand disclaimer

Tracking convention:
- `utm_source=google_calendar`
- `utm_medium=calendar_event`
- `utm_campaign=pmx_2026_schedule`
- `utm_content=w##_rival`

## CALENDAR ANALYTICS

Existing taxonomy preserved. No new event name introduced.

Calendar page:
- `gameId = PMX-SEASON-2026`
- `hubVersion = calendar-v1`
- Measurement ID: `G-QEN5F5YY14`

Existing event usage:
- page load → `HUB_VIEW`
- Google Calendar CTA → `CLICK_CALENDAR`
- footer social clicks → `CLICK_SOCIAL`

Share URL:
- `utm_source=calendar`
- `utm_medium=share`
- `utm_campaign=pmx_2026_schedule`
- `utm_content=season_calendar`

No `REGISTRO_CONFIRMADO` event is fired.

## 03.5 · SEASON CALENDAR ASSET QA RETURN

Family:
`PMX · SEASON CALENDAR 2026 · VISUAL FAMILY V1.0`

03.5 state:
`HOLD PARCIAL · PROVENANCE PASS / MATERIALIZATION + AUTHORIZATION PENDING`

### Opponent logos

- `14/14 SOURCE PASS`
- unique rivals covered: MIN, NYJ, ATL, TB, CHI, DAL, DET, CAR, NE, LA, NO, BUF, MIA, HOU
- official NFL club-logo endpoints identified/validated
- `0/14 MATERIALIZED BY 03.5 RUNTIME`
- restriction: no redraw, recolor, distortion, pseudo-logo or improvised vectorization

### W5 · Packers Rivalries

Provenance PASS:
- `GB-RIV-2026-FULL-01`
- `GB-RIV-2026-HELMET-01`
- `GB-RIV-2026-JERSEY-01`

No isolated pants asset validated. Do not fabricate cutout.

### W14 · 1923 Classic

Provenance PASS:
- `GB-1923-2026-FULL-01`
- `GB-1923-2026-DETAIL-01`

No isolated pants asset validated. No AI/reconstruction of leather-look helmet.

### W16 · Bears Rivalries

Provenance PASS:
- `CHI-RIV-2026-FULL-01`
- `CHI-RIV-2026-HELMET-01`
- `CHI-RIV-2026-JERSEY-01`
- `CHI-RIV-2026-PANTS-01`

LOCK:
`BEARS RIVALRIES CONFIRMED FOR CHICAGO · DO NOT INFER PACKERS RIVALRIES W16`

### Themes

- Alumni Weekend → `TEXT ONLY / WAIT`
- Packers Vs. Cancer → 2025 asset only = `REFERENCE ONLY · DO NOT USE AS 2026 MASTER`
- Bob Harlan → contextual official photo source PASS; not W8 event-photo proof
- Salute to Service → provenance PASS
- Walter Payton MOY → provenance PASS; sponsor cannot be removed/rebuilt
- Inspire Change → provenance PASS
- NFL Play 60 → provenance PASS
- Fan Appreciation → `TEXT ONLY / WAIT`

### Authorization gate

Specific family authorization is not recorded as closed:
`⚪ NO SOLICITADA · USO EDITORIAL PROVISIONAL`

Therefore:
- provenance/context may be used for planning and text metadata
- visual assets are NOT released as final public production package yet
- 04 must not treat these URLs as final authorized/materalized assets
- family must be escalated to `00 · Dirección y Gobernanza` for explicit authorization decision

This follows the current workflow: 03.5 validates source/context/rights state; Dirección governs permissions/masters; 04 does not re-investigate or improvise assets.

## FIGMA · SEASON CALENDAR VISUAL FAMILY

Planned family:
`PMX · SEASON CALENDAR 2026 · VISUAL FAMILY V1.0`

Scope:
- Feed `1080×1350`
- Story `1080×1920`
- CTA to Season Calendar route

Design-system discovery completed:
- Brand Book V5.1 library available
- PMX Horizontal V1.1 component resolved
- Field Dark / Lambeau Green / Cheese Gold / Cream variables resolved
- Bebas Neue + Montserrat PMX styles resolved

Write state:
`HOLD · FIGMA MCP NETWORK CONNECTION FAILED`

No Figma canvas PASS is claimed.

## IDENTITY / ASSETS

PMX Horizontal V1.1:
`PASS · AUTHORITATIVE SVG COMMITTED AND ACTIVE`

Repository path:
`assets/PMX_LOGO_HISTORICO_HORIZONTAL_CANVA_MASTER_V1.1.svg`

Wingstop logo:
`REPOSITORY ASSET RETAINED · NO LONGER DISPLAYED IN CORE HUB FOOTER`

Opponent identities:
`PROVENANCE PASS · MATERIALIZATION + FAMILY AUTHORIZATION HOLD · NOT YET USED VISUALLY`

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

Events preserved:
`HUB_VIEW · CLICK_REGISTRO · CLICK_MAPS · CLICK_PROMO · CLICK_CALENDAR · CLICK_GOPACKGO · CLICK_SOCIAL · QR_OPEN`

Integrity:
`CLICK_REGISTRO ≠ REGISTRO_CONFIRMADO ≠ ASISTENCIA_MEDIDA`

## EXTERNAL FORMS.APP DEPENDENCY

State:
`EXTERNAL DEPENDENCY · NO PMX EDIT ACCESS`

Known conflicts:
- broader official-sounding wording
- 14:00 without clear 14:25 kickoff distinction
- reservation-like wording

PMX-controlled surfaces remain locked to:
`Casa Oficial de Packers en CDMX`

PMX CTA remains:
`CONFIRMA TU ASISTENCIA`

## NEXT ACTION

1. `Public-browser recheck of patched core Hub at mobile + desktop.`
2. `Public-browser QA of /calendario/ at 390×844 and 1440×900.`
3. `Escalate PMX · SEASON CALENDAR 2026 · VISUAL FAMILY V1.0 to 00 for explicit asset-family authorization.`
4. `After authorization + materialization, hand exact 03.5 assets to 04/Figma; no substitutions.`
5. `Verify calendar HUB_VIEW + CLICK_CALENDAR + CLICK_SOCIAL in GA4 with QA traffic classified separately.`
6. `Monitor NFL/Packers flex changes and update source + Google Calendar.`

## LAST RELEVANT CHANGE

`Core Hub cleaned to calendar-style language (@ / VS, WEEK + event label), redundant REDES nav and Wingstop footer logo removed. 03.5 returned provenance PASS for 14 opponent identities and W5/W14/W16 uniform visuals, but materialization and explicit Season Calendar family authorization remain HOLD.`
