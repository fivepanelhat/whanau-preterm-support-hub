# Whānau Preterm Support Hub NZ

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](./LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)

[![Linux](https://img.shields.io/badge/Linux-Ubuntu%2C%20Debian%2C%20Fedora-FCC624?logo=linux&logoColor=black)](https://github.com/fivepanelhat/whanau-preterm-support-hub)
[![Windows](https://img.shields.io/badge/Windows-10%2B-0078D4?logo=windows&logoColor=white)](https://github.com/fivepanelhat/whanau-preterm-support-hub)
[![macOS](https://img.shields.io/badge/macOS-12%2B-000000?logo=apple&logoColor=white)](https://github.com/fivepanelhat/whanau-preterm-support-hub)

[![Claude AI](https://img.shields.io/badge/Claude-Anthropic-9C27B0)](https://anthropic.com)
[![Gemini](https://img.shields.io/badge/Gemini-Google-4285F4?logo=google&logoColor=white)](https://gemini.google.com)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4-00A67E)](https://openai.com)
[![Grok](https://img.shields.io/badge/Grok-xAI-000000)](https://x.ai)

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com)
[![Te Tiriti](https://img.shields.io/badge/Te%20Tiriti-Aligned-00247D)](https://github.com/fivepanelhat/whanau-preterm-support-hub)
[![Te Mana Raraunga](https://img.shields.io/badge/Te%20Mana%20Raraunga-Data%20Sovereignty-005A9C)](https://www.temanararaunga.maori.nz)
[![Accessibility](https://img.shields.io/badge/WCAG-2.2%20AA-success)](https://github.com/fivepanelhat/whanau-preterm-support-hub)

[![CI Status](https://github.com/fivepanelhat/whanau-preterm-support-hub/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/fivepanelhat/whanau-preterm-support-hub/actions/workflows/ci.yml)
[![Dependencies](https://img.shields.io/badge/Dependencies-Monitored-brightgreen?logo=dependabot)](https://github.com/fivepanelhat/whanau-preterm-support-hub/security/dependabot)

![Banner](assets/social_preview.png)


**He waka eke noa — We are all in this waka together.**

A sovereign, open-source, culturally grounded national digital platform supporting whānau and families of preterm twin newborns across Aotearoa New Zealand.

**Current status**: Early development (v0.1.0 scaffold) — public release targeted for late 2026.

## Architecture Overview

A **Next.js** national support hub for whānau of preterm twins — Te Tiriti-aligned, Te Mana Raraunga by design, with Aether-assisted development and strong accessibility defaults.

![Whānau Preterm Support Hub architecture — liquid glass overview](assets/architecture_overview.png)

### System map

```mermaid
%%{init: {
  "theme": "dark",
  "themeVariables": {
    "fontSize": "16px",
    "fontFamily": "Inter, ui-sans-serif, system-ui, sans-serif",
    "primaryColor": "#0ea5e9",
    "primaryTextColor": "#f8fafc",
    "primaryBorderColor": "#38bdf8",
    "lineColor": "#67e8f9",
    "secondaryColor": "#1e293b",
    "tertiaryColor": "#0f172a",
    "clusterBkg": "#0b1220cc",
    "clusterBorder": "#38bdf880",
    "titleColor": "#e2e8f0"
  },
  "flowchart": {
    "nodeSpacing": 40,
    "rankSpacing": 48,
    "padding": 20,
    "htmlLabels": true,
    "curve": "basis"
  }
}}%%
flowchart TB

    classDef sense fill:#052e16,stroke:#4ade80,stroke-width:2px,color:#f0fdf4
    classDef edge fill:#0c4a6e,stroke:#38bdf8,stroke-width:2px,color:#f0f9ff
    classDef core fill:#134e4a,stroke:#2dd4bf,stroke-width:2px,color:#f0fdfa
    classDef act fill:#422006,stroke:#fbbf24,stroke-width:2px,color:#fffbeb
    classDef store fill:#1e1b4b,stroke:#a5b4fc,stroke-width:2px,color:#eef2ff
    classDef ai fill:#3b0764,stroke:#e879f9,stroke-width:2px,color:#fdf4ff
    classDef app fill:#1e1b4b,stroke:#c4b5fd,stroke-width:2px,color:#eef2ff

    U["Whānau / practitioners"] --> WEB["Next.js 15 App Router<br/>TypeScript · Tailwind"]
    WEB --> API["API routes<br/>Zod · auth guards"]
    API --> DATA["Resources · directory<br/>no PHI by default"]
    WEB --> A11Y["WCAG 2.2 AA<br/>mobile-first"]
    DEV["Aether HITL<br/>release preflight"] -.-> WEB

    class U act
    class WEB,API core
    class DATA,A11Y store
    class DEV ai
```

| Layer | Components | Role |
| :--- | :--- | :--- |
| **UI** | Next.js 15 + TS | Accessible by default |
| **Data** | General resources only | No PHI by default |
| **Principles** | Te Tiriti · Te Mana Raraunga | Sovereign by design |
| **Dev safety** | Aether + preflight | HITL releases |

*Full detail: [docs/](./docs/)*


For issues, feature requests, or cultural partnership discussions, please open a GitHub Issue or contact the maintainers via the repository.

*Maintained with aroha by the Whānau Preterm Support Hub team and Aether Summit (Senior Lead Developer & Orchestrator).*

---

## Vision

Every whānau in Aotearoa who experiences preterm twin birth has immediate, equitable, culturally safe access to:

- Trusted information and resources (Māori, Pacific, and clinical pathways)
- Peer connection and support
- Clear funding and service navigation (WINZ, DHBs, iwi providers)
- Trauma-informed tools that honour whakapapa, rangatiratanga, and manaakitanga

The platform is built in partnership with whānau, iwi (including Muaūpoko), health professionals, and community organisations. Technology serves people — never the other way around.

## Key Principles

- **Te Tiriti o Waitangi** — Rangatiratanga, kaitiakitanga, manaakitanga, kotahitanga
- **Te Mana Raraunga** — Māori data sovereignty as first-class architecture
- **No PHI by default** — Platform stores only general information and consented resources. Any personal health data remains under whānau control or with their chosen providers.
- **Trauma-informed & culturally safe** by design
- **Accessibility first** — WCAG 2.2 AA minimum, mobile-first, low-bandwidth friendly
- **Open source & sovereign** — Apache 2.0 licence with strong cultural and health disclaimers
- **Agentic development with HITL** — Orchestrated by Aether v0.6.2+ (sovereign multi-agent system) with mandatory human approval gates for all releases and sensitive decisions

## Tech Stack

- **Frontend**: Next.js 15 (App Router) + TypeScript + Tailwind CSS + Radix UI primitives
- **Orchestration & Safety**: Aether v0.6.2 sovereign agentic system (ReAct + skills + release-preflight guardrails)
- **Release Safety**: Custom `hub_release_preflight.py` (adapted from Aether) + GitHub Actions
- **Deployment**: Vercel (primary) + self-host option (Docker)
- **Testing**: Jest + React Testing Library + Playwright (E2E)
- **CI/CD**: GitHub Actions with mandatory preflight job

## Getting Started (Local Development)

```bash
# 1. Clone
git clone https://github.com/fivepanelhat/whanau-preterm-support-hub.git
cd whanau-preterm-support-hub

# 2. Install
npm install

# 3. Run dev server
npm run dev
```

Open http://localhost:3000

### Run Release Preflight (before any tag/push)

```bash
python scripts/hub_release_preflight.py --version 0.1.0
```

The script enforces visibility checks, sensitive file scanning, monotonic versioning, clean tree, and test passage.

## Project Structure (Key Paths)

```
whanau-preterm-support-hub/
├── app/                    # Next.js App Router
│   ├── layout.tsx
│   └── page.tsx            # Public landing + disclaimers
├── components/             # Reusable accessible UI (shadcn/ui style)
├── lib/                    # Utils, constants, cultural helpers
├── docs/
│   └── adr/                # Architecture Decision Records (incl. ADR-0001)
├── scripts/
│   └── hub_release_preflight.py   # Mandatory pre-release guard (Aether-adapted)
├── .github/
│   ├── workflows/
│   │   ├── ci.yml
│   │   └── release-preflight.yml
│   └── ISSUE_TEMPLATE/
├── public/                 # Static assets (images, icons — culturally reviewed)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── README.md               # You are here
├── SECURITY.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
└── LICENSE
```

## Contribution Guidelines

We warmly welcome contributions from:

- Whānau with lived experience of preterm twin birth
- Māori and Pacific health navigators, midwives, and clinicians
- Iwi and community organisations
- Developers who respect Te Tiriti and data sovereignty
- Cultural reviewers and accessibility specialists

**Before contributing code or content**:
1. Read `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md`
2. For any content touching Māori or Pacific knowledge, partner with cultural reviewers early.
3. All medical/clinical information must include clear disclaimers and be evidence-based.
4. Run `npm run typecheck && npm test` before opening a PR.
5. For releases, the preflight script **must** pass and a human must confirm.

We use conventional commits and squash-merge. Large features are discussed via GitHub Discussions or Issues first.

## Security & Privacy

- **No storage of Protected Health Information (PHI)** without explicit, revocable, granular consent and clear purpose limitation.
- All releases are gated by the release-preflight script (sensitive file detection, clean tree, monotonic versioning).
- Strong defaults for input sanitisation, CSP headers, and rate limiting.
- See `SECURITY.md` for reporting vulnerabilities.

## Health & Medical Disclaimer

**This platform is not a substitute for professional medical advice, diagnosis, or treatment.**

Always seek the advice of your midwife, doctor, or other qualified health provider with any questions you may have regarding a medical condition or pregnancy. Never disregard professional medical advice or delay in seeking it because of something you have read on this platform.

If you are in crisis or experiencing distress, please contact:
- Your midwife or lead maternity carer immediately
- Healthline: 0800 611 116
- In emergency: 111

## Licence

Apache License 2.0 — see `LICENSE` file.

With additional cultural and health disclaimers as noted above.

## Acknowledgements

- Whānau and families who have walked this path and generously shared their knowledge
- Muaūpoko Tribal Authority and other iwi partners
- Mana Kai / Horowhenua community resilience network (inspiration for sovereign tech + community models)
- Aether sovereign agentic system (fivepanelhat/Aether) — our orchestrator and safety layer
- All open-source contributors who prioritise equity, accessibility, and cultural safety

**He waka eke noa.**
