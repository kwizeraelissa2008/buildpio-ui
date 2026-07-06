# Buildpio OS — AI Workforce Dashboard

A production-quality SaaS dashboard built to simulate an AI-powered workforce management platform. Features real-time agent monitoring, CRM pipeline views, revenue analytics, and task management — all in a polished dark-mode UI.

Built as a portfolio project to demonstrate frontend architecture skills with React 19, TypeScript 6, Tailwind CSS v4, and Recharts.

![Dashboard Preview](https://i.imgur.com/placeholder-hero.png)

---

## Screenshots

| Dashboard Overview | AI Workforce Panel |
|---|---|
| ![Overview](https://i.imgur.com/placeholder-1.png) | ![Workforce](https://i.imgur.com/placeholder-2.png) |

| Revenue Chart | Customer Inbox |
|---|---|
| ![Revenue](https://i.imgur.com/placeholder-3.png) | ![Inbox](https://i.imgur.com/placeholder-4.png) |

> Replace placeholder image URLs with actual screenshots after running the project locally.

---

## Features

**Dashboard**
- KPI stat cards with live delta indicators (revenue, leads, tasks, agent count)
- Revenue growth line chart with dark-theme styled axes and tooltips
- Live AI activity feed showing real-time agent actions by type
- System health monitor for API server, database, AI engine, and security

**AI Workforce**
- 20 simulated AI agents across Sales, Marketing, Finance, Support, Research, and Operations roles
- Per-agent status badges (Working / Waiting / Idle / Paused), task progress bars, and current task display
- Agent profiles with memory, goals, skills, tool integrations, and conversation history

**CRM / Customer Inbox**
- 30 customer records with full pipeline status (New Lead → Active → Churned)
- Contact info, last contact date, meeting history, notes, and timeline per customer
- Assigned AI employee per account

**Task Management**
- Daily task list with priority levels (High / Medium / Low) and completion state
- Due date tracking and assignee display

**Navigation & Layout**
- Collapsible sidebar with keyboard-accessible navigation
- Sticky header with contextual breadcrumb, search input, and notification panel
- Responsive layout — sidebar auto-collapses on mobile with backdrop overlay
- Notification dropdown with unread badge count and outside-click dismissal

**UI System**
- Reusable component library: `Button`, `Badge`, `Card`, `Avatar`, `Input`, `Modal`, `Dropdown`, `Tabs`, `Progress`, `Table`, `Loader`, `Skeleton`, `EmptyState`
- Consistent dark-mode design tokens via Tailwind CSS v4
- WCAG-conscious accessibility: `aria-label`, `role`, `aria-expanded`, keyboard handlers throughout

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 19](https://react.dev) |
| Language | [TypeScript 6](https://www.typescriptlang.org) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Routing | [React Router v7](https://reactrouter.com) |
| Charts | [Recharts v3](https://recharts.org) |
| Icons | [Lucide React](https://lucide.dev) |
| Build tool | [Vite 8](https://vitejs.dev) |
| Linting | [ESLint 10](https://eslint.org) + [typescript-eslint](https://typescript-eslint.io) |

---

## Project Structure

```
src/
├── components/          # Feature components
│   ├── ui/              # Reusable design system primitives
│   │   ├── Avatar.tsx
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Dropdown.tsx
│   │   ├── EmptyState.tsx
│   │   ├── Input.tsx
│   │   ├── Loader.tsx
│   │   ├── Modal.tsx
│   │   ├── Progress.tsx
│   │   ├── Table.tsx
│   │   └── Tabs.tsx
│   └── charts/
│       └── ChartContainer.tsx
├── constants/           # Route definitions and nav config
├── data/                # Mock data factories (activities, employees, customers, etc.)
├── hooks/               # useSidebar (context + state), useNotifications
├── layouts/             # DashboardLayout (sidebar + outlet)
├── pages/               # Dashboard page composition
├── sections/            # Page-level sections (DashboardStats, WorkforceSection)
├── types/               # TypeScript interfaces for all data models
└── utils/               # cn() class merger, format helpers
```

---

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm 9 or later

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/buildpio-os.git
cd buildpio-os

# 2. Install dependencies
npm install

# 3. Copy environment variables
cp .env.example .env

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Other commands

```bash
npm run build      # Production build (tsc + vite)
npm run preview    # Preview the production build locally
npm run lint       # Run ESLint
```

---

## Environment Variables

Copy `.env.example` to `.env` before running the project. All variables are optional for the current mock-data version.

```bash
cp .env.example .env
```

See [.env.example](.env.example) for all available options.

---

## Roadmap

The current version uses fully mocked data. Planned extensions to make this a real product:

- [ ] **Authentication** — login / logout with JWT or OAuth (GitHub, Google)
- [ ] **Live data layer** — REST or GraphQL API integration replacing mock data factories
- [ ] **AI agent pages** — full agent detail view with conversation history, memory editor, and goal tracking
- [ ] **Analytics page** — daily/weekly activity charts, top performer leaderboard, conversion funnel
- [ ] **Customers page** — full CRM table with search, filters, and customer detail modal
- [ ] **Settings page** — user profile, notification preferences, theme toggle
- [ ] **Dark / light mode toggle** — Tailwind CSS v4 CSS variable approach
- [ ] **Real-time updates** — WebSocket or SSE for live activity feed and agent status
- [ ] **Testing** — Vitest unit tests for hooks and utilities; Playwright e2e for critical flows
- [ ] **Storybook** — isolated component documentation for the `ui/` design system

---

## Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to the branch: `git push origin feat/your-feature`
5. Open a Pull Request

Please follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages and keep PRs focused on a single concern.

### Development notes

- All components live in `src/components/` — UI primitives go in `src/components/ui/`
- Data shapes are defined in `src/types/` — always import types with `import type`
- Use the `cn()` utility from `src/utils/cn.ts` for conditional class merging
- Prefer the existing `Card`, `Badge`, `Button` primitives over raw Tailwind class strings in new components

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## Author

Built by **[Your Name]** — [your-portfolio.com](https://your-portfolio.com) · [LinkedIn](https://linkedin.com/in/your-profile) · [GitHub](https://github.com/your-username)

> If you found this project useful or are using it as a reference, a ⭐ on GitHub is appreciated.
