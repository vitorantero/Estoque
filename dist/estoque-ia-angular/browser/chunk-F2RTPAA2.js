import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-MHPDYUX5.js";
import {
  CATEGORIES,
  Component,
  EventEmitter,
  IN_REASONS,
  IconComponent,
  Injectable,
  Input,
  OUT_REASONS,
  Output,
  ToastService,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-SAWBXWAZ.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/core/services/store.service.ts
var LS_KEY = "estoque-data-v1";
var uid = () => Math.random().toString(36).slice(2, 10);
var seedProducts = [
  { id: uid(), sku: "7891234567890", name: "Cabo HDMI 2m", category: "Eletr\xF4nicos", minQty: 10, qty: 42, unit: "Un", cost: 18.9, description: "Cabo HDMI 4K." },
  { id: uid(), sku: "7890000000017", name: "Papel A4 75g", category: "Escrit\xF3rio", minQty: 20, qty: 8, unit: "Cx", cost: 24.5, description: "Resma 500 folhas." },
  { id: uid(), sku: "7890000000024", name: "\xC1lcool 70% 1L", category: "Limpeza", minQty: 15, qty: 0, unit: "L", cost: 9.9 },
  { id: uid(), sku: "7890000000031", name: "Luva Nitr\xEDlica M", category: "EPI", minQty: 50, qty: 120, unit: "Cx", cost: 32 },
  { id: uid(), sku: "7890000000048", name: "Caf\xE9 em Gr\xE3os 1kg", category: "Alimentos", minQty: 5, qty: 3, unit: "Kg", cost: 41 },
  { id: uid(), sku: "7890000000055", name: "Parafusadeira 12V", category: "Ferramentas", minQty: 4, qty: 7, unit: "Un", cost: 289.9 },
  { id: uid(), sku: "7890000000062", name: "Detergente Neutro 5L", category: "Limpeza", minQty: 10, qty: 25, unit: "L", cost: 19.9 },
  { id: uid(), sku: "7890000000079", name: "Caneta Esferogr\xE1fica", category: "Escrit\xF3rio", minQty: 100, qty: 340, unit: "Pct", cost: 12.5 }
];
function buildSeedMovements(products) {
  const now = Date.now();
  const list = [];
  for (let i = 0; i < 12; i++) {
    const p = products[i % products.length];
    const type = i % 3 === 0 ? "in" : "out";
    list.push({
      id: uid(),
      productId: p.id,
      productName: p.name,
      sku: p.sku,
      type,
      qty: Math.ceil(Math.random() * 8),
      reason: type === "in" ? IN_REASONS[i % IN_REASONS.length] : OUT_REASONS[i % OUT_REASONS.length],
      date: new Date(now - i * 1e3 * 60 * 60 * 9).toISOString()
    });
  }
  return list;
}
var StoreService = class _StoreService {
  categories = CATEGORIES;
  productsSignal = signal([]);
  movementsSignal = signal([]);
  ready = false;
  products = this.productsSignal.asReadonly();
  movements = this.movementsSignal.asReadonly();
  constructor() {
    this.load();
    effect(() => {
      if (!this.ready)
        return;
      const products = this.productsSignal();
      if (products.length === 0)
        return;
      try {
        localStorage.setItem(LS_KEY, JSON.stringify({ products, movements: this.movementsSignal() }));
      } catch {
      }
    });
  }
  load() {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        this.productsSignal.set(parsed.products);
        this.movementsSignal.set(parsed.movements);
        this.ready = true;
        return;
      }
    } catch {
    }
    const sp = seedProducts;
    this.productsSignal.set(sp);
    this.movementsSignal.set(buildSeedMovements(sp));
    this.ready = true;
  }
  findBySku(sku) {
    return this.productsSignal().find((p) => p.sku === sku.trim());
  }
  addProduct(p) {
    const np = __spreadProps(__spreadValues({}, p), { id: uid() });
    this.productsSignal.update((prev) => [np, ...prev]);
    return np;
  }
  updateProduct(id, patch) {
    this.productsSignal.update((prev) => prev.map((p) => p.id === id ? __spreadValues(__spreadValues({}, p), patch) : p));
  }
  deleteProduct(id) {
    this.productsSignal.update((prev) => prev.filter((p) => p.id !== id));
    this.movementsSignal.update((prev) => prev.filter((m) => m.productId !== id));
  }
  registerMovement(m) {
    const products = this.productsSignal();
    const product = products.find((p) => p.id === m.productId);
    if (!product)
      return false;
    if (m.type === "out" && m.qty > product.qty)
      return false;
    this.productsSignal.update((prev) => prev.map((p) => p.id === m.productId ? __spreadProps(__spreadValues({}, p), { qty: m.type === "in" ? p.qty + m.qty : p.qty - m.qty }) : p));
    this.movementsSignal.update((prev) => [
      {
        id: uid(),
        productId: m.productId,
        productName: product.name,
        sku: product.sku,
        type: m.type,
        qty: m.qty,
        reason: m.reason,
        date: (/* @__PURE__ */ new Date()).toISOString()
      },
      ...prev
    ]);
    return true;
  }
  static \u0275fac = function StoreService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StoreService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StoreService, factory: _StoreService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/shared/components/scanner-dialog/scanner-dialog.component.ts
