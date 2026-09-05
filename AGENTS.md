# AGENTS.md

## 1 · PROJECT IDENTITY

Project: `PMX DIGITAL HUB`

Current P0:
`PACKERS MÉXICO × WINGSTOP CONDESA · 2026–27`

Partnership ID:
`PMX-PART-2026-WINGSTOP-COND-001`

This repository contains the technical implementation of the public digital hub for PACKERS MÉXICO.

It is an execution surface, not a source of editorial authority.

Before making changes, always read:

1. `AGENTS.md`
2. `STATUS.md`
3. any current handoff/specification explicitly supplied for the active task

If instructions conflict, STOP and report the conflict.

---

## 2 · GOVERNANCE

PACKERS MÉXICO operates under Sistema Lambeau.

Canonical editorial workflow:

`00 → 01 → 02 → 03 → 03.5 → 04 → 05`

This repository does not replace that workflow.

Codex may implement approved technical requirements.

Codex must NOT:

- redefine editorial facts;
- invent copy presented as approved;
- approve publication;
- change brand identity;
- grant rights or permissions;
- invent missing assets;
- treat assumptions as confirmed facts.

When information required for a production decision is missing:

`HOLD · MISSING INPUT`

Do not silently fill the gap.

---

## 3 · PUBLIC BRAND POSITIONING

PACKERS MÉXICO is an independent community/editorial brand.

Never present PACKERS MÉXICO as an official Green Bay Packers or NFL brand, representative, partner or property unless an explicit current authorization says so.

Current approved partnership wording:

`Casa Oficial de Packers en CDMX`

LOCK:
`CDMX` must always remain present when this wording is used.

This wording describes the approved Wingstop Condesa venue relationship.

It does NOT make PACKERS MÉXICO an official Green Bay Packers or NFL organization.

---

## 4 · PMX IDENTITY

Authoritative ordinary PMX identifier:

`Horizontal logo V1.1`

Do NOT use:
`Vertical V0.9`

Never:

- recreate a PMX logo;
- trace it;
- separate its components;
- recolor it;
- distort it;
- generate a substitute with AI;
- create an NFL shield;
- create a fake Green Bay Packers identity.

If the exact approved logo asset is not available in the repository:

use a clearly identified technical placeholder.

Do NOT fabricate the logo.

Brand typography:

Display:
`Bebas Neue`

Body / data:
`Montserrat`

Brand visual language should follow current approved Figma/PMX design references when supplied.

Figma is the visual master.

Codex implements approved visual specifications in the web product; Codex does not independently redefine the Design System.

---

## 5 · VISUAL PRINCIPLES

Permanent priority:

`CLARITY → HIERARCHY → FUNCTION → SYMMETRY → IMPACT → INNOVATION`

Mobile first.

The interface must be:

- professional;
- modern;
- clear;
- accessible;
- proportional;
- recognizable as PACKERS MÉXICO;
- reproducible;
- fast to understand.

Avoid:

- generic SaaS/dashboard aesthetics;
- unnecessary cards/pills/panels;
- decorative containers without function;
- excessive UI chrome;
- tiny typography;
- visual clutter.

Prefer:

- typography;
- scale;
- contrast;
- spacing;
- photography;
- hierarchy.

Use Fibonacci / Golden Ratio as a compositional reference when useful:

`61.8 / 38.2`

and spacing references:

`8 · 13 · 21 · 34 · 55 · 89 · 144`

Clarity overrides mathematical purity.

---

## 6 · ACCESSIBILITY

Design for phone first.

The primary purpose of the page should be understandable within approximately 2 seconds.

Essential text must be comfortably readable without zoom.

Maintain:

- semantic HTML;
- keyboard navigation;
- visible focus states;
- adequate contrast;
- useful alt text when assets require it;
- logical heading hierarchy;
- sufficiently large touch targets.

Do not reduce text size merely to make content fit.

Prefer:

`reflow → synthesis → reorganization`

---

## 7 · P0 INFRASTRUCTURE DECISION

P0 hosting:

`GitHub Pages`

Cost target:

`$0 hosting`

Current platform decisions:

`GitHub Pages = P0`

`Beacons Free = FALLBACK`

`Metricool Starter / SmartLinks = FUTURE UPGRADE · BUDGET DEPENDENT`

Do not introduce a paid dependency without explicit approval.

GitHub Student benefits may become available later but are NOT required to build the MVP.

The architecture should allow a future custom domain without rebuilding the product.

---

## 8 · TECHNICAL PHILOSOPHY

Prefer the smallest maintainable solution.

Default preference:

`static HTML + CSS + JavaScript`

A framework or build system may only be introduced when it produces a clear, documented benefit.

Avoid dependencies for functionality that can be implemented cleanly with native browser capabilities.

No backend unless an approved requirement truly needs one.

