# Contributing to Whānau Preterm Support Hub NZ

Thank you for your interest in contributing! This platform exists to serve whānau of preterm twins with cultural safety, trauma-informed care, and genuine partnership.

## Before You Start

1. Read the [Code of Conduct](CODE_OF_CONDUCT.md) and [README](README.md).
2. If your contribution involves Māori or Pacific knowledge, cultural practices, or community stories, please engage cultural reviewers early (open an issue tagged `cultural-review`).
3. All medical or clinical content must be evidence-based and include the platform’s standard disclaimer.
4. We use **conventional commits** and squash merging.

## Development Setup

See the “Getting Started” section in the README.

Run preflight before any release-related work:
```bash
python scripts/hub_release_preflight.py --version X.Y.Z
```

## Pull Request Process

1. Create a feature branch from `main`.
2. Make focused, well-tested changes.
3. Run `npm run typecheck && npm test`.
4. Update or add ADR in `docs/adr/` for significant architectural or cultural decisions.
5. Open a Pull Request with a clear description of the change and its impact on whānau.
6. Request review from at least one cultural reviewer (if content-related) and one technical reviewer.
7. All CI checks (including release-preflight where applicable) must pass.

## Release Process

Releases are gated by the mandatory preflight script and human confirmation (HITL). Never bypass the preflight.

See ADR-0001 for full rationale.

## Questions?

Open a GitHub Discussion or Issue. We especially welcome input from whānau with lived experience, iwi representatives, midwives, and accessibility experts.

*He waka eke noa.*
