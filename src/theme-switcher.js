export default class ThemeSwitcher {
	constructor(options = {}) {
		this.options = {
			selector: '[data-theme-switcher]',
			storageKey: 'bootstrap-theme',
			defaultTheme: 'light',
			lightIcon: '',
			darkIcon: '',
			lightLabel: 'Light mode',
			darkLabel: 'Dark mode',
			...options,
		};
	}

	initialize(root = document) {
		this.root = root;
		this.documentElement = document.documentElement;
		this.switchers = [...root.querySelectorAll(this.options.selector)];

		this.setTheme(this.getInitialTheme(), false);

		for (const switcher of this.switchers) {
			switcher.addEventListener('click', () => {
				this.setTheme(this.getNextTheme());
			});
		}

		return this;
	}

	getInitialTheme() {
		const storedTheme = localStorage.getItem(this.options.storageKey);

		if (storedTheme === 'light' || storedTheme === 'dark') {
			return storedTheme;
		}

		const currentTheme = this.documentElement.getAttribute('data-bs-theme');

		if (currentTheme === 'light' || currentTheme === 'dark') {
			return currentTheme;
		}

		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			return 'dark';
		}

		return this.options.defaultTheme;
	}

	getCurrentTheme() {
		return this.documentElement.getAttribute('data-bs-theme') === 'dark'
			? 'dark'
			: 'light';
	}

	getNextTheme() {
		return this.getCurrentTheme() === 'dark' ? 'light' : 'dark';
	}

	setTheme(theme, persist = true) {
		this.documentElement.setAttribute('data-bs-theme', theme);

		if (persist) {
			localStorage.setItem(this.options.storageKey, theme);
		}

		this.updateSwitchers(theme);
		this.dispatchChange(theme);
	}

	updateSwitchers(theme) {
		const targetTheme = theme === 'dark' ? 'light' : 'dark';

		for (const switcher of this.switchers) {
			switcher.setAttribute('aria-pressed', String(theme === 'dark'));
			switcher.dataset.theme = theme;

			this.updateIcon(switcher, targetTheme);
			this.updateLabel(switcher, targetTheme);
		}
	}

	updateIcon(switcher, targetTheme) {
		const icon = switcher.querySelector('[data-theme-switcher-icon]');

		if (!icon) {
			return;
		}

		icon.className = targetTheme === 'light'
			? this.getOption(switcher, 'lightIcon')
			: this.getOption(switcher, 'darkIcon');
	}

	updateLabel(switcher, targetTheme) {
		const label = switcher.querySelector('[data-theme-switcher-label]');

		if (!label) {
			return;
		}

		label.textContent = targetTheme === 'light'
			? this.getOption(switcher, 'lightLabel')
			: this.getOption(switcher, 'darkLabel');
	}

	getOption(switcher, name) {
		const themeName = `theme${name.charAt(0).toUpperCase()}${name.slice(1)}`;

		return switcher.dataset[themeName]
			|| switcher.dataset[name]
			|| this.options[name];
	}

	dispatchChange(theme) {
		window.dispatchEvent(new CustomEvent('theme-switcher:change', {
			detail: { theme },
		}));
	}
}
