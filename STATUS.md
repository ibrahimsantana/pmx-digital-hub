# STATUS.md

## PROJECT

Project: `PMX DIGITAL HUB`

Partnership ID: `PMX-PART-2026-WINGSTOP-COND-001`

Repository: `packersmexico/packersmexico.github.io`

Public Hub: `https://packersmexico.github.io/`

## CURRENT PHASE

`FASE 2B · PUBLIC QA + ASSET CLOSEOUT`

## STATUS

`ORG MIGRATION PASS · PAGES ACTIVE · WEEK 1 CONFIGURED · FINAL REPO ASSET / EXTERNAL COPY / EXACT QA HOLDS ONLY`

## INFRASTRUCTURE

- GitHub Pages: `ACTIVE`
- Organization: `packersmexico`
- Default branch: `main`
- Architecture: `STATIC HTML + CSS + JAVASCRIPT · NO BUILD SYSTEM`
- Latest verified code deploy: `64dbe6e0f66f16bcf4764bd47c4ae60a251d75d9 · SUCCESS`

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

Authoritative PMX logo:
`PMX_LOGO_HISTORICO_HORIZONTAL_CANVA_MASTER_V1.1.svg`

Authoritative Drive asset:
`fileId 1oF6Fkw7f32j3DGd7ftpU_0uI7Bm50tLI · image/svg+xml`

Authoritative Figma component:
`fileKey z30v1pEwZPp7F4sV7JaExJ · node 75:4098 · PMX/Logo/Current/Horizontal/V1.1`

Exact SVG materialization:
`PASS · ORIGINAL DRIVE BYTES RECOVERED IN PROJECT RUNTIME`

Verification:
- `size = 682121 bytes`
- `SHA-256 = 8407762a98552a7e7056aa687a1b259cc386fd2fc8fed5c6833dab5a937eff6f`
- `MD5 = df6e08b10194bda73d07003dcc0d2a8a`

Repository commit:
`HOLD · GitHub connector has no binary/local-file upload action for repository contents`

Public safe fallback until repo upload:
`TEXT BRAND FALLBACK ONLY · NO FAKE LOGO · NO INTERNAL "ASSET PENDING" LABEL`

NFL-MIN-LOGO-01:
`PASS DOCUMENTAL · MATERIALIZATION HOLD ONLY · NON-BLOCKING`

WS-LOGO-01:
`SOURCE-VERIFIED TECHNICAL ASSET · MASTER FORMAT HOLD`

Wingstop Condesa photography:
`RETURN 02 PENDING · NON-BLOCKING`

## ANALYTICS

GA4: `ACTIVE · LIVE CORE QA PASS · CUSTOM DIMENSIONS PASS`

Measurement ID: `G-QEN5F5YY14`

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

## PUBLIC QA

- Org migration: `PASS`
- Root URL: `PASS`
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
- Exact final `390×844` browser QA: `PENDING AFTER LATEST DEPLOY`
- Exact final `1440×900` browser QA: `PENDING AFTER LATEST DEPLOY`

## REMAINING HOLDS

### P0 · Commit exact PMX logo to repo
Original authoritative bytes are now materialized and checksum-verified. Remaining step is repository upload only; do not re-export or reconstruct.

### P0 · External forms.app wording
Verify/correct the external form to use the locked public wording:
`Casa Oficial de Packers en CDMX`

If the form still says a broader/official-sounding phrase, publication remains on HOLD until corrected.

### P0 · GA4 stream metadata housekeeping
Update the GA4 Web Stream site URL from the previous personal GitHub Pages address to:
`https://packersmexico.github.io/`

Measurement and event collection remain active because the Measurement ID is unchanged.

### Non-blocking asset holds
- `NFL-MIN-LOGO-01 SVG materialization`
- `Wingstop HQ master-format asset`
- `Wingstop Condesa photo RETURN 02`

## NEXT ACTION

1. `Upload exact PMX Horizontal V1.1 SVG bytes to assets/ in GitHub and replace text fallback.`
2. `Verify/correct forms.app wording.`
3. `Update GA4 Web Stream URL metadata to https://packersmexico.github.io/.`
4. `Run final 390×844 + 1440×900 real-browser QA.`
5. `Verify final click events in GA4, classifying QA traffic separately.`
6. `If all P0 checks PASS → handoff to 05.`

## LAST RELEVANT CHANGE

`8d5224b2f7c71830f9ee0dfe43a1b4b3f80cf54f · feat: add canonical and social metadata for PMX Hub`
