# STATUS.md

## PROJECT

Project: `PMX DIGITAL HUB`

Partnership ID: `PMX-PART-2026-WINGSTOP-COND-001`

Repository: `packersmexico/packersmexico.github.io`

Public Hub: `https://packersmexico.github.io/`

## CURRENT PHASE

`FASE 2B · PUBLIC QA + EXTERNAL COPY CLOSEOUT`

## STATUS

`ORG MIGRATION PASS · PAGES ACTIVE · WEEK 1 CONFIGURED · PMX/WINGSTOP ASSETS INTEGRATED · SOURCE/PARITY QA PASS · SCREENSHOT PERCEPTUAL QA PASS · GA4 STREAM METADATA PASS · EXTERNAL FORM DEPENDENCY / EXACT BROWSER QA HOLDS ONLY`

## INFRASTRUCTURE

- GitHub Pages: `ACTIVE`
- Organization: `packersmexico`
- Default branch: `main`
- Architecture: `STATIC HTML + CSS + JAVASCRIPT · NO BUILD SYSTEM`
- Root URL: `https://packersmexico.github.io/`

## WEEK 1

- Game ID: `PMX-WS-2026-W01`
- Matchup: `Packers @ Minnesota Vikings`
- Date: `DOM 13 SEP 2026`
- Community arrival: `14:00 CDMX`
- Kickoff: `14:25 CDMX`
- Venue: `Wingstop Condesa · CDMX`
- Public wording LOCKED: `Casa Oficial de Packers en CDMX`
- Registration: `https://share.forms.app/form/6a96032ee64cd5f15d1688aa`
- Maps: `PASS`
- Public calendar: `PASS`
- Calendar Week 1 event: `PASS · 14:00 ARRIVAL / 14:25 KICKOFF`
- Promo: `OFF`
- Special: `OFF`

## SOCIAL / DESTINATIONS

- Facebook: `https://www.facebook.com/gopackgomx/`
- Instagram: `https://www.instagram.com/packers_mx/`
- X: `https://x.com/Packers_Mx`
- TikTok: `https://www.tiktok.com/@packers_mx`
- YouTube: `https://www.youtube.com/@gopackgomx6092`
- GoPackGo MX: `YouTube · https://www.youtube.com/@gopackgomx6092`

State: `PASS · CONFIGURED AND DEPLOYED`

## IDENTITY / ASSETS

PMX Horizontal V1.1:
`✅ PASS · AUTHORITATIVE SVG COMMITTED AND ACTIVE IN HEADER`

Repository path:
`assets/PMX_LOGO_HISTORICO_HORIZONTAL_CANVA_MASTER_V1.1.svg`

Verification:
- `size = 682121 bytes`
- `SHA-256 = 8407762a98552a7e7056aa687a1b259cc386fd2fc8fed5c6833dab5a937eff6f`
- `MD5 = df6e08b10194bda73d07003dcc0d2a8a`

Wingstop partner logo:
`✅ PASS PROVISIONAL · SOURCE-VERIFIED JPG COMMITTED AND ACTIVE IN PARTNER SLOT`

Repository path:
`assets/WS-LOGO-01.jpg`

Constraint:
`MASTER FORMAT HOLD · replace only when official HQ SVG/PNG transparent arrives; do not reconstruct/vectorize/recolor.`

NFL-MIN-LOGO-01:
`PASS DOCUMENTAL · MATERIALIZATION HOLD ONLY · NON-BLOCKING`

Wingstop Condesa photography:
`RETURN 02 PENDING · NON-BLOCKING`

## ANALYTICS

GA4: `ACTIVE · LIVE CORE QA PASS · CUSTOM DIMENSIONS PASS · STREAM METADATA PASS`

Measurement ID: `G-QEN5F5YY14`

Web Stream:
- Name: `PMX Digital Hub`
- URL: `https://packersmexico.github.io`
- Metadata update: `PASS · USER SCREENSHOT VERIFIED 2026-09-05`
- Data collection: `ACTIVE`

Custom dimensions: `8/8 · EVENT SCOPE`

Formal QA cutoff: `2026-09-05T11:55:39-06:00`

Baseline rule:
- `≤ 11:55:39 = TEST / SETUP · EXCLUDE FROM CAMPAIGN PERFORMANCE`
- `> 11:55:39 = ELIGIBLE FOR LIVE CAMPAIGN PERFORMANCE`

Events preserved:
`HUB_VIEW · CLICK_REGISTRO · CLICK_MAPS · CLICK_PROMO · CLICK_CALENDAR · CLICK_GOPACKGO · CLICK_SOCIAL · QR_OPEN`

`REGISTRO_CONFIRMADO = HOLD · DO NOT FIRE P0`

Integrity:
`CLICK_REGISTRO ≠ REGISTRO_CONFIRMADO ≠ ASISTENCIA_MEDIDA`

Analytics Sheet:
`HUB_MASTER_URL migrated to https://packersmexico.github.io/ · tracking destinations synchronized with live Hub`

## IMPLEMENTATION / FIGMA PARITY QA

Automated source-level verification run after final Figma handoff and asset integration:

`PASS · 25/25 CONTRACT CHECKS`

