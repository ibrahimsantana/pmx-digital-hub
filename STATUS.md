# STATUS.md

## PROJECT

Project: `PMX DIGITAL HUB`

Partnership ID: `PMX-PART-2026-WINGSTOP-COND-001`

Repository: `packersmexico/packersmexico.github.io`

Public Hub: `https://packersmexico.github.io/`

## CURRENT PHASE

`FASE 2B · TECHNICAL CLOSEOUT / EXTERNAL DEPENDENCY ESCALATION`

## STATUS

`ORG MIGRATION PASS · PAGES ACTIVE · WEEK 1 CONFIGURED · PMX/WINGSTOP ASSETS INTEGRATED · FIGMA PARITY PASS · GA4 PASS · EXACT BROWSER QA PASS · EXTERNAL FORM DEPENDENCY ONLY`

## WEEK 1

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

## IDENTITY / ASSETS

PMX Horizontal V1.1:
`PASS · AUTHORITATIVE SVG COMMITTED AND ACTIVE IN HEADER`

Repository path:
`assets/PMX_LOGO_HISTORICO_HORIZONTAL_CANVA_MASTER_V1.1.svg`

Wingstop partner logo:
`PASS PROVISIONAL · SOURCE-VERIFIED JPG COMMITTED AND ACTIVE IN REPLACEABLE PARTNER SLOT`

Repository path:
`assets/WS-LOGO-01.jpg`

Constraint:
`MASTER FORMAT HOLD · replace only when official HQ SVG/PNG transparent arrives; do not reconstruct/vectorize/recolor.`

Non-blocking asset holds:
- `NFL-MIN-LOGO-01 SVG materialization`
- `Wingstop HQ master-format asset`
- `Wingstop Condesa photo RETURN 02`

## ANALYTICS

GA4: `ACTIVE · LIVE CORE QA PASS · CUSTOM DIMENSIONS PASS · STREAM METADATA PASS`

Measurement ID: `G-QEN5F5YY14`

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
- `> 11:55:39 = ELIGIBLE FOR LIVE CAMPAIGN PERFORMANCE`

Events preserved:
`HUB_VIEW · CLICK_REGISTRO · CLICK_MAPS · CLICK_PROMO · CLICK_CALENDAR · CLICK_GOPACKGO · CLICK_SOCIAL · QR_OPEN`

`REGISTRO_CONFIRMADO = HOLD · DO NOT FIRE P0`

Integrity:
`CLICK_REGISTRO ≠ REGISTRO_CONFIRMADO ≠ ASISTENCIA_MEDIDA`

## FIGMA / IMPLEMENTATION PARITY

Source-level contract QA:
`PASS · 25/25`

Verified:
- Field Dark `#081D13`
- Lambeau Green `#123B31`
- Gold `#FFC62F`
- Cream `#F2E8CF`
- responsive margins `21 / 34 / 89`
- max content width `1262`
- PMX logo geometry `240×60 mobile / 320×80 desktop`
- desktop hero geometry `780 + 34 + 448 = 1262`
- `focus-visible = 2 px Gold / 4 px offset`
- conditional OFF modules reserve zero gap
- DATA PENDING collapses missing visual silently
- CTA hierarchy `CONFIRMA TU ASISTENCIA → CÓMO LLEGAR`
- locked venue wording present
- Week 1 configuration present
- kickoff `14:25`
- Promo `OFF`
- Special `OFF`

## EXACT BROWSER QA · USER-PROVIDED DEVTOOLS EVIDENCE

### Mobile
Viewport configured in Chrome DevTools:
`390×844`

Result:
`PASS`

Observed:
- PMX horizontal identity readable and correctly prioritized
- Week 1 hierarchy readable without zoom
- matchup/date/kickoff/sede visible
- primary CTA dominates over Maps
- secondary resources remain readable
- social links and affiliation disclaimer visible
- Wingstop partner slot remains visually separate
- no visible clipping, collision, overflow or dead conditional-module gap
- console screenshot shows `No issues`

### Desktop
Viewport configured in Chrome DevTools:
`1440×900`

Result:
`PASS`

Evidence note:
Chrome DevTools was set to `Fit to window`, so the simulated 1440×900 viewport is visually scaled down inside the available browser workspace. This scaling is a DevTools preview behavior, not a CSS/layout defect.

Observed:
- full page remains contained
- desktop responsive state triggers correctly
- no visible overflow, clipping or collision
- PMX / Wingstop hierarchy remains separated
- console screenshot shows `No issues`

## PUBLIC QA RESULT

- Root URL: `PASS`
- PMX V1.1 identity: `PASS`
- Wingstop provisional identity: `PASS`
- Registration destination: `PASS`
- Maps destination: `PASS`
- Calendar destination: `PASS`
- Social destinations: `PASS`
- GoPackGo destination: `PASS`
- Promo OFF: `PASS · ZERO RESERVED GAP`
- Special OFF: `PASS · ZERO RESERVED GAP`
- Internal implementation labels exposed publicly: `FIXED`
- DATA PENDING missing visual behavior: `PASS`
- Canonical / OG / X metadata: `PASS`
- Figma implementation parity: `PASS · 25/25`
- Exact mobile `390×844`: `PASS`
- Exact desktop `1440×900`: `PASS`
- GA4 Web Stream metadata: `PASS`

Technical implementation result:
`PASS · READY FOR 05 SUBJECT TO GOVERNANCE TREATMENT OF EXTERNAL FORM DEPENDENCY`

## EXTERNAL FORMS.APP DEPENDENCY

The external registration form is not owned or editable by PMX.

Current screenshot confirms external copy that conflicts with PMX locks:
- broader official-sounding wording equivalent to `La casa oficial de los Green Bay Packers en México`
- only `Hora: 14:00 hrs`, without distinguishing community arrival from `14:25 CDMX` kickoff
- reservation-like wording such as `aparta tu lugar` / `reserva`

PMX-controlled surfaces remain compliant:
`Casa Oficial de Packers en CDMX`

PMX-controlled CTA remains:
`CONFIRMA TU ASISTENCIA`

Required governance treatment:
`EXTERNAL DEPENDENCY · NO PMX EDIT ACCESS · ESCALATE TO 00 FOR PUBLICATION-GATE DECISION / PARTNERSHIP REQUEST`

## NEXT ACTION

1. `Return technical implementation PASS to 00 / 05.`
2. `00 decides publication gate treatment for the external forms.app copy dependency.`
3. `If Direction allows publication with documented external dependency, 05 may proceed.`
4. `If Direction requires correction first, request it from the external form owner / partnership contact.`
5. `Continue to classify any additional QA traffic separately from campaign performance.`

## LAST RELEVANT CHANGE

`Exact Chrome DevTools QA completed at 390×844 and 1440×900: PASS. GA4 stream metadata PASS. Technical Hub implementation is ready for 05; only external forms.app governance dependency remains.`