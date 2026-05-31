import {
  ThemeService
} from "./chunk-DEQFH6DX.js";
import {
  AuthService,
  UserAvatarComponent
} from "./chunk-E5XICOUV.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-MHPDYUX5.js";
import {
  Component,
  EventEmitter,
  IconComponent,
  Input,
  Output,
  ROLE_LABELS,
  ToastService,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-SAWBXWAZ.js";
import {
  __async
} from "./chunk-TXDUYLVM.js";

// src/app/shared/components/change-password-dialog/change-password-dialog.component.ts
function ChangePasswordDialogComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function ChangePasswordDialogComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function ChangePasswordDialogComponent_Conditional_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div")(3, "h2", 3);
    \u0275\u0275element(4, "app-icon", 4);
    \u0275\u0275text(5, " Alterar senha ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 5);
    \u0275\u0275text(7, "Informe a senha atual e defina uma nova senha.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "label", 8);
    \u0275\u0275text(11, "Senha atual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 9);
    \u0275\u0275twoWayListener("ngModelChange", function ChangePasswordDialogComponent_Conditional_0_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.current, $event) || (ctx_r1.current = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 7)(14, "label", 8);
    \u0275\u0275text(15, "Nova senha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 9);
    \u0275\u0275twoWayListener("ngModelChange", function ChangePasswordDialogComponent_Conditional_0_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.next, $event) || (ctx_r1.next = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 7)(18, "label", 8);
    \u0275\u0275text(19, "Confirmar nova senha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 9);
    \u0275\u0275twoWayListener("ngModelChange", function ChangePasswordDialogComponent_Conditional_0_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.confirm, $event) || (ctx_r1.confirm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 10)(22, "button", 11);
    \u0275\u0275listener("click", function ChangePasswordDialogComponent_Conditional_0_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(23, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 12);
    \u0275\u0275listener("click", function ChangePasswordDialogComponent_Conditional_0_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275text(25, "Salvar senha");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.current);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.next);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.confirm);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.loading);
  }
}
var ChangePasswordDialogComponent = class _ChangePasswordDialogComponent {
  auth = inject(AuthService);
  toast = inject(ToastService);
  open = false;
  openChange = new EventEmitter();
  current = "";
  next = "";
  confirm = "";
  loading = false;
  close() {
    this.current = "";
    this.next = "";
    this.confirm = "";
    this.openChange.emit(false);
  }
  submit() {
    return __async(this, null, function* () {
      if (!this.current || !this.next) {
        this.toast.error("Preencha todos os campos.");
        return;
      }
      if (this.next.length < 6) {
        this.toast.error("A nova senha deve ter pelo menos 6 caracteres.");
        return;
      }
      if (this.next !== this.confirm) {
        this.toast.error("A confirma\xE7\xE3o n\xE3o confere.");
        return;
      }
      this.loading = true;
      const ok = yield this.auth.changePassword(this.current, this.next);
      this.loading = false;
      if (!ok) {
        this.toast.error("Senha atual incorreta.");
        return;
      }
      this.toast.success("Senha alterada com sucesso!");
      this.close();
    });
  }
  static \u0275fac = function ChangePasswordDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChangePasswordDialogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChangePasswordDialogComponent, selectors: [["app-change-password-dialog"]], inputs: { open: "open" }, outputs: { openChange: "openChange" }, decls: 1, vars: 1, consts: [[1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-black/80", "p-4"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-black/80", "p-4", 3, "click"], [1, "grid", "w-full", "max-w-md", "gap-4", "rounded-lg", "border", "bg-background", "p-6", "shadow-lg", 3, "click"], [1, "flex", "items-center", "gap-2", "text-lg", "font-semibold"], ["name", "key-round", 1, "size-5"], [1, "text-sm", "text-muted-foreground"], [1, "space-y-4"], [1, "space-y-2"], [1, "text-sm", "font-medium"], ["type", "password", 1, "flex", "h-9", "w-full", "rounded-md", "border", "px-3", "text-sm", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-end", "gap-2"], ["type", "button", 1, "inline-flex", "h-9", "items-center", "justify-center", "rounded-md", "px-4", "text-sm", "hover:bg-accent", 3, "click"], ["type", "button", 1, "inline-flex", "h-9", "items-center", "justify-center", "rounded-md", "bg-primary", "px-4", "text-sm", "text-primary-foreground", 3, "click", "disabled"]], template: function ChangePasswordDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ChangePasswordDialogComponent_Conditional_0_Template, 26, 4, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.open ? 0 : -1);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, IconComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChangePasswordDialogComponent, [{
    type: Component,
    args: [{
      selector: "app-change-password-dialog",
      standalone: true,
      imports: [FormsModule, IconComponent],
      template: `
    @if (open) {
      <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" (click)="close()">
        <div class="grid w-full max-w-md gap-4 rounded-lg border bg-background p-6 shadow-lg" (click)="$event.stopPropagation()">
          <div>
            <h2 class="flex items-center gap-2 text-lg font-semibold">
              <app-icon name="key-round" class="size-5" />
              Alterar senha
            </h2>
            <p class="text-sm text-muted-foreground">Informe a senha atual e defina uma nova senha.</p>
          </div>
          <div class="space-y-4">
            <div class="space-y-2">
              <label class="text-sm font-medium">Senha atual</label>
              <input type="password" class="flex h-9 w-full rounded-md border px-3 text-sm" [(ngModel)]="current" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium">Nova senha</label>
              <input type="password" class="flex h-9 w-full rounded-md border px-3 text-sm" [(ngModel)]="next" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium">Confirmar nova senha</label>
              <input type="password" class="flex h-9 w-full rounded-md border px-3 text-sm" [(ngModel)]="confirm" />
            </div>
          </div>
          <div class="flex justify-end gap-2">
            <button type="button" class="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm hover:bg-accent" (click)="close()">Cancelar</button>
            <button type="button" class="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm text-primary-foreground" [disabled]="loading" (click)="submit()">Salvar senha</button>
          </div>
        </div>
      </div>
    }
  `
    }]
  }], null, { open: [{
    type: Input
  }], openChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChangePasswordDialogComponent, { className: "ChangePasswordDialogComponent", filePath: "src/app/shared/components/change-password-dialog/change-password-dialog.component.ts", lineNumber: 45 });
})();

// src/app/pages/perfil/perfil.component.ts
function PerfilComponent_Conditional_6_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 23);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r3 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r3.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.roleLabels[u_r3.role]);
  }
}
function PerfilComponent_Conditional_6_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "label", 18);
    \u0275\u0275text(2, "Nome");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 24)(5, "label", 18);
    \u0275\u0275text(6, "E-mail");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 24)(9, "label", 18);
    \u0275\u0275text(10, "Senha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 26);
    \u0275\u0275element(12, "input", 27);
    \u0275\u0275elementStart(13, "button", 28);
    \u0275\u0275listener("click", function PerfilComponent_Conditional_6_Conditional_18_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.pwdOpen.set(true));
    });
    \u0275\u0275text(14, "Alterar senha");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const u_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("value", u_r3.name);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", u_r3.email);
  }
}
function PerfilComponent_Conditional_6_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "label", 18);
    \u0275\u0275text(2, "Nome *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function PerfilComponent_Conditional_6_Conditional_19_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.name, $event) || (ctx_r1.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 24)(5, "label", 18);
    \u0275\u0275text(6, "E-mail *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function PerfilComponent_Conditional_6_Conditional_19_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.email, $event) || (ctx_r1.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 24)(9, "label", 18);
    \u0275\u0275text(10, "Senha *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function PerfilComponent_Conditional_6_Conditional_19_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.password, $event) || (ctx_r1.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 24)(13, "label", 18);
    \u0275\u0275text(14, "Confirmar senha *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function PerfilComponent_Conditional_6_Conditional_19_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.confirmPwd, $event) || (ctx_r1.confirmPwd = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 32);
    \u0275\u0275listener("click", function PerfilComponent_Conditional_6_Conditional_19_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.completeRegistration());
    });
    \u0275\u0275text(17, "Concluir cadastro");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.password);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.confirmPwd);
  }
}
function PerfilComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6);
    \u0275\u0275element(3, "app-user-avatar", 7);
    \u0275\u0275elementStart(4, "label", 8);
    \u0275\u0275element(5, "app-icon", 9);
    \u0275\u0275elementStart(6, "input", 10);
    \u0275\u0275listener("change", function PerfilComponent_Conditional_6_Template_input_change_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPhotoPick($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 11)(8, "p", 12);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, PerfilComponent_Conditional_6_Conditional_10_Template, 4, 2);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 4)(12, "div", 13)(13, "h3", 14);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 2);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 15);
    \u0275\u0275template(18, PerfilComponent_Conditional_6_Conditional_18_Template, 15, 2)(19, PerfilComponent_Conditional_6_Conditional_19_Template, 18, 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 4)(21, "div", 13)(22, "h3", 14);
    \u0275\u0275text(23, "Apar\xEAncia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 2);
    \u0275\u0275text(25, "Escolha como o aplicativo \xE9 exibido.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 16)(27, "div", 17)(28, "div")(29, "p", 18);
    \u0275\u0275text(30, "Modo escuro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p", 19);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "label", 20)(34, "input", 21);
    \u0275\u0275listener("change", function PerfilComponent_Conditional_6_Template_input_change_34_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onThemeChange($event.target.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "span", 22);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const u_r3 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("name", u_r3.name)("photoUrl", u_r3.photoUrl);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.registered ? u_r3.name : "Complete seu cadastro");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.registered ? 10 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.registered ? "Dados da conta" : "Finalizar cadastro");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.registered ? "Nome e e-mail s\xE3o fixos ap\xF3s o cadastro." : "Ap\xF3s salvar, nome e e-mail n\xE3o poder\xE3o ser alterados.", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.registered ? 18 : 19);
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r1.theme() === "dark" ? "Tema escuro ativado" : "Tema claro ativado");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.theme() === "dark");
  }
}
var MAX_PHOTO_BYTES = 8e5;
var PerfilComponent = class _PerfilComponent {
  auth = inject(AuthService);
  themeService = inject(ThemeService);
  toast = inject(ToastService);
  roleLabels = ROLE_LABELS;
  user = this.auth.currentUser;
  theme = this.themeService.theme;
  pwdOpen = signal(false);
  name = "";
  email = "";
  password = "";
  confirmPwd = "";
  get registered() {
    return this.user()?.registered ?? false;
  }
  onPhotoPick(e) {
    const input = e.target;
    const file = input.files?.[0];
    if (!file)
      return;
    if (!file.type.startsWith("image/")) {
      this.toast.error("Selecione uma imagem (JPG, PNG ou WebP).");
      return;
    }
    if (file.size > MAX_PHOTO_BYTES) {
      this.toast.error("Imagem muito grande. M\xE1ximo 800 KB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        this.auth.setUserPhoto(reader.result);
        this.toast.success("Foto de perfil atualizada!");
      }
    };
    reader.readAsDataURL(file);
    input.value = "";
  }
  completeRegistration() {
    return __async(this, null, function* () {
      if (!this.name.trim() || !this.email.trim() || !this.password) {
        this.toast.error("Preencha nome, e-mail e senha.");
        return;
      }
      if (this.password.length < 6) {
        this.toast.error("A senha deve ter pelo menos 6 caracteres.");
        return;
      }
      if (this.password !== this.confirmPwd) {
        this.toast.error("As senhas n\xE3o conferem.");
        return;
      }
      const ok = yield this.auth.registerAccount({
        name: this.name.trim(),
        email: this.email.trim(),
        password: this.password,
        photoUrl: this.user()?.photoUrl
      });
      if (!ok) {
        this.toast.error("Este e-mail j\xE1 est\xE1 cadastrado.");
        return;
      }
      this.toast.success("Cadastro conclu\xEDdo! Nome e e-mail n\xE3o poder\xE3o ser alterados.");
    });
  }
  onThemeChange(dark) {
    this.themeService.setTheme(dark ? "dark" : "light");
  }
  static \u0275fac = function PerfilComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PerfilComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PerfilComponent, selectors: [["app-perfil"]], decls: 8, vars: 2, consts: [[1, "mx-auto", "max-w-lg", "space-y-6"], [1, "text-2xl", "font-bold", "tracking-tight"], [1, "text-sm", "text-muted-foreground"], [3, "openChange", "open"], [1, "rounded-xl", "border", "bg-card", "shadow"], [1, "flex", "flex-col", "items-center", "gap-4", "px-6", "pt-8", "pb-6"], [1, "relative"], ["sizeClass", "size-24 text-xl", 3, "name", "photoUrl"], [1, "absolute", "-right-1", "-bottom-1", "grid", "size-9", "cursor-pointer", "place-items-center", "rounded-full", "bg-primary", "text-primary-foreground", "shadow-md"], ["name", "camera", 1, "size-4"], ["type", "file", "accept", "image/*", 1, "hidden", 3, "change"], [1, "text-center"], [1, "text-lg", "font-semibold"], [1, "flex", "flex-col", "space-y-1.5", "p-6"], [1, "text-base", "font-semibold"], [1, "space-y-4", "p-6", "pt-0"], [1, "p-6", "pt-0"], [1, "flex", "items-center", "justify-between", "rounded-xl", "border", "bg-muted/30", "p-4"], [1, "text-sm", "font-medium"], [1, "text-xs", "text-muted-foreground"], [1, "relative", "inline-flex", "cursor-pointer", "items-center"], ["type", "checkbox", 1, "peer", "sr-only", 3, "change", "checked"], [1, "h-5", "w-9", "rounded-full", "bg-input", "after:absolute", "after:left-0.5", "after:top-0.5", "after:size-4", "after:rounded-full", "after:bg-background", "after:transition", "peer-checked:bg-primary", "peer-checked:after:translate-x-4"], [1, "mt-2", "inline-flex", "items-center", "gap-1", "rounded-full", "border", "px-2.5", "py-0.5", "text-xs", "font-medium"], [1, "space-y-2"], ["readonly", "", "disabled", "", 1, "flex", "h-9", "w-full", "rounded-md", "border", "bg-muted/50", "px-3", "text-sm", 3, "value"], [1, "flex", "gap-2"], ["value", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "readonly", "", "disabled", "", 1, "flex", "h-9", "w-full", "rounded-md", "border", "bg-muted/50", "px-3", "font-mono", "tracking-widest", "text-sm"], ["type", "button", 1, "inline-flex", "h-9", "shrink-0", "items-center", "justify-center", "rounded-md", "bg-secondary", "px-4", "text-sm", 3, "click"], [1, "flex", "h-9", "w-full", "rounded-md", "border", "px-3", "text-sm", 3, "ngModelChange", "ngModel"], ["type", "email", 1, "flex", "h-9", "w-full", "rounded-md", "border", "px-3", "text-sm", 3, "ngModelChange", "ngModel"], ["type", "password", 1, "flex", "h-9", "w-full", "rounded-md", "border", "px-3", "text-sm", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "inline-flex", "h-9", "w-full", "items-center", "justify-center", "rounded-md", "bg-primary", "text-sm", "text-primary-foreground", 3, "click"]], template: function PerfilComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Perfil");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Seus dados e prefer\xEAncias do EstoqueIA.");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, PerfilComponent_Conditional_6_Template, 36, 9);
      \u0275\u0275elementStart(7, "app-change-password-dialog", 3);
      \u0275\u0275listener("openChange", function PerfilComponent_Template_app_change_password_dialog_openChange_7_listener($event) {
        return ctx.pwdOpen.set($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(6);
      \u0275\u0275conditional((tmp_0_0 = ctx.user()) ? 6 : -1, tmp_0_0);
      \u0275\u0275advance();
      \u0275\u0275property("open", ctx.pwdOpen());
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, IconComponent, UserAvatarComponent, ChangePasswordDialogComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PerfilComponent, [{
    type: Component,
    args: [{ selector: "app-perfil", standalone: true, imports: [FormsModule, IconComponent, UserAvatarComponent, ChangePasswordDialogComponent], template: `<div class="mx-auto max-w-lg space-y-6">
  <div>
    <h1 class="text-2xl font-bold tracking-tight">Perfil</h1>
    <p class="text-sm text-muted-foreground">Seus dados e prefer\xEAncias do EstoqueIA.</p>
  </div>

  @if (user(); as u) {
    <div class="rounded-xl border bg-card shadow">
      <div class="flex flex-col items-center gap-4 px-6 pt-8 pb-6">
        <div class="relative">
          <app-user-avatar [name]="u.name" [photoUrl]="u.photoUrl" sizeClass="size-24 text-xl" />
          <label class="absolute -right-1 -bottom-1 grid size-9 cursor-pointer place-items-center rounded-full bg-primary text-primary-foreground shadow-md">
            <app-icon name="camera" class="size-4" />
            <input type="file" accept="image/*" class="hidden" (change)="onPhotoPick($event)" />
          </label>
        </div>
        <div class="text-center">
          <p class="text-lg font-semibold">{{ registered ? u.name : 'Complete seu cadastro' }}</p>
          @if (registered) {
            <p class="text-sm text-muted-foreground">{{ u.email }}</p>
            <span class="mt-2 inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium">{{ roleLabels[u.role] }}</span>
          }
        </div>
      </div>
    </div>

    <div class="rounded-xl border bg-card shadow">
      <div class="flex flex-col space-y-1.5 p-6">
        <h3 class="text-base font-semibold">{{ registered ? 'Dados da conta' : 'Finalizar cadastro' }}</h3>
        <p class="text-sm text-muted-foreground">
          {{ registered ? 'Nome e e-mail s\xE3o fixos ap\xF3s o cadastro.' : 'Ap\xF3s salvar, nome e e-mail n\xE3o poder\xE3o ser alterados.' }}
        </p>
      </div>
      <div class="space-y-4 p-6 pt-0">
        @if (registered) {
          <div class="space-y-2">
            <label class="text-sm font-medium">Nome</label>
            <input class="flex h-9 w-full rounded-md border bg-muted/50 px-3 text-sm" [value]="u.name" readonly disabled />
          </div>
          <div class="space-y-2">
            <label class="text-sm font-medium">E-mail</label>
            <input class="flex h-9 w-full rounded-md border bg-muted/50 px-3 text-sm" [value]="u.email" readonly disabled />
          </div>
          <div class="space-y-2">
            <label class="text-sm font-medium">Senha</label>
            <div class="flex gap-2">
              <input class="flex h-9 w-full rounded-md border bg-muted/50 px-3 font-mono tracking-widest text-sm" value="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" readonly disabled />
              <button type="button" class="inline-flex h-9 shrink-0 items-center justify-center rounded-md bg-secondary px-4 text-sm" (click)="pwdOpen.set(true)">Alterar senha</button>
            </div>
          </div>
        } @else {
          <div class="space-y-2">
            <label class="text-sm font-medium">Nome *</label>
            <input class="flex h-9 w-full rounded-md border px-3 text-sm" [(ngModel)]="name" />
          </div>
          <div class="space-y-2">
            <label class="text-sm font-medium">E-mail *</label>
            <input type="email" class="flex h-9 w-full rounded-md border px-3 text-sm" [(ngModel)]="email" />
          </div>
          <div class="space-y-2">
            <label class="text-sm font-medium">Senha *</label>
            <input type="password" class="flex h-9 w-full rounded-md border px-3 text-sm" [(ngModel)]="password" />
          </div>
          <div class="space-y-2">
            <label class="text-sm font-medium">Confirmar senha *</label>
            <input type="password" class="flex h-9 w-full rounded-md border px-3 text-sm" [(ngModel)]="confirmPwd" />
          </div>
          <button type="button" class="inline-flex h-9 w-full items-center justify-center rounded-md bg-primary text-sm text-primary-foreground" (click)="completeRegistration()">Concluir cadastro</button>
        }
      </div>
    </div>

    <div class="rounded-xl border bg-card shadow">
      <div class="flex flex-col space-y-1.5 p-6">
        <h3 class="text-base font-semibold">Apar\xEAncia</h3>
        <p class="text-sm text-muted-foreground">Escolha como o aplicativo \xE9 exibido.</p>
      </div>
      <div class="p-6 pt-0">
        <div class="flex items-center justify-between rounded-xl border bg-muted/30 p-4">
          <div>
            <p class="text-sm font-medium">Modo escuro</p>
            <p class="text-xs text-muted-foreground">{{ theme() === 'dark' ? 'Tema escuro ativado' : 'Tema claro ativado' }}</p>
          </div>
          <label class="relative inline-flex cursor-pointer items-center">
            <input type="checkbox" class="peer sr-only" [checked]="theme() === 'dark'" (change)="onThemeChange($any($event.target).checked)" />
            <span class="h-5 w-9 rounded-full bg-input after:absolute after:left-0.5 after:top-0.5 after:size-4 after:rounded-full after:bg-background after:transition peer-checked:bg-primary peer-checked:after:translate-x-4"></span>
          </label>
        </div>
      </div>
    </div>
  }

  <app-change-password-dialog [open]="pwdOpen()" (openChange)="pwdOpen.set($event)" />
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PerfilComponent, { className: "PerfilComponent", filePath: "src/app/pages/perfil/perfil.component.ts", lineNumber: 19 });
})();
export {
  PerfilComponent
};
//# sourceMappingURL=chunk-MDTKX7GD.js.map
