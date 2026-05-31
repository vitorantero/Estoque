import {
  StatusBadgeComponent
} from "./chunk-YL4EA4LD.js";
import {
  ScannerDialogComponent,
  StoreService
} from "./chunk-F2RTPAA2.js";
import {
  ActivatedRoute
} from "./chunk-Y6ZJM62F.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-MHPDYUX5.js";
import {
  CATEGORIES,
  Component,
  EventEmitter,
  IN_REASONS,
  IconComponent,
  Input,
  OUT_REASONS,
  Output,
  ToastService,
  computed,
  filterProducts,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-SAWBXWAZ.js";
import "./chunk-TXDUYLVM.js";

// src/app/shared/components/edit-product-dialog/edit-product-dialog.component.ts
function EditProductDialogComponent_Conditional_0_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275property("value", c_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r3);
  }
}
function EditProductDialogComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function EditProductDialogComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function EditProductDialogComponent_Conditional_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h2", 3);
    \u0275\u0275text(3, "Editar Produto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "label", 6);
    \u0275\u0275text(7, "Nome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 7);
    \u0275\u0275twoWayListener("ngModelChange", function EditProductDialogComponent_Conditional_0_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.name, $event) || (ctx_r1.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 5)(10, "label", 6);
    \u0275\u0275text(11, "Categoria");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 7);
    \u0275\u0275twoWayListener("ngModelChange", function EditProductDialogComponent_Conditional_0_Template_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.category, $event) || (ctx_r1.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(13, EditProductDialogComponent_Conditional_0_For_14_Template, 2, 2, "option", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 9)(16, "label", 6);
    \u0275\u0275text(17, "Qtd. M\xEDnima");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function EditProductDialogComponent_Conditional_0_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.minQty, $event) || (ctx_r1.minQty = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 9)(20, "label", 6);
    \u0275\u0275text(21, "Custo (R$)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function EditProductDialogComponent_Conditional_0_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.cost, $event) || (ctx_r1.cost = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 5)(24, "label", 6);
    \u0275\u0275text(25, "Descri\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "textarea", 12);
    \u0275\u0275twoWayListener("ngModelChange", function EditProductDialogComponent_Conditional_0_Template_textarea_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.description, $event) || (ctx_r1.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 13)(28, "button", 14);
    \u0275\u0275listener("click", function EditProductDialogComponent_Conditional_0_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(29, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 15);
    \u0275\u0275listener("click", function EditProductDialogComponent_Conditional_0_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(31, "Salvar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.category);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.minQty);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.cost);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.description);
  }
}
var EditProductDialogComponent = class _EditProductDialogComponent {
  store = inject(StoreService);
  toast = inject(ToastService);
  categories = CATEGORIES;
  product = null;
  closed = new EventEmitter();
  name = "";
  category = "";
  minQty = "";
  cost = "";
  description = "";
  ngOnChanges() {
    if (this.product) {
      this.name = this.product.name;
      this.category = this.product.category;
      this.minQty = String(this.product.minQty);
      this.cost = String(this.product.cost);
      this.description = this.product.description ?? "";
    }
  }
  close() {
    this.closed.emit();
  }
  save() {
    if (!this.product || !this.name.trim()) {
      this.toast.error("Informe o nome do produto.");
      return;
    }
    this.store.updateProduct(this.product.id, {
      name: this.name.trim(),
      category: this.category,
      minQty: Number(this.minQty) || 0,
      cost: Number(this.cost) || 0,
      description: this.description.trim()
    });
    this.toast.success("Produto atualizado!");
    this.close();
  }
  static \u0275fac = function EditProductDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditProductDialogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditProductDialogComponent, selectors: [["app-edit-product-dialog"]], inputs: { product: "product" }, outputs: { closed: "closed" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [[1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-black/80", "p-4"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-black/80", "p-4", 3, "click"], [1, "grid", "w-full", "max-w-md", "gap-4", "rounded-lg", "border", "bg-background", "p-6", "shadow-lg", 3, "click"], [1, "text-lg", "font-semibold"], [1, "grid", "grid-cols-2", "gap-3"], [1, "col-span-2", "space-y-2"], [1, "text-sm", "font-medium"], [1, "flex", "h-9", "w-full", "rounded-md", "border", "px-3", "text-sm", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "space-y-2"], ["type", "number", "min", "0", 1, "flex", "h-9", "w-full", "rounded-md", "border", "px-3", "text-sm", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "step", "0.01", 1, "flex", "h-9", "w-full", "rounded-md", "border", "px-3", "text-sm", 3, "ngModelChange", "ngModel"], ["rows", "2", 1, "flex", "w-full", "rounded-md", "border", "px-3", "py-2", "text-sm", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-end", "gap-2"], ["type", "button", 1, "inline-flex", "h-9", "items-center", "justify-center", "rounded-md", "px-4", "text-sm", "hover:bg-accent", 3, "click"], ["type", "button", 1, "inline-flex", "h-9", "items-center", "justify-center", "rounded-md", "bg-primary", "px-4", "text-sm", "text-primary-foreground", 3, "click"]], template: function EditProductDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, EditProductDialogComponent_Conditional_0_Template, 32, 5, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.product ? 0 : -1);
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditProductDialogComponent, [{
    type: Component,
    args: [{
      selector: "app-edit-product-dialog",
      standalone: true,
      imports: [FormsModule],
      template: `
    @if (product) {
      <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" (click)="close()">
        <div class="grid w-full max-w-md gap-4 rounded-lg border bg-background p-6 shadow-lg" (click)="$event.stopPropagation()">
          <h2 class="text-lg font-semibold">Editar Produto</h2>
          <div class="grid grid-cols-2 gap-3">
            <div class="col-span-2 space-y-2">
              <label class="text-sm font-medium">Nome</label>
              <input class="flex h-9 w-full rounded-md border px-3 text-sm" [(ngModel)]="name" />
            </div>
            <div class="col-span-2 space-y-2">
              <label class="text-sm font-medium">Categoria</label>
              <select class="flex h-9 w-full rounded-md border px-3 text-sm" [(ngModel)]="category">
                @for (c of categories; track c) {
                  <option [value]="c">{{ c }}</option>
                }
              </select>
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium">Qtd. M\xEDnima</label>
              <input type="number" min="0" class="flex h-9 w-full rounded-md border px-3 text-sm" [(ngModel)]="minQty" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium">Custo (R$)</label>
              <input type="number" min="0" step="0.01" class="flex h-9 w-full rounded-md border px-3 text-sm" [(ngModel)]="cost" />
            </div>
            <div class="col-span-2 space-y-2">
              <label class="text-sm font-medium">Descri\xE7\xE3o</label>
              <textarea rows="2" class="flex w-full rounded-md border px-3 py-2 text-sm" [(ngModel)]="description"></textarea>
            </div>
          </div>
          <div class="flex justify-end gap-2">
            <button type="button" class="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm hover:bg-accent" (click)="close()">Cancelar</button>
            <button type="button" class="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm text-primary-foreground" (click)="save()">Salvar</button>
          </div>
        </div>
      </div>
    }
  `
    }]
  }], null, { product: [{
    type: Input
  }], closed: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditProductDialogComponent, { className: "EditProductDialogComponent", filePath: "src/app/shared/components/edit-product-dialog/edit-product-dialog.component.ts", lineNumber: 51 });
})();

// src/app/shared/components/quick-movement-dialog/quick-movement-dialog.component.ts
function QuickMovementDialogComponent_Conditional_0_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    \u0275\u0275property("value", r_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r3);
  }
}
function QuickMovementDialogComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function QuickMovementDialogComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function QuickMovementDialogComponent_Conditional_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h2", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5)(7, "label", 6);
    \u0275\u0275text(8, "Quantidade");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 7);
    \u0275\u0275twoWayListener("ngModelChange", function QuickMovementDialogComponent_Conditional_0_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.qty, $event) || (ctx_r1.qty = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 5)(11, "label", 6);
    \u0275\u0275text(12, "Motivo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 8);
    \u0275\u0275twoWayListener("ngModelChange", function QuickMovementDialogComponent_Conditional_0_Template_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.reason, $event) || (ctx_r1.reason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(14, QuickMovementDialogComponent_Conditional_0_For_15_Template, 2, 2, "option", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 10)(17, "button", 11);
    \u0275\u0275listener("click", function QuickMovementDialogComponent_Conditional_0_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(18, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 12);
    \u0275\u0275listener("click", function QuickMovementDialogComponent_Conditional_0_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirm());
    });
    \u0275\u0275text(20, "Confirmar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.type === "in" ? "Registrar Entrada" : "Registrar Sa\xEDda");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", ctx_r1.product.name, " \xB7 ", ctx_r1.product.qty, " ", ctx_r1.product.unit, " em estoque");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.qty);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.reason);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.reasons);
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r1.type === "in" ? "bg-primary" : "bg-destructive");
  }
}
var QuickMovementDialogComponent = class _QuickMovementDialogComponent {
  store = inject(StoreService);
  toast = inject(ToastService);
  product = null;
  type = null;
  closed = new EventEmitter();
  qty = "1";
  reason = "";
  reasons = [];
  ngOnChanges() {
    if (this.type) {
      this.reasons = this.type === "in" ? IN_REASONS : OUT_REASONS;
      this.reason = this.reasons[0];
      this.qty = "1";
    }
  }
  close() {
    this.closed.emit();
  }
  confirm() {
    if (!this.product || !this.type)
      return;
    const n = Number(this.qty);
    if (!n || n <= 0) {
      this.toast.error("Quantidade inv\xE1lida.");
      return;
    }
    const ok = this.store.registerMovement({
      productId: this.product.id,
      type: this.type,
      qty: n,
      reason: this.reason
    });
    if (ok) {
      this.toast.success(`${this.type === "in" ? "Entrada" : "Sa\xEDda"} registrada com sucesso!`);
      this.close();
    } else {
      this.toast.error("N\xE3o foi poss\xEDvel registrar a movimenta\xE7\xE3o.");
    }
  }
  static \u0275fac = function QuickMovementDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuickMovementDialogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuickMovementDialogComponent, selectors: [["app-quick-movement-dialog"]], inputs: { product: "product", type: "type" }, outputs: { closed: "closed" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [[1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-black/80", "p-4"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-black/80", "p-4", 3, "click"], [1, "grid", "w-full", "max-w-md", "gap-4", "rounded-lg", "border", "bg-background", "p-6", "shadow-lg", 3, "click"], [1, "text-lg", "font-semibold"], [1, "text-sm", "text-muted-foreground"], [1, "space-y-2"], [1, "text-sm", "font-medium"], ["type", "number", "min", "1", 1, "flex", "h-9", "w-full", "rounded-md", "border", "px-3", "text-sm", 3, "ngModelChange", "ngModel"], [1, "flex", "h-9", "w-full", "rounded-md", "border", "px-3", "text-sm", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "flex", "justify-end", "gap-2"], ["type", "button", 1, "inline-flex", "h-9", "items-center", "justify-center", "rounded-md", "px-4", "text-sm", "hover:bg-accent", 3, "click"], ["type", "button", 1, "inline-flex", "h-9", "items-center", "justify-center", "rounded-md", "px-4", "text-sm", "text-primary-foreground", 3, "click"]], template: function QuickMovementDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, QuickMovementDialogComponent_Conditional_0_Template, 21, 8, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.product && ctx.type ? 0 : -1);
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuickMovementDialogComponent, [{
    type: Component,
    args: [{
      selector: "app-quick-movement-dialog",
      standalone: true,
      imports: [FormsModule],
      template: `
    @if (product && type) {
      <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" (click)="close()">
        <div class="grid w-full max-w-md gap-4 rounded-lg border bg-background p-6 shadow-lg" (click)="$event.stopPropagation()">
          <h2 class="text-lg font-semibold">{{ type === 'in' ? 'Registrar Entrada' : 'Registrar Sa\xEDda' }}</h2>
          <p class="text-sm text-muted-foreground">{{ product.name }} \xB7 {{ product.qty }} {{ product.unit }} em estoque</p>
          <div class="space-y-2">
            <label class="text-sm font-medium">Quantidade</label>
            <input type="number" min="1" class="flex h-9 w-full rounded-md border px-3 text-sm" [(ngModel)]="qty" />
          </div>
          <div class="space-y-2">
            <label class="text-sm font-medium">Motivo</label>
            <select class="flex h-9 w-full rounded-md border px-3 text-sm" [(ngModel)]="reason">
              @for (r of reasons; track r) {
                <option [value]="r">{{ r }}</option>
              }
            </select>
          </div>
          <div class="flex justify-end gap-2">
            <button type="button" class="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm hover:bg-accent" (click)="close()">Cancelar</button>
            <button type="button" class="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm text-primary-foreground" [class]="type === 'in' ? 'bg-primary' : 'bg-destructive'" (click)="confirm()">Confirmar</button>
          </div>
        </div>
      </div>
    }
  `
    }]
  }], null, { product: [{
    type: Input
  }], type: [{
    type: Input
  }], closed: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuickMovementDialogComponent, { className: "QuickMovementDialogComponent", filePath: "src/app/shared/components/quick-movement-dialog/quick-movement-dialog.component.ts", lineNumber: 38 });
})();

