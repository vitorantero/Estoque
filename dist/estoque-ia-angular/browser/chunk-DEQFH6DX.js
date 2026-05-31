import {
  Injectable,
  effect,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-SAWBXWAZ.js";

// src/app/core/services/theme.service.ts
var ThemeService = class _ThemeService {
  theme = signal("dark");
  constructor() {
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "light" || stored === "dark")
        this.theme.set(stored);
    } catch {
    }
    effect(() => {
      const t = this.theme();
      document.documentElement.classList.toggle("dark", t === "dark");
      try {
        localStorage.setItem("theme", t);
      } catch {
      }
    });
  }
  setTheme(theme) {
    this.theme.set(theme);
  }
  toggle() {
    this.theme.update((t) => t === "dark" ? "light" : "dark");
  }
  static \u0275fac = function ThemeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  ThemeService
};
//# sourceMappingURL=chunk-DEQFH6DX.js.map
