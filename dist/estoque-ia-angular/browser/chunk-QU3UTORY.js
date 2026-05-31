import {
  ScannerDialogComponent,
  StoreService
} from "./chunk-F2RTPAA2.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-Y6ZJM62F.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-MHPDYUX5.js";
import {
  CATEGORIES,
  Component,
  IconComponent,
  ToastService,
  UNITS,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-SAWBXWAZ.js";
import "./chunk-TXDUYLVM.js";

// src/app/pages/cadastro/cadastro.component.ts
function CadastroComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    \u0275\u0275property("value", c_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r1);
  }
}
function CadastroComponent_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r2 = ctx.$implicit;
    \u0275\u0275property("value", u_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r2);
  }
}
var CadastroComponent = class _CadastroComponent {
  store = inject(StoreService);
  toast = inject(ToastService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  categories = CATEGORIES;
  units = UNITS;
  scanOpen = false;
  sku = "";
  name = "";
  category = "";
  minQty = "";
  qty = "";
  unit = "Un";
  cost = "";
  description = "";
  ngOnInit() {
    this.route.queryParams.subscribe((p) => {
      if (typeof p["sku"] === "string")
        this.sku = p["sku"];
    });
  }
  submit(e) {
    e.preventDefault();
    if (!this.sku || !this.name || !this.category) {
      this.toast.error("Preencha SKU, nome e categoria.");
      return;
    }
    if (this.store.findBySku(this.sku)) {
      this.toast.error("J\xE1 existe um produto com este SKU.");
      return;
    }
    this.store.addProduct({
      sku: this.sku.trim(),
      name: this.name.trim(),
      category: this.category,
      minQty: Number(this.minQty) || 0,
      qty: Number(this.qty) || 0,
      unit: this.unit,
      cost: Number(this.cost) || 0,
      description: this.description.trim()
    });
    this.toast.success("Material cadastrado com sucesso!");
    void this.router.navigate(["/inventario"], { queryParams: { q: "" } });
  }
  onScan(code) {
    this.sku = code;
  }
  static \u0275fac = function CadastroComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CadastroComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CadastroComponent, selectors: [["app-cadastro"]], decls: 60, vars: 9, consts: [[1, "space-y-6"], [1, "text-2xl", "font-bold", "tracking-tight"], [1, "text-sm", "text-muted-foreground"], [1, "rounded-xl", "border", "bg-card", "shadow"], [1, "flex", "flex-col", "space-y-1.5", "p-6"], [1, "flex", "items-center", "gap-2", "text-base", "font-semibold"], ["name", "package-plus", 1, "size-4"], [1, "p-6", "pt-0"], [1, "grid", "grid-cols-1", "gap-4", "sm:grid-cols-2", 3, "submit"], [1, "space-y-2", "sm:col-span-2"], [1, "text-sm", "font-medium"], [1, "flex", "gap-2"], ["name", "sku", "placeholder", "Ex: 7891234567890", 1, "flex", "h-9", "w-full", "rounded-md", "border", "px-3", "text-sm", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "inline-flex", "h-9", "shrink-0", "items-center", "justify-center", "gap-2", "rounded-md", "bg-secondary", "px-4", "text-sm", 3, "click"], ["name", "scan-line", 1, "size-4"], ["name", "name", 1, "flex", "h-9", "w-full", "rounded-md", "border", "px-3", "text-sm", 3, "ngModelChange", "ngModel"], [1, "space-y-2"], ["name", "category", 1, "flex", "h-9", "w-full", "rounded-md", "border", "px-3", "text-sm", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], ["name", "unit", 1, "flex", "h-9", "w-full", "rounded-md", "border", "px-3", "text-sm", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "name", "qty", 1, "flex", "h-9", "w-full", "rounded-md", "border", "px-3", "text-sm", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "name", "minQty", 1, "flex", "h-9", "w-full", "rounded-md", "border", "px-3", "text-sm", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "step", "0.01", "name", "cost", 1, "flex", "h-9", "w-full", "rounded-md", "border", "px-3", "text-sm", 3, "ngModelChange", "ngModel"], ["rows", "3", "name", "description", 1, "flex", "w-full", "rounded-md", "border", "px-3", "py-2", "text-sm", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-end", "sm:col-span-2"], ["type", "submit", 1, "inline-flex", "h-10", "items-center", "justify-center", "gap-2", "rounded-md", "bg-primary", "px-8", "text-sm", "font-medium", "text-primary-foreground"], [3, "openChange", "scan", "open"]], template: function CadastroComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Cadastro de Materiais");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Adicione um novo produto ao seu estoque.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 3)(7, "div", 4)(8, "h3", 5);
      \u0275\u0275element(9, "app-icon", 6);
      \u0275\u0275text(10, " Dados do Produto ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 7)(12, "form", 8);
      \u0275\u0275listener("submit", function CadastroComponent_Template_form_submit_12_listener($event) {
        return ctx.submit($event);
      });
      \u0275\u0275elementStart(13, "div", 9)(14, "label", 10);
      \u0275\u0275text(15, "C\xF3digo de Barras / SKU *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 11)(17, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function CadastroComponent_Template_input_ngModelChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.sku, $event) || (ctx.sku = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 13);
      \u0275\u0275listener("click", function CadastroComponent_Template_button_click_18_listener() {
        return ctx.scanOpen = true;
      });
      \u0275\u0275element(19, "app-icon", 14);
      \u0275\u0275text(20, " Escanear ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 9)(22, "label", 10);
      \u0275\u0275text(23, "Nome do Produto *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function CadastroComponent_Template_input_ngModelChange_24_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.name, $event) || (ctx.name = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 16)(26, "label", 10);
      \u0275\u0275text(27, "Categoria *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "select", 17);
      \u0275\u0275twoWayListener("ngModelChange", function CadastroComponent_Template_select_ngModelChange_28_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.category, $event) || (ctx.category = $event);
        return $event;
      });
      \u0275\u0275elementStart(29, "option", 18);
      \u0275\u0275text(30, "Selecione");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(31, CadastroComponent_For_32_Template, 2, 2, "option", 19, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 16)(34, "label", 10);
      \u0275\u0275text(35, "Unidade de Medida");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "select", 20);
      \u0275\u0275twoWayListener("ngModelChange", function CadastroComponent_Template_select_ngModelChange_36_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.unit, $event) || (ctx.unit = $event);
        return $event;
      });
      \u0275\u0275repeaterCreate(37, CadastroComponent_For_38_Template, 2, 2, "option", 19, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 16)(40, "label", 10);
      \u0275\u0275text(41, "Quantidade Inicial");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "input", 21);
      \u0275\u0275twoWayListener("ngModelChange", function CadastroComponent_Template_input_ngModelChange_42_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.qty, $event) || (ctx.qty = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 16)(44, "label", 10);
      \u0275\u0275text(45, "Quantidade M\xEDnima (Alerta)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function CadastroComponent_Template_input_ngModelChange_46_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.minQty, $event) || (ctx.minQty = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 9)(48, "label", 10);
      \u0275\u0275text(49, "Pre\xE7o de Custo (R$)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "input", 23);
      \u0275\u0275twoWayListener("ngModelChange", function CadastroComponent_Template_input_ngModelChange_50_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.cost, $event) || (ctx.cost = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 9)(52, "label", 10);
      \u0275\u0275text(53, "Descri\xE7\xE3o");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "textarea", 24);
      \u0275\u0275twoWayListener("ngModelChange", function CadastroComponent_Template_textarea_ngModelChange_54_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.description, $event) || (ctx.description = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "div", 25)(56, "button", 26);
      \u0275\u0275element(57, "app-icon", 6);
      \u0275\u0275text(58, " Cadastrar Material ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(59, "app-scanner-dialog", 27);
      \u0275\u0275listener("openChange", function CadastroComponent_Template_app_scanner_dialog_openChange_59_listener($event) {
        return ctx.scanOpen = $event;
      })("scan", function CadastroComponent_Template_app_scanner_dialog_scan_59_listener($event) {
        return ctx.onScan($event);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(17);
      \u0275\u0275twoWayProperty("ngModel", ctx.sku);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.name);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.category);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.categories);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.unit);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.units);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.qty);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.minQty);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.cost);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.description);
      \u0275\u0275advance(5);
      \u0275\u0275property("open", ctx.scanOpen);
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, NgModel, NgForm, IconComponent, ScannerDialogComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CadastroComponent, [{
    type: Component,
    args: [{ selector: "app-cadastro", standalone: true, imports: [FormsModule, IconComponent, ScannerDialogComponent], template: '<div class="space-y-6">\n  <div>\n    <h1 class="text-2xl font-bold tracking-tight">Cadastro de Materiais</h1>\n    <p class="text-sm text-muted-foreground">Adicione um novo produto ao seu estoque.</p>\n  </div>\n\n  <div class="rounded-xl border bg-card shadow">\n    <div class="flex flex-col space-y-1.5 p-6">\n      <h3 class="flex items-center gap-2 text-base font-semibold">\n        <app-icon name="package-plus" class="size-4" />\n        Dados do Produto\n      </h3>\n    </div>\n    <div class="p-6 pt-0">\n      <form class="grid grid-cols-1 gap-4 sm:grid-cols-2" (submit)="submit($event)">\n        <div class="space-y-2 sm:col-span-2">\n          <label class="text-sm font-medium">C\xF3digo de Barras / SKU *</label>\n          <div class="flex gap-2">\n            <input class="flex h-9 w-full rounded-md border px-3 text-sm" [(ngModel)]="sku" name="sku" placeholder="Ex: 7891234567890" />\n            <button type="button" class="inline-flex h-9 shrink-0 items-center justify-center gap-2 rounded-md bg-secondary px-4 text-sm" (click)="scanOpen = true">\n              <app-icon name="scan-line" class="size-4" />\n              Escanear\n            </button>\n          </div>\n        </div>\n        <div class="space-y-2 sm:col-span-2">\n          <label class="text-sm font-medium">Nome do Produto *</label>\n          <input class="flex h-9 w-full rounded-md border px-3 text-sm" [(ngModel)]="name" name="name" />\n        </div>\n        <div class="space-y-2">\n          <label class="text-sm font-medium">Categoria *</label>\n          <select class="flex h-9 w-full rounded-md border px-3 text-sm" [(ngModel)]="category" name="category">\n            <option value="">Selecione</option>\n            @for (c of categories; track c) {\n              <option [value]="c">{{ c }}</option>\n            }\n          </select>\n        </div>\n        <div class="space-y-2">\n          <label class="text-sm font-medium">Unidade de Medida</label>\n          <select class="flex h-9 w-full rounded-md border px-3 text-sm" [(ngModel)]="unit" name="unit">\n            @for (u of units; track u) {\n              <option [value]="u">{{ u }}</option>\n            }\n          </select>\n        </div>\n        <div class="space-y-2">\n          <label class="text-sm font-medium">Quantidade Inicial</label>\n          <input type="number" min="0" class="flex h-9 w-full rounded-md border px-3 text-sm" [(ngModel)]="qty" name="qty" />\n        </div>\n        <div class="space-y-2">\n          <label class="text-sm font-medium">Quantidade M\xEDnima (Alerta)</label>\n          <input type="number" min="0" class="flex h-9 w-full rounded-md border px-3 text-sm" [(ngModel)]="minQty" name="minQty" />\n        </div>\n        <div class="space-y-2 sm:col-span-2">\n          <label class="text-sm font-medium">Pre\xE7o de Custo (R$)</label>\n          <input type="number" min="0" step="0.01" class="flex h-9 w-full rounded-md border px-3 text-sm" [(ngModel)]="cost" name="cost" />\n        </div>\n        <div class="space-y-2 sm:col-span-2">\n          <label class="text-sm font-medium">Descri\xE7\xE3o</label>\n          <textarea rows="3" class="flex w-full rounded-md border px-3 py-2 text-sm" [(ngModel)]="description" name="description"></textarea>\n        </div>\n        <div class="flex justify-end sm:col-span-2">\n          <button type="submit" class="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground">\n            <app-icon name="package-plus" class="size-4" />\n            Cadastrar Material\n          </button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<app-scanner-dialog [open]="scanOpen" (openChange)="scanOpen = $event" (scan)="onScan($event)" />\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CadastroComponent, { className: "CadastroComponent", filePath: "src/app/pages/cadastro/cadastro.component.ts", lineNumber: 16 });
})();
export {
  CadastroComponent
};
//# sourceMappingURL=chunk-QU3UTORY.js.map