function ScannerDialogComponent_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 19);
    \u0275\u0275element(2, "div", 20)(3, "span", 21)(4, "span", 22)(5, "span", 23)(6, "span", 24);
    \u0275\u0275elementEnd()();
  }
}
function ScannerDialogComponent_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "app-icon", 25);
    \u0275\u0275elementStart(2, "span", 26);
    \u0275\u0275text(3, "Iniciando c\xE2mera\u2026");
    \u0275\u0275elementEnd()();
  }
}
function ScannerDialogComponent_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "app-icon", 27);
    \u0275\u0275elementStart(2, "p", 26);
    \u0275\u0275text(3, "C\xE2mera indispon\xEDvel. Digite o c\xF3digo manualmente abaixo.");
    \u0275\u0275elementEnd()();
  }
}
function ScannerDialogComponent_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Ap\xF3s a leitura, confira o c\xF3digo e confirme ");
  }
}
function ScannerDialogComponent_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Digite o c\xF3digo manualmente, se necess\xE1rio ");
  }
}
function ScannerDialogComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function ScannerDialogComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function ScannerDialogComponent_Conditional_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div")(3, "h2", 3);
    \u0275\u0275element(4, "app-icon", 4);
    \u0275\u0275text(5, " Escanear C\xF3digo ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 5);
    \u0275\u0275text(7, " Aponte a c\xE2mera para o c\xF3digo de barras ou QR Code. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 6);
    \u0275\u0275element(9, "div", 7);
    \u0275\u0275template(10, ScannerDialogComponent_Conditional_0_Conditional_10_Template, 7, 0, "div", 8)(11, ScannerDialogComponent_Conditional_0_Conditional_11_Template, 4, 0, "div", 9)(12, ScannerDialogComponent_Conditional_0_Conditional_12_Template, 4, 0, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 11)(14, "p", 12);
    \u0275\u0275template(15, ScannerDialogComponent_Conditional_0_Conditional_15_Template, 1, 0)(16, ScannerDialogComponent_Conditional_0_Conditional_16_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 13)(18, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function ScannerDialogComponent_Conditional_0_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.manual, $event) || (ctx_r1.manual = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function ScannerDialogComponent_Conditional_0_Template_input_keydown_enter_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmResult());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 15);
    \u0275\u0275listener("click", function ScannerDialogComponent_Conditional_0_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.randomCode());
    });
    \u0275\u0275element(20, "app-icon", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "button", 17);
    \u0275\u0275listener("click", function ScannerDialogComponent_Conditional_0_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmResult());
    });
    \u0275\u0275text(22, " Confirmar leitura ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "button", 18);
    \u0275\u0275listener("click", function ScannerDialogComponent_Conditional_0_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(24, " Cancelar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275conditional(!ctx_r1.cameraError ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.starting && !ctx_r1.cameraError ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.cameraError ? 12 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.mode === "confirm" ? 15 : 16);
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", ctx_r1.mode === "confirm" ? "O c\xF3digo lido aparecer\xE1 aqui" : "Digite ou cole o c\xF3digo");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.manual);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r1.manual.trim());
  }
}
var SCANNER_SCANNING = 2;
var SCANNER_PAUSED = 3;
var ScannerDialogComponent = class _ScannerDialogComponent {
  toast = inject(ToastService);
  open = false;
  mode = "immediate";
  openChange = new EventEmitter();
  scan = new EventEmitter();
  manual = "";
  starting = true;
  cameraError = false;
  scanner = null;
  stopping = false;
  lastCaptured = "";
  cancelled = false;
  ngOnChanges(changes) {
    if (changes["open"]) {
      if (this.open)
        void this.startCamera();
      else
        void this.close();
    }
  }
  ngOnDestroy() {
    void this.safeStop();
  }
  close() {
    return __async(this, null, function* () {
      yield this.safeStop();
      this.manual = "";
      this.lastCaptured = "";
      this.openChange.emit(false);
    });
  }
  safeStop() {
    return __async(this, null, function* () {
      const inst = this.scanner;
      if (!inst || this.stopping)
        return;
      this.stopping = true;
      try {
        const state = inst.getState?.();
        if (state === SCANNER_SCANNING || state === SCANNER_PAUSED)
          yield inst.stop();
      } catch {
      }
      try {
        inst.clear?.();
      } catch {
      }
      this.scanner = null;
      this.stopping = false;
    });
  }
  startCamera() {
    return __async(this, null, function* () {
      yield this.safeStop();
      this.cancelled = false;
      this.cameraError = false;
      this.starting = true;
      this.manual = "";
      this.lastCaptured = "";
      try {
        const { Html5Qrcode } = yield import("./chunk-73LVULNS.js");
        if (this.cancelled)
          return;
        const instance = new Html5Qrcode("qr-reader-region", { verbose: false });
        this.scanner = instance;
        yield instance.start({ facingMode: "environment" }, { fps: 10, qrbox: { width: 220, height: 220 } }, (decoded) => this.onDetected(decoded), () => {
        });
        if (this.cancelled) {
          yield this.safeStop();
          return;
        }
        this.starting = false;
      } catch {
        if (!this.cancelled) {
          this.cameraError = true;
          this.starting = false;
        }
      }
    });
  }
  onDetected(code) {
    const trimmed = code.trim();
    if (!trimmed || !this.open)
      return;
    if (this.mode === "confirm") {
      this.manual = trimmed;
      if (this.lastCaptured !== trimmed) {
        this.lastCaptured = trimmed;
        this.toast.message("C\xF3digo capturado", "Confira o valor abaixo e clique em Confirmar leitura.");
      }
      return;
    }
    void this.confirmResult(trimmed);
  }
  confirmResult(code) {
    const trimmed = (code ?? this.manual).trim();
    if (!trimmed)
      return;
    void this.safeStop().then(() => {
      this.scan.emit(trimmed);
      this.openChange.emit(false);
    });
  }
  randomCode() {
    this.manual = "789" + Math.floor(1e9 + Math.random() * 8999999999);
  }
  static \u0275fac = function ScannerDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScannerDialogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScannerDialogComponent, selectors: [["app-scanner-dialog"]], inputs: { open: "open", mode: "mode" }, outputs: { openChange: "openChange", scan: "scan" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [[1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-black/80", "p-4"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-black/80", "p-4", 3, "click"], [1, "grid", "w-full", "max-w-md", "gap-4", "rounded-lg", "border", "bg-background", "p-6", "shadow-lg", 3, "click"], [1, "flex", "items-center", "gap-2", "text-lg", "font-semibold"], ["name", "scan-line", 1, "size-5", "text-primary"], [1, "text-sm", "text-muted-foreground"], [1, "relative", "aspect-square", "w-full", "overflow-hidden", "rounded-xl", "border", "bg-secondary"], ["id", "qr-reader-region", 1, "h-full", "w-full", "[&_video]:h-full", "[&_video]:w-full", "[&_video]:object-cover"], [1, "pointer-events-none", "absolute", "inset-0", "flex", "items-center", "justify-center"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "gap-2", "bg-secondary/80", "text-muted-foreground"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "gap-2", "p-6", "text-center", "text-muted-foreground"], [1, "space-y-3", "rounded-xl", "border", "bg-muted/40", "p-3"], [1, "text-xs", "font-medium", "text-muted-foreground"], [1, "flex", "gap-2"], [1, "flex", "h-9", "w-full", "rounded-md", "border", "border-input", "bg-transparent", "px-3", "py-1", "text-sm", "shadow-sm", 3, "ngModelChange", "keydown.enter", "placeholder", "ngModel"], ["type", "button", "title", "Gerar c\xF3digo de teste", 1, "inline-flex", "h-9", "w-9", "shrink-0", "items-center", "justify-center", "rounded-md", "border", "bg-background", "text-sm", "hover:bg-accent", 3, "click"], ["name", "dices", 1, "size-4"], ["type", "button", 1, "inline-flex", "h-9", "w-full", "items-center", "justify-center", "rounded-md", "bg-primary", "px-4", "text-sm", "font-medium", "text-primary-foreground", "hover:bg-primary/90", "disabled:opacity-50", 3, "click", "disabled"], ["type", "button", 1, "inline-flex", "h-9", "w-full", "items-center", "justify-center", "rounded-md", "hover:bg-accent", 3, "click"], [1, "relative", "h-3/5", "w-3/5", "rounded-lg", "border-2", "border-primary/70"], [1, "scanline", "absolute", "inset-x-0", "h-1"], [1, "absolute", "-top-0.5", "-left-0.5", "h-5", "w-5", "rounded-tl-lg", "border-t-4", "border-l-4", "border-primary"], [1, "absolute", "-top-0.5", "-right-0.5", "h-5", "w-5", "rounded-tr-lg", "border-t-4", "border-r-4", "border-primary"], [1, "absolute", "-bottom-0.5", "-left-0.5", "h-5", "w-5", "rounded-bl-lg", "border-b-4", "border-l-4", "border-primary"], [1, "absolute", "-bottom-0.5", "-right-0.5", "h-5", "w-5", "rounded-br-lg", "border-b-4", "border-r-4", "border-primary"], ["name", "camera", 1, "size-8", "animate-pulse"], [1, "text-sm"], ["name", "camera-off", 1, "size-8", "text-warning"]], template: function ScannerDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ScannerDialogComponent_Conditional_0_Template, 25, 7, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.open ? 0 : -1);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, IconComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScannerDialogComponent, [{
    type: Component,
    args: [{ selector: "app-scanner-dialog", standalone: true, imports: [FormsModule, IconComponent], template: `@if (open) {
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" (click)="close()">
    <div
      class="grid w-full max-w-md gap-4 rounded-lg border bg-background p-6 shadow-lg"
      (click)="$event.stopPropagation()"
    >
      <div>
        <h2 class="flex items-center gap-2 text-lg font-semibold">
          <app-icon name="scan-line" class="size-5 text-primary" />
          Escanear C\xF3digo
        </h2>
        <p class="text-sm text-muted-foreground">
          Aponte a c\xE2mera para o c\xF3digo de barras ou QR Code.
        </p>
      </div>

      <div class="relative aspect-square w-full overflow-hidden rounded-xl border bg-secondary">
        <div id="qr-reader-region" class="h-full w-full [&_video]:h-full [&_video]:w-full [&_video]:object-cover"></div>

        @if (!cameraError) {
          <div class="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div class="relative h-3/5 w-3/5 rounded-lg border-2 border-primary/70">
              <div class="scanline absolute inset-x-0 h-1"></div>
              <span class="absolute -top-0.5 -left-0.5 h-5 w-5 rounded-tl-lg border-t-4 border-l-4 border-primary"></span>
              <span class="absolute -top-0.5 -right-0.5 h-5 w-5 rounded-tr-lg border-t-4 border-r-4 border-primary"></span>
              <span class="absolute -bottom-0.5 -left-0.5 h-5 w-5 rounded-bl-lg border-b-4 border-l-4 border-primary"></span>
              <span class="absolute -bottom-0.5 -right-0.5 h-5 w-5 rounded-br-lg border-b-4 border-r-4 border-primary"></span>
            </div>
          </div>
        }

        @if (starting && !cameraError) {
          <div
            class="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-secondary/80 text-muted-foreground"
          >
            <app-icon name="camera" class="size-8 animate-pulse" />
            <span class="text-sm">Iniciando c\xE2mera\u2026</span>
          </div>
        }

        @if (cameraError) {
          <div
            class="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center text-muted-foreground"
          >
            <app-icon name="camera-off" class="size-8 text-warning" />
            <p class="text-sm">C\xE2mera indispon\xEDvel. Digite o c\xF3digo manualmente abaixo.</p>
          </div>
        }
      </div>

      <div class="space-y-3 rounded-xl border bg-muted/40 p-3">
        <p class="text-xs font-medium text-muted-foreground">
          @if (mode === 'confirm') {
            Ap\xF3s a leitura, confira o c\xF3digo e confirme
          } @else {
            Digite o c\xF3digo manualmente, se necess\xE1rio
          }
        </p>
        <div class="flex gap-2">
          <input
            class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
            [placeholder]="mode === 'confirm' ? 'O c\xF3digo lido aparecer\xE1 aqui' : 'Digite ou cole o c\xF3digo'"
            [(ngModel)]="manual"
            (keydown.enter)="confirmResult()"
          />
          <button
            type="button"
            class="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border bg-background text-sm hover:bg-accent"
            title="Gerar c\xF3digo de teste"
            (click)="randomCode()"
          >
            <app-icon name="dices" class="size-4" />
          </button>
        </div>
        <button
          type="button"
          class="inline-flex h-9 w-full items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
          [disabled]="!manual.trim()"
          (click)="confirmResult()"
        >
          Confirmar leitura
        </button>
      </div>

      <button
        type="button"
        class="inline-flex h-9 w-full items-center justify-center rounded-md hover:bg-accent"
        (click)="close()"
      >
        Cancelar
      </button>
    </div>
  </div>
}
` }]
  }], null, { open: [{
    type: Input
  }], mode: [{
    type: Input
  }], openChange: [{
    type: Output
  }], scan: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScannerDialogComponent, { className: "ScannerDialogComponent", filePath: "src/app/shared/components/scanner-dialog/scanner-dialog.component.ts", lineNumber: 24 });
})();

export {
  StoreService,
  ScannerDialogComponent
};
//# sourceMappingURL=chunk-F2RTPAA2.js.map
