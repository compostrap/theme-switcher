# theme-switcher-compostrap

A light/dark switch of Bootstrap 5 for the older compostrap packages (sidebar-skeleton, sidebar-menu, sidebar-menu-custom, dashboard-skeleton): a button `[data-theme-switcher]` sets `data-bs-theme` on `<html>` and stores the choice in `localStorage` (`bootstrap-theme`). The package `compostrap` has its own switcher (`theme-switcher.js` there) and replaces it.

## Layout

- `src/theme-switcher.js`: the class `ThemeSwitcher` (options, `initialize()`, `setTheme()`, the event `theme-switcher:change` on `window`); `src/index.js` exports it.
- `src/scss/theme-switcher.scss`: the layout of the button (icon and label in a row).
- `dist/` is versioned; `npm run build` writes it.

## How it works

- The stored value is only `light` or `dark`. Projects have an inline script in `<head>` that sets a stored `light`/`dark` before the page is drawn and ignores other values, so the stored values must not change (the `auto` mode of compostrap stores `auto` and is therefore not taken over here).
- Without a stored choice the theme is the `data-bs-theme` of `<html>`, then the theme of the system, then `defaultTheme`.
- Icons and labels are optional, from any icon library, set by `data-theme-light-icon`/`data-theme-dark-icon`, `data-theme-light-label`/`data-theme-dark-label` or by the options; the button shows the theme it switches to.
- A choice made in another tab of the browser is taken over (the `storage` event).
- Calling `initialize()` again (after an AJAX redraw) replaces the click handlers instead of adding more.

## Commands

- `npm run build`: JavaScript and CSS into `dist/`.
