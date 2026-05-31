import {
  Component,
  Input,
  setClassMetadata,
  statusOf,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-SAWBXWAZ.js";

// src/app/shared/components/status-badge/status-badge.component.ts
var StatusBadgeComponent = class _StatusBadgeComponent {
  product;
  get label() {
    const s = statusOf(this.product);
    if (s === "normal")
      return "Estoque Normal";
    if (s === "low")
      return "Estoque Baixo";
    return "Sem Estoque";
  }
  get classes() {
    const s = statusOf(this.product);
    if (s === "normal")
      return "bg-primary/15 text-primary border-primary/30";
    if (s === "low")
      return "bg-warning/15 text-warning border-warning/30";
    return "bg-destructive/15 text-destructive border-destructive/30";
  }
  static \u0275fac = function StatusBadgeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StatusBadgeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatusBadgeComponent, selectors: [["app-status-badge"]], inputs: { product: "product" }, decls: 3, vars: 3, consts: [[1, "inline-flex", "items-center", "gap-1.5", "rounded-full", "border", "px-2.5", "py-0.5", "text-xs", "font-medium"], [1, "size-1.5", "rounded-full", "bg-current"]], template: function StatusBadgeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "span", 0);
      \u0275\u0275element(1, "span", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classMap(ctx.classes);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.label, " ");
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatusBadgeComponent, [{
    type: Component,
    args: [{
      selector: "app-status-badge",
      standalone: true,
      template: `
    <span
      class="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium"
      [class]="classes"
    >
      <span class="size-1.5 rounded-full bg-current"></span>
      {{ label }}
    </span>
  `
    }]
  }], null, { product: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatusBadgeComponent, { className: "StatusBadgeComponent", filePath: "src/app/shared/components/status-badge/status-badge.component.ts", lineNumber: 17 });
})();

export {
  StatusBadgeComponent
};
//# sourceMappingURL=chunk-YL4EA4LD.js.map
