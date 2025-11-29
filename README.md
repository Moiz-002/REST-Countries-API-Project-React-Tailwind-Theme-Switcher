# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

## Tailwind CSS & Dark/Light Theme

This project has been configured to use Tailwind CSS with class-based dark mode.

Quick steps to get started:

1. Install dependencies (if not already installed):

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Theme switching is implemented in `src/App.jsx` — the toggle updates the `theme` key in `localStorage` and toggles the `dark` class on `<html>`.

4. Tailwind config is in `tailwind.config.cjs` and PostCSS configuration is in `postcss.config.cjs`.

Notes:
- The inline script in `index.html` sets the initial theme before React mounts to avoid flashes of wrong theme.
- Add your project classes in `src/index.css` and use Tailwind utilities with the `dark:` prefix to adapt styles.

