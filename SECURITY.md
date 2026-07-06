# Security Policy

## Supported Versions

We take the security of the Whānau Preterm Support Hub seriously, especially given its role supporting whānau during vulnerable periods.

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, email the maintainers at **security@whanaupreterm.nz** (or open a private security advisory on GitHub if available).

Please include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact (especially any risk to whānau trust or cultural safety)
- Suggested fix (if known)

We aim to acknowledge reports within 48 hours and provide a fix timeline within 5 business days for critical issues.

## Our Commitments

- No storage of Protected Health Information (PHI) without explicit consent and purpose limitation.
- All releases are gated by the `hub_release_preflight.py` script (sensitive file detection + clean tree).
- Strong defaults for Content Security Policy, input sanitisation, and rate limiting.
- Regular dependency updates and automated security scanning in CI.
- Cultural safety reviews for any change that could affect whānau data or community relationships.

Thank you for helping keep this platform safe and trustworthy for whānau across Aotearoa.
