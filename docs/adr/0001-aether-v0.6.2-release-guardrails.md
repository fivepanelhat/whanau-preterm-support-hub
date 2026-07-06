# ADR-0001: Adoption of Aether v0.6.2 Release Guardrails for Whānau Preterm Support Hub

**Status**: Accepted  
**Date**: 2026-07-06  
**Deciders**: Wayne Roberts (Founder, Coastal Alpine Tech), Aether Summit (Senior Lead Developer & Orchestrator)  
**Consulted**: Infrastructure & DevOps Specialist, Docs & Compliance Specialist

## Context

The Whānau Preterm Support Hub NZ is an open-source national platform supporting families and whānau of preterm twin newborns in Aotearoa New Zealand. Development is heavily orchestrated by the Aether sovereign agentic system (multi-agent swarm with strict HITL gates).

On 6 July 2026, Aether v0.6.2 was released as its First Public Release. This version introduces a production-grade `release-preflight` skill and `scripts/release_preflight.py` that enforces:

- Remote visibility awareness (stricter rules for PUBLIC repos)
- Sensitive filename scanning (investor, valuation, financial, one-pager, credentials, .env, etc.)
- Tag collision prevention
- Monotonic semantic versioning
- Version-file agreement (single source of truth)
- Clean working tree (unstaged changes blocked; untracked files must be explicitly acknowledged)
- Full test suite pass before any tag/push/release

Previous incidents in the Aether project (reversed version history, accidental sensitive file exposure, tag collisions) demonstrated the need for automated guardrails before any public release sequence.

The Hub will eventually have its own public GitHub repository and release cadence. Without equivalent guardrails, the same classes of failure are likely when the 11-agent swarm or human contributors prepare releases.

## Decision

We adopt the Aether v0.6.2 release-preflight pattern as the mandatory pre-release gate for the Whānau Preterm Support Hub repository.

### Implementation Approach

1. **Adapted preflight script** (`scripts/hub_release_preflight.py`):
   - Ported from Aether’s stdlib-only implementation.
   - Replaces `aether/__init__.py` version check with `package.json` version agreement (single source of truth for the Next.js app).
   - Retains all other 6 checks (visibility, sensitive files, tag collision, monotonicity, clean tree, tests).
   - Sensitive pattern list extended with health/community-specific terms where appropriate (e.g., internal partner lists, draft clinical pathways) while respecting that the Hub stores **no PHI** by design.

2. **GitHub Actions integration**:
   - `.github/workflows/ci.yml` runs the preflight as a required job before any release or main-branch protection rules.
   - A dedicated `release-preflight.yml` workflow can be triggered manually or by tag push protection.

3. **Cultural & Te Tiriti alignment**:
   - The preflight explicitly surfaces any files matching sensitive patterns in PUBLIC repos and blocks the release.
   - This operationalises kaitiakitanga (guardianship) over community and whānau-related documents.
   - HITL confirmation step remains mandatory; agents cannot bypass.

4. **Future evolution**:
   - When the Hub reaches v1.0.0 public release, the full Aether preflight (or a shared submodule) may be adopted directly.
   - Long-term: Aether can orchestrate the entire release sequence with the preflight as the first mandatory skill call.

## Consequences

**Positive**:
- Prevents accidental leakage of sensitive planning, partnership, or culturally significant documents.
- Eliminates version history inversion and tag collision bugs.
- Provides auditable, repeatable safety for both agent-driven and human-driven releases.
- Strengthens trust with iwi partners, whānau, and health sector stakeholders.
- Aligns with Te Mana Raraunga principles and NZ Privacy Act expectations for a health-adjacent community platform.

**Negative / Trade-offs**:
- Adds ~10–30 seconds to release workflows (git fetch + Python run).
- Requires Python in the CI environment for the Hub repo (acceptable; GitHub Actions supports it easily).
- Initial porting effort (completed in this ADR).

**Risks mitigated**:
- High-risk: Public exposure of confidential or culturally sensitive material.
- Medium-risk: Broken release history confusing downstream consumers or community contributors.
- Low-risk: Agent hallucination of version numbers or silent `git add -A`.

## Compliance & Evidence

- Aether v0.6.2 release notes and source: https://github.com/fivepanelhat/Aether/releases/tag/v0.6.2
- Original `release_preflight.py` and `SKILL.md` reviewed on 2026-07-06.
- Hub design principles (security-first, no PHI storage without explicit consent, trauma-informed, culturally safe) directly supported by these guardrails.

## Next Steps

- [x] Create `scripts/hub_release_preflight.py` (adapted)
- [x] Add `.github/workflows/release-preflight.yml` and update `ci.yml`
- [ ] Run preflight successfully on first Hub release candidate
- [ ] Review and update sensitive patterns list with HITL (cultural reviewers) after first 3 months of public contributions

**Approved by**: Aether Summit (Orchestrator) — 2026-07-06  
**HITL Confirmation**: Pending founder sign-off on this ADR and the generated Hub scaffold.