# Aperture

Aperture helps people understand and inspect recorded coding work. This early standalone demo links a synthetic session timeline to its captured context, rationale, changes, tests, and evidence. It does not execute commands or enforce decisions.

## Try the demo

Requires Node 22 and npm. Run `npm install`, then `npm run dev`. Select a session and event, switch inspector tabs, and follow a related resource to another event. Findings link back to their recorded evidence. The samples are synthetic; they are not a provider benchmark.

## Current status

This is an initial slice, not the first release. It has no real provider integration, local import, SQLite persistence, Studio connection, export, or live control. Only supplied fixture observations are displayed; missing history is not reconstructed from current files. The installed Codex CLI was observed as `0.165.0-alpha.1.2`, but its history API has not been integrated or verified.

Run `npm run typecheck`, `npm test`, and `npm run build` for available checks. The static build is generated in `dist`; hosting must rewrite routes to `index.html` if path-based routes are added. No deployment is configured.

The original handoff's clickable reference is in `docs/design/wireframe.html`. The next tasks and verification status are in `memory-bank/`.