No secrets in client-side code.

No API keys committed to Git.

No unnecessary collection of personal data.

Keep weekly content/configuration separate from presentation logic whenever practical.

The weekly game must be updateable without rebuilding page structure.

---

## 9 · P0 HUB FUNCTION

The initial Hub is for:

`PACKERS MÉXICO × Wingstop Condesa · 2026–27`

Required priority:

`PRÓXIMO JUEGO`

with editable:

- opponent;
- date;
- time in CDMX;
- game context when approved.

Primary CTA:

`CONFIRMA TU ASISTENCIA`

Current user-confirmed destination:

`https://share.forms.app/form/6a96032ee64cd5f15d1688aa`

Status:

`USER-CONFIRMED CURRENT`

LOCK:

`Confirma tu asistencia`

Do NOT use:

`Reserva tu mesa`

The form is an attendance confirmation mechanism, not an individual table reservation guarantee.

---

## 10 · SECONDARY HUB ACTIONS

Required architecture must support:

`CONFIRMA TU ASISTENCIA`

`CÓMO LLEGAR`

`VER PROMOCIÓN`

`CALENDARIO`

`GOPACKGO MX`

PACKERS MÉXICO social destinations.

`VER PROMOCIÓN` is:

`CONDITIONAL ON/OFF`

Default:

`OFF`

Never show stale, invented or unverified promotion information.

Prices and promotions are editable and require recency validation before public use.

Do not hard-code annual promotional prices into the master layout.

---

## 11 · WINGSTOP ASSETS

Do not reconstruct the Wingstop logo.

Do not extract logos from:

- agreement PDFs;
- screenshots;
- old flyers.

Do not invent a PMX × Wingstop combined lockup.

The two brands must remain distinct.

If the exact validated partner asset required by the approved design is not present:

use a technical placeholder and record the dependency in `STATUS.md`.

Historical Ari flyers are:

`REFERENCE ONLY · NOT MASTER · NOT PRODUCTION STANDARD`

Do not use them as the web visual master.

---

## 12 · PHOTOGRAPHY / EXTERNAL ASSETS

Photography must have a real narrative function.

Do not use an image of another Wingstop branch while presenting it as Wingstop Condesa.

Do not invent provenance.

Do not assume availability on the web equals republication permission.

`CREDIT ≠ LICENSE`

If rights/provenance are unresolved and the asset is required for public production:

HOLD that asset.

Prefer:

`NO PHOTO > WRONG PHOTO`

---

## 13 · ANALYTICS ARCHITECTURE

Canonical funnel:

`SOCIAL → TRACKED URL → PMX HUB → CTA → DESTINATION`

The Hub must preserve:

`utm_source`

`utm_medium`

`utm_campaign`

`utm_content`

Canonical campaign format:

`wingstop_2026_w##_rival`

Canonical sources include:

`x`
`instagram`
`facebook`
`tiktok`
`youtube`
`whatsapp`
`onsite`

Canonical media include:

`bio`
`social`
`story`
`community`
`qr`

Canonical content values include:

`hero`
`invite`
`registro`
`reminder`
`gameday`
`promo`
`special`
`community`
`recap`

Do not alter this taxonomy without an explicit Analytics decision.

---

## 14 · EVENT TAXONOMY

The architecture must be prepared for:

`HUB_VIEW`

`CLICK_REGISTRO`

`CLICK_MAPS`

`CLICK_PROMO`

`CLICK_CALENDAR`

`CLICK_GOPACKGO`

`CLICK_SOCIAL`

`QR_OPEN`

The final analytics implementation must follow:

`ANALYTICS → DIGITAL HUB · GITHUB PAGES MEASUREMENT SPEC`

when that specification is supplied.

Until then, keep event handling modular.

Do not invent a proprietary competing taxonomy.

---

## 15 · ATTRIBUTION INTEGRITY

Permanent distinctions:

`SOCIAL IMPRESSION ≠ HUB VIEW`

`HUB VIEW ≠ CLICK`

`CLICK_REGISTRO ≠ REGISTRO COMPLETADO`

`REGISTRO ≠ ASISTENCIA`

Never label a click to the Forms.app URL as a completed registration.

Never claim attendance from Hub traffic.

Only report what the available evidence demonstrates.

---

## 16 · DATA / PRIVACY

Do not attempt to scrape or reproduce Ari's Forms.app response database.

Do not store names, emails, phone numbers or other attendee PII unless a later explicitly approved requirement needs it.

The Hub P0 should focus on aggregated traffic and actions.

Do not add trackers beyond the approved measurement specification.

---

## 17 · CONTENT CONFIGURATION

Weekly data should be separated from layout whenever practical.

Prefer a simple configuration layer for:

