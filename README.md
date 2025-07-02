# WiFi Market Dashboard

A modern, scalable dashboard for managing and monitoring WiFi market operations. Built with a domain-driven, feature-first architecture using React, TypeScript, Tailwind CSS, and the latest best practices.

---

## 🚀 Features

- **Domain-Driven Structure**: Screaming Architecture for maintainability and clarity
- **Modern UI/UX**: Tailwind CSS, Radix UI, and custom design system
- **Type Safety**: Strict TypeScript throughout
- **State Management**: TanStack Query for async state, React Context for auth
- **Authentication**: Secure login with Supabase
- **Real-Time Data**: Live charts and analytics
- **Form Management**: React Hook Form + Zod
- **Accessibility**: WCAG-compliant components
- **Cursor Rules**: Automated code quality and architecture enforcement

---

## 🛠️ Tech Stack

- **React 18** (functional components, hooks)
- **TypeScript** (strict mode, custom types)
- **Vite** (fast dev/build)
- **Tailwind CSS** (utility-first styling)
- **Radix UI** (accessible primitives)
- **TanStack Query** (server state)
- **React Hook Form** (forms)
- **Zod** (validation)
- **Supabase** (auth, backend)
- **Recharts** (data viz)
- **Sonner** (toasts)
- **Lucide React** (icons)

---

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout/         # App shell, layout components
│   └── routing/        # Route components (Index, NotFound)
├── features/
│   ├── authentication/ # Auth domain (components, hooks)
│   ├── dashboard/      # Dashboard domain (components, charts)
│   └── campaigns/      # Campaigns domain (components)
├── shared/
│   ├── hooks/          # Reusable hooks (e.g., use-toast)
│   ├── types/          # Shared types
│   └── utils.ts        # Shared utilities
├── components/
│   └── ui/             # UI library (do not modify)
└── integrations/
    └── supabase/       # Supabase client & types
```

---

## ⚡ Getting Started

1. **Install dependencies**
   ```bash
   pnpm install
   ```
2. **Set up environment**
   Create a `.env` file:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
3. **Run the app**
   ```bash
   pnpm dev
   ```
4. **Open** [http://localhost:5173](http://localhost:5173)

---

## 🧑‍💻 Development Guidelines

- **Follow Screaming Architecture**: Organize by business domain, not technical type
- **Use TypeScript everywhere**: No `any`, prefer interfaces/types
- **Functional React**: Use hooks, avoid classes
- **Tailwind for styling**: No custom CSS unless necessary
- **Cursor Rules**: Automated code style and architecture checks
- **Write tests for new features**

---

## 📚 Cursor Rules & Architecture

This project uses [Cursor Rules](https://playbooks.com/rules) for:

- Enforcing domain-driven structure
- TypeScript and React best practices
- Clean code and performance

See `.cursor/rules/` for details.

---

## 🤝 Contributing

- Fork & branch from `main`
- Follow the architecture and code style rules
- Add/modify Cursor rules as needed for new domains
- Open a PR with a clear description

---

## 📝 License

MIT
