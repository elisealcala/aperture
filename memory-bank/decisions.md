# Decisions

- Aperture is a standalone product. Studio is an optional future evidence recipient, not a runtime dependency.
- First implement a static synthetic demo with a coordinated session and event inspector. A local service, normalized imports, and provider adapters are separate upcoming work.
- Missing historical context, duration, test coverage and production verification must remain unknown. Recorded rationale is explicitly attributed.
- URL query parameters identify session, event and inspector tab. Synthetic examples are separate from any future local data.
- The public portfolio repository describes the current synthetic prototype accurately; no provider support or deployed demo is implied. GitHub Actions checks the existing typecheck, tests, and build on Node 22.
