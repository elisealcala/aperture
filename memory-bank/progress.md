# Progress

## 2026-10-29 — first implementation slice

- Initialized standalone repository and copied the portable reference into docs/design.
- Implemented a React/TypeScript/Vite synthetic catalog, provider/outcome filters, URL-selected session/event/tab, linked resource events, advisory findings and a source-status page. Fixture examples include Claude, Codex follow-up, and incomplete capture.
- Installed Node dependencies and recorded package-lock.json. Node 22.22.0, npm 10.9.4. Installed Codex CLI observed as 0.165.0-alpha.1.2; no native integration or history verification performed.
- Verified: `npm run typecheck`, `npm test` (3 data tests), `npm run build`; browser opened catalog and selected the Claude test event and Tests tab. Local server returned HTTP 200. Production output: JS 235.69 kB (73.13 kB gzip), CSS 9.05 kB (2.79 kB gzip), before the final minor copy edit.
- Not yet verified: mobile widths, keyboard-only flow, accessibility audit, browser back/forward and stale links, static network isolation, or large sessions. This is not the complete demo or first release.
- Not implemented: versioned schemas/repository abstraction, deterministic rule engine, full evidence provenance, local imports/SQLite, Codex adapter, handoff export, large-session virtualization, lint/format/e2e checks or case study. Findings and examples are currently fixture-specific; deep links to unknown events fall back to the first event. Dark appearance is preliminary.
- Next: introduce versioned domain schemas and an actual repository abstraction; fix stale-link behavior and complete keyboard/mobile navigation, then build local normalized import and persistence. Keep demo and real imports isolated.

## 2026-10-29 — public showcase preparation

- Expanded the README with a walkthrough, implemented capabilities, limitations and roadmap; added page description/Open Graph metadata and a GitHub Actions workflow for existing checks.
- The public repository is intended as a portfolio showcase. No license has been selected. Future work remains as listed above.
