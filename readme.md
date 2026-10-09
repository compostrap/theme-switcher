## Theme Switcher

Bootstrap 5.3 theme switcher with optional icon and label support.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/compostrap/theme-switcher/blob/master/license)
[![npm version](https://badge.fury.io/js/theme-switcher-compostrap.svg)](https://badge.fury.io/js/theme-switcher-compostrap)
[![Build status](https://github.com/compostrap/theme-switcher/actions/workflows/build.yml/badge.svg)](https://github.com/compostrap/theme-switcher/actions/workflows/build.yml)

## Installation

```bash
npm install theme-switcher-compostrap
```

## Usage

```javascript
import 'theme-switcher-compostrap/theme-switcher.css';
import { ThemeSwitcher } from 'theme-switcher-compostrap';

new ThemeSwitcher().initialize();
```

Use a simple text switch:

```html
<button type="button" class="btn btn-link theme-switcher" data-theme-switcher>
	<span data-theme-switcher-label>Dark mode</span>
</button>
```

Or add an icon from any icon library used by your project:

```html
<button
	type="button"
	class="btn btn-link theme-switcher"
	data-theme-switcher
	data-theme-light-icon="fa-solid fa-sun"
	data-theme-dark-icon="fa-solid fa-moon"
>
	<i data-theme-switcher-icon></i>
	<span data-theme-switcher-label>Dark mode</span>
</button>
```

The package does not install an icon library. Use Font Awesome, Bootstrap Icons, or any other icon set.
Labels and icon classes can be configured directly in HTML with `data-*` attributes or globally in
JavaScript options.

## Built on

- [Bootstrap 5](https://getbootstrap.com)

## Introduction

The switcher updates Bootstrap's global theme by changing `data-bs-theme` on the `<html>` element.
The selected theme is stored in `localStorage`, so it is remembered on subsequent visits.

```html
<html lang="en" data-bs-theme="light">
```

## Styles

Import the bundled CSS:

```javascript
import 'theme-switcher-compostrap/theme-switcher.css';
```

Or import the SCSS source in your Sass entry point:

```scss
@import 'theme-switcher-compostrap/src/scss/theme-switcher';
```

The bundled CSS only aligns the optional icon and label. Colors should come from your layout, for example
Bootstrap `nav-link` classes or your own navbar styles.

## Custom labels

Use data attributes when the text should be translated by your application or template system:

```html
<button
	type="button"
	data-theme-switcher
	data-theme-light-label="Light mode"
	data-theme-dark-label="Dark mode"
>
	<span data-theme-switcher-label></span>
</button>
```

`data-theme-light-label` is shown when the current theme is dark and the button switches to light mode.
`data-theme-dark-label` is shown when the current theme is light and the button switches to dark mode.

The shorter `data-light-label` and `data-dark-label` attributes are also supported.

You can also configure labels from JavaScript:

```html
<button type="button" data-theme-switcher>
	<span data-theme-switcher-label></span>
</button>
```

```javascript
new ThemeSwitcher({
	lightLabel: 'Light mode',
	darkLabel: 'Dark mode',
}).initialize();
```

## Custom icons

Icons are optional. Add an element with `data-theme-switcher-icon` only when your project loads an icon
library.

Set icon classes in HTML:

```html
<button
	type="button"
	data-theme-switcher
	data-theme-light-icon="fa-solid fa-sun"
	data-theme-dark-icon="fa-solid fa-moon"
>
	<i data-theme-switcher-icon></i>
	<span data-theme-switcher-label></span>
</button>
```

Or configure icon classes from JavaScript:

```html
<button type="button" data-theme-switcher>
	<i data-theme-switcher-icon></i>
	<span data-theme-switcher-label></span>
</button>
```

```javascript
new ThemeSwitcher({
	lightIcon: 'fa-solid fa-sun',
	darkIcon: 'fa-solid fa-moon',
}).initialize();
```

Bootstrap Icons work the same way:

```html
<button
	type="button"
	data-theme-switcher
	data-theme-light-icon="bi bi-sun-fill"
	data-theme-dark-icon="bi bi-moon-fill"
>
	<i data-theme-switcher-icon></i>
	<span data-theme-switcher-label></span>
</button>
```

The shorter `data-light-icon` and `data-dark-icon` attributes are also supported.

## Options

```javascript
new ThemeSwitcher({
	selector: '[data-theme-switcher]',
	storageKey: 'bootstrap-theme',
	defaultTheme: 'light',
	lightIcon: '',
	darkIcon: '',
	lightLabel: 'Light mode',
	darkLabel: 'Dark mode',
}).initialize();
```

## Events

The switcher dispatches a `theme-switcher:change` event on `window` after each theme update:

```javascript
window.addEventListener('theme-switcher:change', (event) => {
	console.log(event.detail.theme);
});
```