Verified in implementation source:
- `Field Dark #081D13`
- `Lambeau Green #123B31`
- `Gold #FFC62F`
- `Cream #F2E8CF`
- responsive margins `21 / 34 / 89`
- max content width `1262`
- PMX logo geometry `240×60 mobile / 320×80 desktop`
- desktop hero geometry `780 + 34 + 448 = 1262`
- mobile visual slot reference `112 px`
- desktop visual slot reference `448×540`
- `focus-visible = 2 px Gold / 4 px offset`
- conditional modules use `display:none` when OFF and reserve zero gap
- DATA PENDING collapses unavailable visual asset silently
- CTA hierarchy `CONFIRMA TU ASISTENCIA → CÓMO LLEGAR`
- locked venue wording present
- Week 1 configuration present
- kickoff `14:25`
- Promo `OFF`
- Special `OFF`

JavaScript syntax / local source checks:
`PASS`

Note:
`This is implementation-source/parity QA, not a substitute for the required final public browser inspection at exact viewports.`

## SCREENSHOT PERCEPTUAL QA · 2026-09-05

User-provided screenshots reviewed:
- External forms.app view: `927×913`
- Public Hub view: `957×925`

Public Hub perceptual result:
`PASS · NO P0 VISUAL DEFECT OBSERVED IN PROVIDED SCREENSHOT`

Observed as correct in screenshot:
- authoritative PMX horizontal identity visible
- Week 1 matchup/date/kickoff hierarchy clear
- `Casa Oficial de Packers en CDMX` wording correct
- primary CTA dominates over Maps
- Calendar / Social / GoPackGo destinations visible without card clutter
- affiliation disclaimer visible
- Wingstop partner mark separated from PMX identity
- Promo OFF / Special OFF reserve no visible space
- no obvious clipping, overlap, collision or unreadable essential text

Important limitation:
`957×925 is not an exact required QA viewport; exact 390×844 and 1440×900 browser validation remains open.`

External forms.app result:
`FAIL · P0 COPY / POSITIONING HOLD CONFIRMED · EXTERNAL DEPENDENCY`

Screenshot confirms the external form currently contains:
- broader official-sounding wording referring to `la casa oficial de los Green Bay Packers en México`
- only `Hora: 14:00 hrs`, without distinguishing community arrival from `14:25 CDMX` kickoff
- reservation-like language including `aparta tu lugar` / `reserva`

Ownership/access note:
`PMX does not control or have edit access to this forms.app form. Correction must be requested from the external form owner / partnership contact; do not treat this as a Hub-code task.`

## PUBLIC QA

- Org migration: `PASS`
- Root URL: `PASS`
- PMX V1.1 header identity: `IMPLEMENTED`
- Wingstop partner identity: `IMPLEMENTED · PROVISIONAL ASSET`
- Registration destination: `PASS`
- Maps destination: `PASS`
- Calendar destination: `PASS`
- Social destinations: `DEPLOYED`
- GoPackGo destination: `DEPLOYED`
- Promo OFF: `PASS · ZERO RESERVED GAP`
- Special OFF: `PASS · ZERO RESERVED GAP`
- Internal implementation labels exposed publicly: `FIXED`
- Pending visual green slot in DATA PENDING: `FIXED · COLLAPSES SILENTLY`
- Canonical / OG / X metadata: `IMPLEMENTED`
- Figma implementation contract source parity: `PASS · 25/25`
- User screenshot perceptual QA: `PASS · 957×925 · NON-EXACT VIEWPORT`
- GA4 Web Stream URL metadata: `PASS · https://packersmexico.github.io`
- Exact final `390×844` browser QA: `PENDING`
- Exact final `1440×900` browser QA: `PENDING`

QA environment note:
`The current execution runtime blocks browser navigation, including localhost/file rendering, so an exact browser PASS was not fabricated. Final visual browser inspection remains required.`

## REMAINING HOLDS

### P0 · External forms.app wording · EXTERNAL DEPENDENCY
The external registration form is not owned/editable by PMX.

Required request to external owner / partnership contact:
- use `Casa Oficial de Packers en CDMX`
- remove broader official-sounding wording such as `La casa oficial de los Green Bay Packers en México`
- distinguish `Llegada comunidad: 14:00 CDMX` from `Kickoff: 14:25 CDMX`
- avoid implying a guaranteed table reservation

PMX-controlled CTA remains:
`CONFIRMA TU ASISTENCIA`

### P0 · Exact final browser QA
Run real-browser inspection at:
- `390×844`
- `1440×900`

Validate logo sizing, partner hierarchy, mobile readability, overflow/clipping, links and final click events.

### Non-blocking asset holds
- `NFL-MIN-LOGO-01 SVG materialization`
- `Wingstop HQ master-format asset`
- `Wingstop Condesa photo RETURN 02`

## NEXT ACTION

1. `Run final 390×844 + 1440×900 real-browser QA on the public Hub.`
2. `Verify final click events in GA4, classifying QA traffic separately.`
3. `Request external forms.app correction from the form owner / partnership contact; no PMX edit access.`
4. `If exact browser QA + click-event QA PASS, return technical implementation PASS; external form wording remains separately escalated.`
5. `00/05 decide publication gate treatment for the unresolved external-form dependency.`

## LAST RELEVANT CHANGE

`GA4 Web Stream metadata updated to https://packersmexico.github.io and verified by user screenshot; Measurement ID unchanged; forms.app reclassified as external dependency without PMX edit access.`
