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
import '@fortawesome/fontawesome-free/css/all.css';
import 'theme-switcher-compostrap/theme-switcher.css';
import ThemeSwitcher from 'theme-switcher-compostrap';

new ThemeSwitcher().initialize();
```

```html
<button type="button" class="btn btn-link theme-switcher p-0 text-decoration-none" data-theme-switcher>
	<i data-theme-switcher-icon class="fa-solid fa-moon"></i>
	<span data-theme-switcher-label>Dark mode</span>
</button>
```

## Built on
- [Bootstrap 5](https://getbootstrap.com)

## Introduction
The switcher updates Bootstrap's global theme by changing `data-bs-theme` on the `<html>` element.
The selected theme is stored in `localStorage`, so it is remembered on subsequent visits.

```html
<html lang="en" data-bs-theme="light">
```

This package uses Font Awesome for the default icon classes. Import Font Awesome CSS in your application when you want to display the icons.

## Styles
Import the bundled CSS:

```javascript
import 'theme-switcher-compostrap/theme-switcher.css';
```

Or import the SCSS source in your Sass entry point:

```scss
@import "theme-switcher-compostrap/src/scss/theme-switcher";
```

## Custom labels
Use data attributes when the text should be translated by your application or template system:

```html
<button
	type="button"
	data-theme-switcher
	data-theme-light-label="Light mode"
	data-theme-dark-label="Dark mode"
>
	<i data-theme-switcher-icon></i>
	<span data-theme-switcher-label></span>
</button>
```

`data-theme-light-label` is shown when the current theme is dark and the button switches to light mode.
`data-theme-dark-label` is shown when the current theme is light and the button switches to dark mode.

The shorter `data-light-label` and `data-dark-label` attributes are also supported.

## Custom icons

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

The shorter `data-light-icon` and `data-dark-icon` attributes are also supported.

## Options

```javascript
new ThemeSwitcher({
	selector: '[data-theme-switcher]',
	storageKey: 'bootstrap-theme',
	defaultTheme: 'light',
	lightIcon: 'fa-solid fa-sun',
	darkIcon: 'fa-solid fa-moon',
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
