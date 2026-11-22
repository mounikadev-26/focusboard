# FocusBoard

Responsive task dashboard built with **React + Vite (JavaScript)**, plain CSS and Lucide icons.

- **Live URL:** https://YOUR-APP.vercel.app
- **GitHub:** https://github.com/mounika-2510/focusboard

## Setup
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build
```

## Features
Create / edit / delete (with confirm dialog), status change, case-insensitive title search, status tabs + priority filter (work together, with reset), derived stats and completion %, 3-slide Focus Notes carousel (prev/next/dots, circular), localStorage persistence, responsive at 390 / 768 / 1440 px, keyboard + ARIA support.

## State management choice
React hooks only (`useState`, `useMemo`) with tasks living in `App.jsx` as the single source of truth. The app is small, so Redux/Context would be extra complexity. All updates are immutable (`map`, `filter`, spread). Stats and visible tasks are **derived** with `useMemo`, never stored. `useLocalStorage` saves tasks and restores them on refresh; saved data always wins over sample data.

## Limitations
- Sidebar items Calendar/Settings are visual placeholders (only the active highlight and breadcrumb change).
- Focus Notes slide text/preview card follow the Figma frames (static content).
- The mobile "Make today count" hero card is replaced by the same carousel at all sizes.
