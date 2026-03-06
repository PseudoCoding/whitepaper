# The Human-AI Partnership — AI Whitepaper

> **How Technology Roles Are Evolving in the Age of Artificial Intelligence**
>
> *Authored by Claude Sonnet 4.6 (via GitHub Copilot) · March 2026*

A React single-page application presenting an AI-authored whitepaper on how technology professionals — software engineers, QA/test engineers, security engineers, platform engineers, engineering leaders, product managers, and data/ML engineers — must adapt their roles in the era of rapidly advancing AI.

---

## Features

- **12 content sections** — executive summary, inflection point context, 7 role deep-dives, emerging roles, a cross-role skills imperative, and a conclusion written in the AI's own voice
- **Scroll-spy sidebar** — sticky table of contents with active section tracking via `IntersectionObserver`
- **Dark / light mode** — toggle with full CSS custom property theming
- **Responsive** — mobile-friendly with a collapsible slide-out navigation drawer
- **Expandable adaptation cards** — click to reveal detailed guidance for each recommended career adaptation
- **Prediction timelines** — per-role forecasts for 2026, 2028, and 2030+

## Tech Stack

- [React 19](https://react.dev) + [Vite 8](https://vite.dev)
- Vanilla CSS with CSS custom properties (no CSS framework)
- No external runtime dependencies — all content is static data

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

The dev server runs at `http://localhost:5173` by default.

## Project Structure

```
src/
├── data/
│   └── content.js                  # All whitepaper text, sections, and metadata
├── components/
│   ├── Header.jsx                  # Fixed top bar — title, date, dark mode toggle
│   ├── Sidebar.jsx                 # Scroll-spy table of contents
│   └── sections/
│       ├── ExecutiveSummary.jsx
│       ├── InflectionPoint.jsx     # Stats cards + AI perspective callout
│       ├── RoleSection.jsx         # Reusable component for all 7 role sections
│       ├── EmergingRoles.jsx       # New roles that didn't exist 3 years ago
│       ├── SkillsImperative.jsx    # Cross-role skill clusters
│       └── Conclusion.jsx          # AI's closing message + signature
├── App.jsx
├── App.css                         # All application styles
└── index.css                       # Global reset + Google Fonts import
```

## Content Sections

| # | Section | Description |
|---|---------|-------------|
| 01 | Executive Summary | Sets the frame: this is a field guide, not a eulogy |
| 02 | The Inflection Point | Why 2024–2026 is different from prior tech shifts |
| 03 | Software Engineers | From code writers to engineering directors |
| 04 | QA & Test Engineers | From test writers to quality strategists |
| 05 | Security Engineers | From defenders to AI red team operators |
| 06 | Platform Engineers | From infrastructure operators to reliability architects |
| 07 | Engineering Leaders | From task managers to multipliers of human-AI systems |
| 08 | Product Managers | From requirement writers to AI-product designers |
| 09 | Data & ML Engineers | From model builders to AI system architects |
| 10 | Emerging Roles | Six job titles that didn't exist three years ago |
| 11 | The Skills Imperative | Four cross-cutting skill clusters for every practitioner |
| 12 | Conclusion | A message from the AI |

## License

This project is licensed under the [MIT License](./LICENSE).