- week/game ID;
- opponent;
- date;
- time;
- venue;
- registration URL;
- Maps URL;
- promotion enabled;
- promotion content;
- calendar URL;
- social URLs;
- GoPackGo URL.

Do not hard-code the same operational value across multiple components when a single configuration source can govern it.

Historical tracking URLs must remain meaningful after the visible Hub changes to the next game.

---

## 18 · SOURCE OF VISUAL TRUTH

When an approved Figma handoff exists:

`FIGMA → IMPLEMENTATION`

Do not improvise a replacement visual system.

The same identity does not require identical composition across all screen sizes.

Responsive implementation must adapt hierarchy to the viewport.

Do not merely crop or squeeze desktop into mobile.

---

## 19 · DEVELOPMENT WORKFLOW

Before every task:

read `AGENTS.md` and `STATUS.md`.

Work only on the requested phase.

Do not automatically continue into the next phase.

Keep changes scoped.

After meaningful completed work:

- run appropriate checks;
- inspect the actual result;
- update `STATUS.md`;
- commit with a clear message.

Do not mark work complete merely because code compiles.

---

## 20 · STATUS.md DISCIPLINE

`STATUS.md` is the continuation checkpoint.

It must contain the current truth about:

- phase;
- completed work;
- pending work;
- blockers;
- current branch;
- remote status;
- deployment status;
- analytics status;
- visual handoff status;
- last relevant commit;
- exact next action.

Do not erase relevant blockers simply to make status look cleaner.

When a blocker closes, record how it closed.

---

## 21 · GIT

Target default branch:

`main`

Use small, meaningful commits.

Do not force-push without explicit instruction.

Do not rewrite shared history.

Do not commit:

- secrets;
- credentials;
- temporary dumps;
- unnecessary generated files.

Repository name target:

`pmx-digital-hub`

unless an explicit later instruction changes it.

---

## 22 · DEPLOYMENT

Do not claim GitHub Pages is live until the public URL has actually been reached and tested.

A successful build is NOT the same as a successful deployment.

Before declaring deployment PASS:

- verify public HTTPS URL;
- load it in a real browser;
- test mobile viewport;
- test primary CTA;
- test Maps;
- test tracked URL behavior;
- check console;
- verify conditional promo behavior;
- verify accessibility basics.

Output:

`PASS`

or:

`HOLD · [specific blocker]`

No simulated PASS.

---

## 23 · PUBLICATION AUTHORITY

Technical deployment of the Hub and editorial publication are separate concepts.

Codex may deploy when the active technical instruction authorizes deployment.

Codex must not infer that deploying the site authorizes social publication, campaign launch or promotional claims.

Sistema Lambeau publication gates remain independent.

---

## 24 · PERFORMANCE

The P0 Hub should be lightweight.

Prefer:

- minimal JavaScript;
- optimized assets;
- responsive images;
- no unnecessary libraries;
- no blocking third-party code without reason.

Avoid sacrificing usability for decorative effects.

---

## 25 · QA STANDARD

Before any technical PASS, validate the real result.

At minimum inspect:

- primary idea understood quickly;
- mobile readability;
- desktop behavior;
- hierarchy;
- spacing;
- contrast;
- overflow/clipping;
- button states;
- conditional modules;
- all destinations;
- UTM preservation;
- analytics events when implemented;
- keyboard operation;
- broken links;
- console errors;
- performance;
- reproducibility of weekly update.

A technically functioning page that is visually generic or operationally fragile is not finished.

---

## 26 · CURRENT LOCKS

Current P0 hosting:
`GitHub Pages`

Current registration:
`https://share.forms.app/form/6a96032ee64cd5f15d1688aa`

Registration state:
`USER-CONFIRMED CURRENT`

Current approved venue wording:
`Casa Oficial de Packers en CDMX`

Current registration CTA:
`Confirma tu asistencia`

Promo default:
`OFF`

Primary analytics source of truth:
`PMX-WINGSTOP-2026-27 · Analytics & Attribution · Juego por Juego`

External Ari/Wingstop data:
`OPTIONAL / COMPLEMENTARY · NOT A DEPENDENCY`

---

## 27 · STOP CONDITIONS

STOP instead of guessing when:

- an exact logo/asset is missing;
- a URL cannot be verified;
- a factual game value is uncertain;
- analytics specification conflicts with implementation;
- an action requires a credential not provided;
- a paid service would be required;
- deployment would expose secrets;
- an instruction conflicts with a current LOCK.

Return:

`HOLD`

with:

`BLOCKER`
`IMPACT`
`REQUIRED INPUT`
`SAFE WORK THAT CAN CONTINUE`

---

## 28 · PRINCIPLE

Build a system, not a one-off page.

If a solution is prettier but less clear, it loses.

If it is innovative but breaks identity, it loses.

If it works but requires constant manual repair, it is not yet a system.

Do not reconstruct approved work unnecessarily.