// src/app/pages/inventario/inventario.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function InventarioComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
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
function InventarioComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 22)(1, "td", 35)(2, "div", 36);
    \u0275\u0275element(3, "app-icon", 37);
    \u0275\u0275elementStart(4, "span", 38);
    \u0275\u0275text(5, "Nenhum produto encontrado.");
    \u0275\u0275elementEnd()()()();
  }
}
function InventarioComponent_For_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 28)(1, "td", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 41);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 42);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 43);
    \u0275\u0275element(10, "app-status-badge", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 45)(12, "div", 46)(13, "button", 47);
    \u0275\u0275listener("click", function InventarioComponent_For_52_Template_button_click_13_listener() {
      const p_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.detail.set(p_r3));
    });
    \u0275\u0275element(14, "app-icon", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 49);
    \u0275\u0275listener("click", function InventarioComponent_For_52_Template_button_click_15_listener() {
      const p_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.editTarget.set(p_r3));
    });
    \u0275\u0275element(16, "app-icon", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 51);
    \u0275\u0275listener("click", function InventarioComponent_For_52_Template_button_click_17_listener() {
      const p_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.deleteTarget.set(p_r3));
    });
    \u0275\u0275element(18, "app-icon", 52);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r3.sku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r3.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", p_r3.qty, " ", p_r3.unit, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("product", p_r3);
  }
}
function InventarioComponent_For_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 29);
    \u0275\u0275element(1, "td", 53);
    \u0275\u0275elementEnd();
  }
}
function InventarioComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "button", 54);
    \u0275\u0275listener("click", function InventarioComponent_Conditional_55_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.prevPage());
    });
    \u0275\u0275element(2, "app-icon", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 2);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 54);
    \u0275\u0275listener("click", function InventarioComponent_Conditional_55_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.nextPage());
    });
    \u0275\u0275element(6, "app-icon", 56);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.safePage() <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("P\xE1gina ", ctx_r3.safePage(), " de ", ctx_r3.totalPages(), "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.safePage() >= ctx_r3.totalPages());
  }
}
function InventarioComponent_Conditional_56_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r7.description);
  }
}
function InventarioComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275listener("click", function InventarioComponent_Conditional_56_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.detail.set(null));
    });
    \u0275\u0275elementStart(1, "div", 58);
    \u0275\u0275listener("click", function InventarioComponent_Conditional_56_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h2", 59);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 60);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 61)(7, "div")(8, "p", 62);
    \u0275\u0275text(9, "Categoria");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 63);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div")(13, "p", 62);
    \u0275\u0275text(14, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "app-status-badge", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div")(17, "p", 62);
    \u0275\u0275text(18, "Em estoque");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 63);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div")(22, "p", 62);
    \u0275\u0275text(23, "M\xEDnimo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 63);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div")(27, "p", 62);
    \u0275\u0275text(28, "Custo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p", 63);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(31, InventarioComponent_Conditional_56_Conditional_31_Template, 2, 1, "p", 64);
    \u0275\u0275elementStart(32, "div", 65)(33, "button", 66);
    \u0275\u0275listener("click", function InventarioComponent_Conditional_56_Template_button_click_33_listener() {
      const d_r7 = \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.editTarget.set(d_r7);
      return \u0275\u0275resetView(ctx_r3.detail.set(null));
    });
    \u0275\u0275text(34, "Editar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 67);
    \u0275\u0275listener("click", function InventarioComponent_Conditional_56_Template_button_click_35_listener() {
      const d_r7 = \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.moveTarget.set({ product: d_r7, type: "in" });
      return \u0275\u0275resetView(ctx_r3.detail.set(null));
    });
    \u0275\u0275text(36, "Entrada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 68);
    \u0275\u0275listener("click", function InventarioComponent_Conditional_56_Template_button_click_37_listener() {
      const d_r7 = \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.moveTarget.set({ product: d_r7, type: "out" });
      return \u0275\u0275resetView(ctx_r3.detail.set(null));
    });
    \u0275\u0275text(38, "Sa\xEDda");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const d_r7 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(d_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r7.sku);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(d_r7.category);
    \u0275\u0275advance(4);
    \u0275\u0275property("product", d_r7);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", d_r7.qty, " ", d_r7.unit, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", d_r7.minQty, " ", d_r7.unit, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("R$ ", d_r7.cost.toFixed(2), "");
    \u0275\u0275advance();
    \u0275\u0275conditional(d_r7.description ? 31 : -1);
  }
}
function InventarioComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275listener("click", function InventarioComponent_Conditional_57_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.deleteTarget.set(null));
    });
    \u0275\u0275elementStart(1, "div", 58);
    \u0275\u0275listener("click", function InventarioComponent_Conditional_57_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h2", 59);
    \u0275\u0275text(3, "Excluir produto do estoque?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 2);
    \u0275\u0275text(5, "Tem certeza que deseja remover ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 69)(10, "button", 70);
    \u0275\u0275listener("click", function InventarioComponent_Conditional_57_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.deleteTarget.set(null));
    });
    \u0275\u0275text(11, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 71);
    \u0275\u0275listener("click", function InventarioComponent_Conditional_57_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.confirmDelete());
    });
    \u0275\u0275text(13, "Sim, excluir");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const t_r9 = ctx;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r9.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (SKU: ", t_r9.sku, ")? Esta a\xE7\xE3o n\xE3o pode ser desfeita.");
  }
}
var PER_PAGE = 10;
var InventarioComponent = class _InventarioComponent {
  store = inject(StoreService);
  toast = inject(ToastService);
  route = inject(ActivatedRoute);
  categories = CATEGORIES;
  perPage = PER_PAGE;
  query = signal("");
  cat = signal("all");
  status = signal("all");
  page = signal(1);
  scanOpen = signal(false);
  detail = signal(null);
  editTarget = signal(null);
  deleteTarget = signal(null);
  moveTarget = signal(null);
  products = this.store.products;
  filtered = computed(() => filterProducts(this.products(), this.query(), this.cat(), this.status()));
  totalPages = computed(() => Math.max(1, Math.ceil(this.filtered().length / PER_PAGE)));
  safePage = computed(() => Math.min(this.page(), this.totalPages()));
  pageItems = computed(() => {
    const p = this.safePage();
    return this.filtered().slice((p - 1) * PER_PAGE, p * PER_PAGE);
  });
  emptyRowCount = computed(() => {
    const len = this.pageItems().length;
    return len === 0 ? PER_PAGE - 1 : Math.max(0, PER_PAGE - len);
  });
  ngOnInit() {
    this.route.queryParams.subscribe((p) => {
      this.query.set(typeof p["q"] === "string" ? p["q"] : "");
      const st = typeof p["status"] === "string" ? p["status"] : "all";
      const allowed = ["all", "normal", "low", "out", "critical"];
      this.status.set(allowed.includes(st) ? st : "all");
      this.page.set(1);
    });
  }
  handleScan(code) {
    const sku = code.trim();
    if (!sku)
      return;
    const found = this.products().find((p) => p.sku === sku);
    this.query.set(sku);
    this.page.set(1);
    if (!found) {
      this.toast.error("C\xF3digo n\xE3o encontrado no estoque.");
      return;
    }
    const list = filterProducts(this.products(), sku, this.cat(), this.status());
    const idx = list.findIndex((p) => p.id === found.id);
    if (idx === -1) {
      this.toast.warning("Produto cadastrado, mas oculto pelos filtros atuais. Ajuste categoria ou status.");
      this.cat.set("all");
      this.status.set("all");
      const fullIdx = filterProducts(this.products(), sku, "all", "all").findIndex((p) => p.id === found.id);
      if (fullIdx >= 0)
        this.page.set(Math.floor(fullIdx / PER_PAGE) + 1);
    } else {
      this.page.set(Math.floor(idx / PER_PAGE) + 1);
      this.toast.success(`Produto encontrado: ${found.name}`);
    }
  }
  emptySlots() {
    return Array.from({ length: this.emptyRowCount() }, (_, i) => i);
  }
  prevPage() {
    this.page.update((p) => p - 1);
  }
  nextPage() {
    this.page.update((p) => p + 1);
  }
  confirmDelete() {
    const t = this.deleteTarget();
    if (!t)
      return;
    this.store.deleteProduct(t.id);
    this.toast.success(`"${t.name}" removido do estoque.`);
    if (this.detail()?.id === t.id)
      this.detail.set(null);
    if (this.editTarget()?.id === t.id)
      this.editTarget.set(null);
    this.deleteTarget.set(null);
  }
  static \u0275fac = function InventarioComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InventarioComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InventarioComponent, selectors: [["app-inventario"]], decls: 61, vars: 12, consts: [[1, "space-y-6"], [1, "text-2xl", "font-bold", "tracking-tight"], [1, "text-sm", "text-muted-foreground"], [1, "rounded-xl", "border", "bg-card", "shadow"], [1, "grid", "grid-cols-1", "gap-3", "p-4", "sm:grid-cols-3"], [1, "sm:col-span-3"], [1, "relative", "flex", "gap-2"], ["name", "search", 1, "pointer-events-none", "absolute", "left-3", "top-1/2", "size-4", "-translate-y-1/2", "text-muted-foreground"], ["placeholder", "Buscar por nome, SKU ou categoria...", 1, "flex", "h-9", "w-full", "rounded-md", "border", "bg-background", "pl-9", "pr-3", "text-sm", "shadow-sm", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "inline-flex", "h-9", "shrink-0", "items-center", "justify-center", "gap-2", "rounded-md", "bg-secondary", "px-4", "text-sm", 3, "click"], ["name", "scan-line", 1, "size-4"], [1, "hidden", "sm:inline"], [1, "flex", "h-9", "w-full", "rounded-md", "border", "px-3", "text-sm", 3, "ngModelChange", "ngModel"], ["value", "all"], [3, "value"], ["value", "critical"], ["value", "normal"], ["value", "low"], ["value", "out"], [1, "overflow-x-auto"], [1, "w-full", "caption-bottom", "text-sm"], [1, "[&_tr]:border-b"], [1, "h-14", "border-b"], [1, "h-10", "px-2", "text-left", "font-medium", "text-muted-foreground"], [1, "hidden", "h-10", "px-2", "text-left", "font-medium", "text-muted-foreground", "sm:table-cell"], [1, "hidden", "h-10", "px-2", "text-left", "font-medium", "text-muted-foreground", "md:table-cell"], [1, "h-10", "px-2", "text-right", "font-medium", "text-muted-foreground"], [1, "h-10", "w-[120px]", "px-2", "text-right", "font-medium", "text-muted-foreground"], [1, "h-14", "border-b", "transition-colors", "hover:bg-muted/50"], ["aria-hidden", "true", 1, "h-14", "border-b", "pointer-events-none"], [1, "flex", "items-center", "justify-center", "gap-2"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-black/80", "p-4"], ["mode", "confirm", 3, "openChange", "scan", "open"], [3, "closed", "product"], [3, "closed", "product", "type"], ["colspan", "6", 1, "p-2"], [1, "flex", "h-full", "flex-col", "items-center", "justify-center", "gap-1", "text-muted-foreground"], ["name", "boxes", 1, "size-6", "opacity-50"], [1, "text-sm"], [1, "p-2", "font-medium"], [1, "hidden", "p-2", "font-mono", "text-xs", "text-muted-foreground", "sm:table-cell"], [1, "hidden", "p-2", "md:table-cell"], [1, "p-2", "text-right", "tabular-nums"], [1, "p-2"], [3, "product"], [1, "p-2", "text-right"], [1, "flex", "items-center", "justify-end", "gap-0.5"], ["type", "button", "title", "Ver", 1, "inline-flex", "size-8", "items-center", "justify-center", "rounded-md", "hover:bg-accent", 3, "click"], ["name", "eye", 1, "size-4"], ["type", "button", "title", "Editar", 1, "inline-flex", "size-8", "items-center", "justify-center", "rounded-md", "hover:bg-accent", 3, "click"], ["name", "pencil", 1, "size-4"], ["type", "button", "title", "Excluir", 1, "inline-flex", "size-8", "items-center", "justify-center", "rounded-md", "text-destructive", "hover:bg-destructive/10", 3, "click"], ["name", "trash-2", 1, "size-4"], ["colspan", "6", 1, "p-0"], ["type", "button", 1, "inline-flex", "size-9", "items-center", "justify-center", "rounded-md", "border", 3, "click", "disabled"], ["name", "chevron-left", 1, "size-4"], ["name", "chevron-right", 1, "size-4"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-black/80", "p-4", 3, "click"], [1, "grid", "w-full", "max-w-md", "gap-4", "rounded-lg", "border", "bg-background", "p-6", "shadow-lg", 3, "click"], [1, "text-lg", "font-semibold"], [1, "font-mono", "text-sm", "text-muted-foreground"], [1, "grid", "grid-cols-2", "gap-3", "text-sm"], [1, "text-xs", "text-muted-foreground"], [1, "font-medium"], [1, "rounded-lg", "bg-muted/50", "p-3", "text-sm", "text-muted-foreground"], [1, "grid", "grid-cols-3", "gap-2"], ["type", "button", 1, "inline-flex", "h-9", "items-center", "justify-center", "rounded-md", "border", "text-sm", 3, "click"], ["type", "button", 1, "inline-flex", "h-9", "items-center", "justify-center", "rounded-md", "bg-primary", "text-sm", "text-primary-foreground", 3, "click"], ["type", "button", 1, "inline-flex", "h-9", "items-center", "justify-center", "rounded-md", "bg-destructive", "text-sm", "text-destructive-foreground", 3, "click"], [1, "flex", "justify-end", "gap-2"], ["type", "button", 1, "inline-flex", "h-9", "items-center", "justify-center", "rounded-md", "border", "px-4", "text-sm", 3, "click"], ["type", "button", 1, "inline-flex", "h-9", "items-center", "justify-center", "rounded-md", "bg-destructive", "px-4", "text-sm", "text-destructive-foreground", 3, "click"]], template: function InventarioComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Invent\xE1rio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "div", 6);
      \u0275\u0275element(10, "app-icon", 7);
      \u0275\u0275elementStart(11, "input", 8);
      \u0275\u0275listener("ngModelChange", function InventarioComponent_Template_input_ngModelChange_11_listener($event) {
        ctx.query.set($event);
        return ctx.page.set(1);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 9);
      \u0275\u0275listener("click", function InventarioComponent_Template_button_click_12_listener() {
        return ctx.scanOpen.set(true);
      });
      \u0275\u0275element(13, "app-icon", 10);
      \u0275\u0275elementStart(14, "span", 11);
      \u0275\u0275text(15, "Escanear");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(16, "select", 12);
      \u0275\u0275listener("ngModelChange", function InventarioComponent_Template_select_ngModelChange_16_listener($event) {
        ctx.cat.set($event);
        return ctx.page.set(1);
      });
      \u0275\u0275elementStart(17, "option", 13);
      \u0275\u0275text(18, "Todas as categorias");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(19, InventarioComponent_For_20_Template, 2, 2, "option", 14, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "select", 12);
      \u0275\u0275listener("ngModelChange", function InventarioComponent_Template_select_ngModelChange_21_listener($event) {
        ctx.status.set($event);
        return ctx.page.set(1);
      });
      \u0275\u0275elementStart(22, "option", 13);
      \u0275\u0275text(23, "Todos os status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "option", 15);
      \u0275\u0275text(25, "Estoque Cr\xEDtico");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "option", 16);
      \u0275\u0275text(27, "Estoque Normal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "option", 17);
      \u0275\u0275text(29, "Estoque Baixo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "option", 18);
      \u0275\u0275text(31, "Sem Estoque");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(32, "div", 3)(33, "div", 19)(34, "table", 20)(35, "thead", 21)(36, "tr", 22)(37, "th", 23);
      \u0275\u0275text(38, "Produto");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "th", 24);
      \u0275\u0275text(40, "SKU");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "th", 25);
      \u0275\u0275text(42, "Categoria");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "th", 26);
      \u0275\u0275text(44, "Qtd");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "th", 23);
      \u0275\u0275text(46, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "th", 27);
      \u0275\u0275text(48, "A\xE7\xF5es");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "tbody");
      \u0275\u0275template(50, InventarioComponent_Conditional_50_Template, 6, 0, "tr", 22);
      \u0275\u0275repeaterCreate(51, InventarioComponent_For_52_Template, 19, 6, "tr", 28, _forTrack0);
      \u0275\u0275repeaterCreate(53, InventarioComponent_For_54_Template, 2, 0, "tr", 29, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(55, InventarioComponent_Conditional_55_Template, 7, 4, "div", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275template(56, InventarioComponent_Conditional_56_Template, 39, 10, "div", 31)(57, InventarioComponent_Conditional_57_Template, 14, 2, "div", 31);
      \u0275\u0275elementStart(58, "app-scanner-dialog", 32);
      \u0275\u0275listener("openChange", function InventarioComponent_Template_app_scanner_dialog_openChange_58_listener($event) {
        return ctx.scanOpen.set($event);
      })("scan", function InventarioComponent_Template_app_scanner_dialog_scan_58_listener($event) {
        return ctx.handleScan($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "app-edit-product-dialog", 33);
      \u0275\u0275listener("closed", function InventarioComponent_Template_app_edit_product_dialog_closed_59_listener() {
        return ctx.editTarget.set(null);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "app-quick-movement-dialog", 34);
      \u0275\u0275listener("closed", function InventarioComponent_Template_app_quick_movement_dialog_closed_60_listener() {
        return ctx.moveTarget.set(null);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_9_0;
      let tmp_10_0;
      let tmp_13_0;
      let tmp_14_0;
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", ctx.filtered().length, " produto(s) encontrado(s).");
      \u0275\u0275advance(6);
      \u0275\u0275property("ngModel", ctx.query());
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.cat());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.categories);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.status());
      \u0275\u0275advance(29);
      \u0275\u0275conditional(ctx.pageItems().length === 0 ? 50 : -1);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.pageItems());
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.emptySlots());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.totalPages() > 1 ? 55 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_9_0 = ctx.detail()) ? 56 : -1, tmp_9_0);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_10_0 = ctx.deleteTarget()) ? 57 : -1, tmp_10_0);
      \u0275\u0275advance();
      \u0275\u0275property("open", ctx.scanOpen());
      \u0275\u0275advance();
      \u0275\u0275property("product", ctx.editTarget());
      \u0275\u0275advance();
      \u0275\u0275property("product", (tmp_13_0 = (tmp_13_0 = ctx.moveTarget()) == null ? null : tmp_13_0.product) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : null)("type", (tmp_14_0 = (tmp_14_0 = ctx.moveTarget()) == null ? null : tmp_14_0.type) !== null && tmp_14_0 !== void 0 ? tmp_14_0 : null);
    }
  }, dependencies: [
    FormsModule,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    DefaultValueAccessor,
    SelectControlValueAccessor,
    NgControlStatus,
    NgModel,
    IconComponent,
    StatusBadgeComponent,
    ScannerDialogComponent,
    EditProductDialogComponent,
    QuickMovementDialogComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InventarioComponent, [{
    type: Component,
    args: [{ selector: "app-inventario", standalone: true, imports: [
      FormsModule,
      IconComponent,
      StatusBadgeComponent,
      ScannerDialogComponent,
      EditProductDialogComponent,
      QuickMovementDialogComponent
    ], template: `<div class="space-y-6">
  <div>
    <h1 class="text-2xl font-bold tracking-tight">Invent\xE1rio</h1>
    <p class="text-sm text-muted-foreground">{{ filtered().length }} produto(s) encontrado(s).</p>
  </div>

  <div class="rounded-xl border bg-card shadow">
    <div class="grid grid-cols-1 gap-3 p-4 sm:grid-cols-3">
      <div class="sm:col-span-3">
        <div class="relative flex gap-2">
          <app-icon name="search" class="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input class="flex h-9 w-full rounded-md border bg-background pl-9 pr-3 text-sm shadow-sm" placeholder="Buscar por nome, SKU ou categoria..." [ngModel]="query()" (ngModelChange)="query.set($event); page.set(1)" />
          <button type="button" class="inline-flex h-9 shrink-0 items-center justify-center gap-2 rounded-md bg-secondary px-4 text-sm" (click)="scanOpen.set(true)">
            <app-icon name="scan-line" class="size-4" />
            <span class="hidden sm:inline">Escanear</span>
          </button>
        </div>
      </div>
      <select class="flex h-9 w-full rounded-md border px-3 text-sm" [ngModel]="cat()" (ngModelChange)="cat.set($event); page.set(1)">
        <option value="all">Todas as categorias</option>
        @for (c of categories; track c) { <option [value]="c">{{ c }}</option> }
      </select>
      <select class="flex h-9 w-full rounded-md border px-3 text-sm" [ngModel]="status()" (ngModelChange)="status.set($event); page.set(1)">
        <option value="all">Todos os status</option>
        <option value="critical">Estoque Cr\xEDtico</option>
        <option value="normal">Estoque Normal</option>
        <option value="low">Estoque Baixo</option>
        <option value="out">Sem Estoque</option>
      </select>
    </div>
  </div>

  <div class="rounded-xl border bg-card shadow">
    <div class="overflow-x-auto">
      <table class="w-full caption-bottom text-sm">
        <thead class="[&_tr]:border-b">
          <tr class="h-14 border-b">
            <th class="h-10 px-2 text-left font-medium text-muted-foreground">Produto</th>
            <th class="hidden h-10 px-2 text-left font-medium text-muted-foreground sm:table-cell">SKU</th>
            <th class="hidden h-10 px-2 text-left font-medium text-muted-foreground md:table-cell">Categoria</th>
            <th class="h-10 px-2 text-right font-medium text-muted-foreground">Qtd</th>
            <th class="h-10 px-2 text-left font-medium text-muted-foreground">Status</th>
            <th class="h-10 w-[120px] px-2 text-right font-medium text-muted-foreground">A\xE7\xF5es</th>
          </tr>
        </thead>
        <tbody>
          @if (pageItems().length === 0) {
            <tr class="h-14 border-b">
              <td colspan="6" class="p-2">
                <div class="flex h-full flex-col items-center justify-center gap-1 text-muted-foreground">
                  <app-icon name="boxes" class="size-6 opacity-50" />
                  <span class="text-sm">Nenhum produto encontrado.</span>
                </div>
              </td>
            </tr>
          }
          @for (p of pageItems(); track p.id) {
            <tr class="h-14 border-b transition-colors hover:bg-muted/50">
              <td class="p-2 font-medium">{{ p.name }}</td>
              <td class="hidden p-2 font-mono text-xs text-muted-foreground sm:table-cell">{{ p.sku }}</td>
              <td class="hidden p-2 md:table-cell">{{ p.category }}</td>
              <td class="p-2 text-right tabular-nums">{{ p.qty }} {{ p.unit }}</td>
              <td class="p-2"><app-status-badge [product]="p" /></td>
              <td class="p-2 text-right">
                <div class="flex items-center justify-end gap-0.5">
                  <button type="button" class="inline-flex size-8 items-center justify-center rounded-md hover:bg-accent" title="Ver" (click)="detail.set(p)">
                    <app-icon name="eye" class="size-4" />
                  </button>
                  <button type="button" class="inline-flex size-8 items-center justify-center rounded-md hover:bg-accent" title="Editar" (click)="editTarget.set(p)">
                    <app-icon name="pencil" class="size-4" />
                  </button>
                  <button type="button" class="inline-flex size-8 items-center justify-center rounded-md text-destructive hover:bg-destructive/10" title="Excluir" (click)="deleteTarget.set(p)">
                    <app-icon name="trash-2" class="size-4" />
                  </button>
                </div>
              </td>
            </tr>
          }
          @for (i of emptySlots(); track i) {
            <tr class="h-14 border-b pointer-events-none" aria-hidden="true"><td colspan="6" class="p-0"></td></tr>
          }
        </tbody>
      </table>
    </div>
  </div>

  @if (totalPages() > 1) {
    <div class="flex items-center justify-center gap-2">
      <button type="button" class="inline-flex size-9 items-center justify-center rounded-md border" [disabled]="safePage() <= 1" (click)="prevPage()">
        <app-icon name="chevron-left" class="size-4" />
      </button>
      <span class="text-sm text-muted-foreground">P\xE1gina {{ safePage() }} de {{ totalPages() }}</span>
      <button type="button" class="inline-flex size-9 items-center justify-center rounded-md border" [disabled]="safePage() >= totalPages()" (click)="nextPage()">
        <app-icon name="chevron-right" class="size-4" />
      </button>
    </div>
  }
</div>

@if (detail(); as d) {
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" (click)="detail.set(null)">
    <div class="grid w-full max-w-md gap-4 rounded-lg border bg-background p-6 shadow-lg" (click)="$event.stopPropagation()">
      <h2 class="text-lg font-semibold">{{ d.name }}</h2>
      <p class="font-mono text-sm text-muted-foreground">{{ d.sku }}</p>
      <div class="grid grid-cols-2 gap-3 text-sm">
        <div><p class="text-xs text-muted-foreground">Categoria</p><p class="font-medium">{{ d.category }}</p></div>
        <div><p class="text-xs text-muted-foreground">Status</p><app-status-badge [product]="d" /></div>
        <div><p class="text-xs text-muted-foreground">Em estoque</p><p class="font-medium">{{ d.qty }} {{ d.unit }}</p></div>
        <div><p class="text-xs text-muted-foreground">M\xEDnimo</p><p class="font-medium">{{ d.minQty }} {{ d.unit }}</p></div>
        <div><p class="text-xs text-muted-foreground">Custo</p><p class="font-medium">R$ {{ d.cost.toFixed(2) }}</p></div>
      </div>
      @if (d.description) { <p class="rounded-lg bg-muted/50 p-3 text-sm text-muted-foreground">{{ d.description }}</p> }
      <div class="grid grid-cols-3 gap-2">
        <button type="button" class="inline-flex h-9 items-center justify-center rounded-md border text-sm" (click)="editTarget.set(d); detail.set(null)">Editar</button>
        <button type="button" class="inline-flex h-9 items-center justify-center rounded-md bg-primary text-sm text-primary-foreground" (click)="moveTarget.set({ product: d, type: 'in' }); detail.set(null)">Entrada</button>
        <button type="button" class="inline-flex h-9 items-center justify-center rounded-md bg-destructive text-sm text-destructive-foreground" (click)="moveTarget.set({ product: d, type: 'out' }); detail.set(null)">Sa\xEDda</button>
      </div>
    </div>
  </div>
}

@if (deleteTarget(); as t) {
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" (click)="deleteTarget.set(null)">
    <div class="grid w-full max-w-md gap-4 rounded-lg border bg-background p-6 shadow-lg" (click)="$event.stopPropagation()">
      <h2 class="text-lg font-semibold">Excluir produto do estoque?</h2>
      <p class="text-sm text-muted-foreground">Tem certeza que deseja remover <strong>{{ t.name }}</strong> (SKU: {{ t.sku }})? Esta a\xE7\xE3o n\xE3o pode ser desfeita.</p>
      <div class="flex justify-end gap-2">
        <button type="button" class="inline-flex h-9 items-center justify-center rounded-md border px-4 text-sm" (click)="deleteTarget.set(null)">Cancelar</button>
        <button type="button" class="inline-flex h-9 items-center justify-center rounded-md bg-destructive px-4 text-sm text-destructive-foreground" (click)="confirmDelete()">Sim, excluir</button>
      </div>
    </div>
  </div>
}

<app-scanner-dialog [open]="scanOpen()" mode="confirm" (openChange)="scanOpen.set($event)" (scan)="handleScan($event)" />
<app-edit-product-dialog [product]="editTarget()" (closed)="editTarget.set(null)" />
<app-quick-movement-dialog [product]="moveTarget()?.product ?? null" [type]="moveTarget()?.type ?? null" (closed)="moveTarget.set(null)" />
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InventarioComponent, { className: "InventarioComponent", filePath: "src/app/pages/inventario/inventario.component.ts", lineNumber: 34 });
})();
export {
  InventarioComponent
};
//# sourceMappingURL=chunk-N2KP3F2L.js.map
