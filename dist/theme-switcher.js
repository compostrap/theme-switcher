//#region src/theme-switcher.js
var e = /* @__PURE__ */ new WeakMap(), t = class {
	constructor(e = {}) {
		this.options = {
			selector: "[data-theme-switcher]",
			storageKey: "bootstrap-theme",
			defaultTheme: "light",
			lightIcon: "",
			darkIcon: "",
			lightLabel: "Light mode",
			darkLabel: "Dark mode",
			...e
		};
	}
	initialize(t = document) {
		this.root = t, this.documentElement = document.documentElement, this.switchers = [...t.querySelectorAll(this.options.selector)], this.setTheme(this.getInitialTheme(), !1);
		for (let t of this.switchers) {
			let n = e.get(t);
			n && t.removeEventListener("click", n);
			let r = () => {
				this.setTheme(this.getNextTheme());
			};
			t.addEventListener("click", r), e.set(t, r);
		}
		return this;
	}
	getInitialTheme() {
		let e;
		try {
			e = localStorage.getItem(this.options.storageKey);
		} catch {}
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
		if (this.documentElement.setAttribute("data-bs-theme", e), t) try {
			localStorage.setItem(this.options.storageKey, e);
		} catch {}
		this.updateSwitchers(e), this.dispatchChange(e);
	}
	updateSwitchers(e) {
		let t = e === "dark" ? "light" : "dark";
		for (let n of this.switchers) n.setAttribute("aria-pressed", String(e === "dark")), n.dataset.theme = e, this.updateIcon(n, t), this.updateLabel(n, t);
	}
	updateIcon(e, t) {
		let n = e.querySelector("[data-theme-switcher-icon]");
		if (!n) return;
		let r = t === "light" ? this.getOption(e, "lightIcon") : this.getOption(e, "darkIcon");
		r && (n.className = r);
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
export { t as ThemeSwitcher };
