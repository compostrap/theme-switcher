//#region src/theme-switcher.js
var e = class {
	constructor(e = {}) {
		this.options = {
			selector: "[data-theme-switcher]",
			storageKey: "bootstrap-theme",
			defaultTheme: "light",
			lightIcon: "fa-solid fa-sun",
			darkIcon: "fa-solid fa-moon",
			lightLabel: "Light mode",
			darkLabel: "Dark mode",
			...e
		};
	}
	initialize(e = document) {
		this.root = e, this.documentElement = document.documentElement, this.switchers = [...e.querySelectorAll(this.options.selector)], this.setTheme(this.getInitialTheme(), !1);
		for (let e of this.switchers) e.addEventListener("click", () => {
			this.setTheme(this.getNextTheme());
		});
		return this;
	}
	getInitialTheme() {
		let e = localStorage.getItem(this.options.storageKey);
		if (e === "light" || e === "dark") return e;
		let t = this.documentElement.getAttribute("data-bs-theme");
		return t === "light" || t === "dark" ? t : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : this.options.defaultTheme;
	}
	getCurrentTheme() {
		return this.documentElement.getAttribute("data-bs-theme") === "dark" ? "dark" : "light";
	}
	getNextTheme() {
		return this.getCurrentTheme() === "dark" ? "light" : "dark";
	}
	setTheme(e, t = !0) {
		this.documentElement.setAttribute("data-bs-theme", e), t && localStorage.setItem(this.options.storageKey, e), this.updateSwitchers(e), this.dispatchChange(e);
	}
	updateSwitchers(e) {
		let t = e === "dark" ? "light" : "dark";
		for (let n of this.switchers) n.setAttribute("aria-pressed", String(e === "dark")), n.dataset.theme = e, this.updateIcon(n, t), this.updateLabel(n, t);
	}
	updateIcon(e, t) {
		let n = e.querySelector("[data-theme-switcher-icon]");
		n && (n.className = t === "light" ? this.getOption(e, "lightIcon") : this.getOption(e, "darkIcon"));
	}
	updateLabel(e, t) {
		let n = e.querySelector("[data-theme-switcher-label]");
		n && (n.textContent = t === "light" ? this.getOption(e, "lightLabel") : this.getOption(e, "darkLabel"));
	}
	getOption(e, t) {
		let n = `theme${t.charAt(0).toUpperCase()}${t.slice(1)}`;
		return e.dataset[n] || e.dataset[t] || this.options[t];
	}
	dispatchChange(e) {
		window.dispatchEvent(new CustomEvent("theme-switcher:change", { detail: { theme: e } }));
	}
};
//#endregion
export { e as default };
