import {
  Router
} from "./chunk-Y6ZJM62F.js";
import {
  AuthService,
  UserAvatarComponent
} from "./chunk-E5XICOUV.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-MHPDYUX5.js";
import {
  ALL_SCREENS,
  Component,
  IconComponent,
  ROLE_LABELS,
  SCREEN_LABELS,
  ToastService,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-SAWBXWAZ.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/pages/configuracoes/configuracoes.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ConfiguracoesComponent_Conditional_0_Conditional_12_For_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Acesso total a todas as telas, incluindo Configura\xE7\xF5es. ");
  }
}
function ConfiguracoesComponent_Conditional_0_Conditional_12_For_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Marque as telas que este perfil pode acessar. ");
  }
}
function ConfiguracoesComponent_Conditional_0_Conditional_12_For_1_For_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 13)(1, "input", 14);
    \u0275\u0275listener("change", function ConfiguracoesComponent_Conditional_0_Conditional_12_For_1_For_10_Conditional_0_Template_input_change_1_listener() {
      \u0275\u0275restoreView(_r3);
      const screen_r4 = \u0275\u0275nextContext().$implicit;
      const role_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleScreen(role_r5, screen_r4));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const screen_r4 = \u0275\u0275nextContext().$implicit;
    const role_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("opacity-80", role_r5 === "administrador");
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.isChecked(role_r5, screen_r4))("disabled", role_r5 === "administrador");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.screenLabels[screen_r4]);
  }
}
function ConfiguracoesComponent_Conditional_0_Conditional_12_For_1_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfiguracoesComponent_Conditional_0_Conditional_12_For_1_For_10_Conditional_0_Template, 4, 5, "label", 12);
  }
  if (rf & 2) {
    const screen_r4 = ctx.$implicit;
    const role_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(screen_r4 !== "configuracoes" || role_r5 === "administrador" ? 0 : -1);
  }
}
function ConfiguracoesComponent_Conditional_0_Conditional_12_For_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function ConfiguracoesComponent_Conditional_0_Conditional_12_For_1_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const role_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.savePermissions(role_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Salvar ", ctx_r1.roleLabels[role_r5], "");
  }
}
function ConfiguracoesComponent_Conditional_0_Conditional_12_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "h3", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 3);
    \u0275\u0275template(5, ConfiguracoesComponent_Conditional_0_Conditional_12_For_1_Conditional_5_Template, 1, 0)(6, ConfiguracoesComponent_Conditional_0_Conditional_12_For_1_Conditional_6_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 9)(8, "div", 10);
    \u0275\u0275repeaterCreate(9, ConfiguracoesComponent_Conditional_0_Conditional_12_For_1_For_10_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ConfiguracoesComponent_Conditional_0_Conditional_12_For_1_Conditional_11_Template, 2, 1, "button", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const role_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.roleLabels[role_r5]);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(role_r5 === "administrador" ? 5 : 6);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.allScreens);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(role_r5 !== "administrador" ? 11 : -1);
  }
}
function ConfiguracoesComponent_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ConfiguracoesComponent_Conditional_0_Conditional_12_For_1_Template, 12, 3, "div", 6, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.roles);
  }
}
function ConfiguracoesComponent_Conditional_0_Conditional_13_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", r_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.roleLabels[r_r8]);
  }
}
function ConfiguracoesComponent_Conditional_0_Conditional_13_For_27_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, "Sess\xE3o atual");
    \u0275\u0275elementEnd();
  }
}
function ConfiguracoesComponent_Conditional_0_Conditional_13_For_27_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("value", r_r11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.roleLabels[r_r11]);
  }
}
function ConfiguracoesComponent_Conditional_0_Conditional_13_For_27_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function ConfiguracoesComponent_Conditional_0_Conditional_13_For_27_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const u_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.switchTo(u_r10.id, u_r10.name));
    });
    \u0275\u0275text(1, "Entrar como");
    \u0275\u0275elementEnd();
  }
}
function ConfiguracoesComponent_Conditional_0_Conditional_13_For_27_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function ConfiguracoesComponent_Conditional_0_Conditional_13_For_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 26)(1, "td", 30)(2, "div", 31);
    \u0275\u0275element(3, "app-user-avatar", 32);
    \u0275\u0275elementStart(4, "div")(5, "p", 33);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ConfiguracoesComponent_Conditional_0_Conditional_13_For_27_Conditional_7_Template, 2, 0, "span", 34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "td", 35);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 30)(11, "select", 36);
    \u0275\u0275listener("ngModelChange", function ConfiguracoesComponent_Conditional_0_Conditional_13_For_27_Template_select_ngModelChange_11_listener($event) {
      const u_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onRoleChange(u_r10.id, $event));
    });
    \u0275\u0275repeaterCreate(12, ConfiguracoesComponent_Conditional_0_Conditional_13_For_27_For_13_Template, 2, 2, "option", 22, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 29);
    \u0275\u0275template(15, ConfiguracoesComponent_Conditional_0_Conditional_13_For_27_Conditional_15_Template, 2, 0, "button", 37)(16, ConfiguracoesComponent_Conditional_0_Conditional_13_For_27_Conditional_16_Template, 2, 0, "span", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_15_0;
    let tmp_19_0;
    const u_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("name", u_r10.name)("photoUrl", u_r10.photoUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r10.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(u_r10.id === ((tmp_15_0 = ctx_r1.currentUser()) == null ? null : tmp_15_0.id) ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r10.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", u_r10.role);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.roles);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(u_r10.id !== ((tmp_19_0 = ctx_r1.currentUser()) == null ? null : tmp_19_0.id) ? 15 : 16);
  }
}
function ConfiguracoesComponent_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "h3", 8);
    \u0275\u0275text(3, "Novo usu\xE1rio");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 17)(5, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function ConfiguracoesComponent_Conditional_0_Conditional_13_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newName, $event) || (ctx_r1.newName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function ConfiguracoesComponent_Conditional_0_Conditional_13_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newEmail, $event) || (ctx_r1.newEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function ConfiguracoesComponent_Conditional_0_Conditional_13_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newPwd, $event) || (ctx_r1.newPwd = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "select", 21);
    \u0275\u0275twoWayListener("ngModelChange", function ConfiguracoesComponent_Conditional_0_Conditional_13_Template_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newRole, $event) || (ctx_r1.newRole = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(9, ConfiguracoesComponent_Conditional_0_Conditional_13_For_10_Template, 2, 2, "option", 22, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 23);
    \u0275\u0275listener("click", function ConfiguracoesComponent_Conditional_0_Conditional_13_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addUser());
    });
    \u0275\u0275text(12, "Cadastrar usu\xE1rio");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 24)(14, "table", 25)(15, "thead", 26)(16, "tr")(17, "th", 27);
    \u0275\u0275text(18, "Usu\xE1rio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 28);
    \u0275\u0275text(20, "E-mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 27);
    \u0275\u0275text(22, "Perfil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 29);
    \u0275\u0275text(24, "A\xE7\xF5es");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "tbody");
    \u0275\u0275repeaterCreate(26, ConfiguracoesComponent_Conditional_0_Conditional_13_For_27_Template, 17, 7, "tr", 26, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newName);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newEmail);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newPwd);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newRole);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.roles);
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r1.users());
  }
}
function ConfiguracoesComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
    \u0275\u0275element(3, "app-icon", 2);
    \u0275\u0275text(4, " Configura\xE7\xF5es ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 3);
    \u0275\u0275text(6, "Gerencie perfis de acesso, usu\xE1rios e telas permitidas.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
    \u0275\u0275listener("click", function ConfiguracoesComponent_Conditional_0_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab.set("permissoes"));
    });
    \u0275\u0275text(9, "Permiss\xF5es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 5);
    \u0275\u0275listener("click", function ConfiguracoesComponent_Conditional_0_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab.set("usuarios"));
    });
    \u0275\u0275text(11, "Usu\xE1rios");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, ConfiguracoesComponent_Conditional_0_Conditional_12_Template, 2, 0)(13, ConfiguracoesComponent_Conditional_0_Conditional_13_Template, 28, 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275classProp("bg-background", ctx_r1.activeTab() === "permissoes")("shadow", ctx_r1.activeTab() === "permissoes");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-background", ctx_r1.activeTab() === "usuarios")("shadow", ctx_r1.activeTab() === "usuarios");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.activeTab() === "permissoes" ? 12 : 13);
  }
}
var ROLES = ["administrador", "gerencia", "operacional"];
var ConfiguracoesComponent = class _ConfiguracoesComponent {
  authService = inject(AuthService);
  auth = this.authService;
  toast = inject(ToastService);
  router = inject(Router);
  roles = ROLES;
  allScreens = ALL_SCREENS;
  screenLabels = SCREEN_LABELS;
  roleLabels = ROLE_LABELS;
  users = this.auth.users;
  currentUser = this.auth.currentUser;
  rolePermissions = this.auth.rolePermissions;
  activeTab = signal("permissoes");
  draftPerms = signal(this.auth.rolePermissions());
  newName = "";
  newEmail = "";
  newPwd = "";
  newRole = "operacional";
  constructor() {
    effect(() => {
      this.draftPerms.set(__spreadValues({}, this.auth.rolePermissions()));
    });
  }
  ngOnInit() {
    if (!this.auth.isAdmin()) {
      void this.router.navigateByUrl("/");
      this.toast.error("Acesso restrito a administradores.");
    }
  }
  isChecked(role, screen) {
    if (role === "administrador")
      return true;
    return this.draftPerms()[role].includes(screen);
  }
  toggleScreen(role, screen) {
    if (role === "administrador")
      return;
    this.draftPerms.update((prev) => {
      const current = [...prev[role]];
      const next = current.includes(screen) ? current.filter((s) => s !== screen) : [...current, screen];
      return __spreadProps(__spreadValues({}, prev), { [role]: next });
    });
  }
  savePermissions(role) {
    this.auth.updateRolePermissions(role, this.draftPerms()[role]);
    this.toast.success(`Permiss\xF5es de ${ROLE_LABELS[role]} salvas!`);
  }
  addUser() {
    return __async(this, null, function* () {
      if (!this.newName.trim() || !this.newEmail.trim() || !this.newPwd) {
        this.toast.error("Preencha nome, e-mail e senha.");
        return;
      }
      const ok = yield this.auth.addUser({
        name: this.newName.trim(),
        email: this.newEmail.trim(),
        password: this.newPwd,
        role: this.newRole
      });
      if (!ok) {
        this.toast.error("E-mail j\xE1 cadastrado.");
        return;
      }
      this.toast.success("Usu\xE1rio criado!");
      this.newName = "";
      this.newEmail = "";
      this.newPwd = "";
      this.newRole = "operacional";
    });
  }
  switchTo(userId, name) {
    this.auth.switchUser(userId);
    void this.router.navigateByUrl("/");
    this.toast.success(`Sess\xE3o: ${name}`);
  }
  onRoleChange(userId, role) {
    this.auth.updateUserRole(userId, role);
    this.toast.success("Perfil atualizado!");
  }
  static \u0275fac = function ConfiguracoesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfiguracoesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfiguracoesComponent, selectors: [["app-configuracoes"]], decls: 1, vars: 1, consts: [[1, "space-y-6"], [1, "flex", "items-center", "gap-2", "text-2xl", "font-bold", "tracking-tight"], ["name", "settings", 1, "size-6"], [1, "text-sm", "text-muted-foreground"], [1, "grid", "w-full", "max-w-md", "grid-cols-2", "gap-1", "rounded-lg", "bg-muted", "p-1"], ["type", "button", 1, "rounded-md", "px-3", "py-2", "text-sm", 3, "click"], [1, "rounded-xl", "border", "bg-card", "shadow"], [1, "p-6", "pb-2"], [1, "text-base", "font-semibold"], [1, "space-y-4", "p-6", "pt-0"], [1, "grid", "grid-cols-1", "gap-3", "sm:grid-cols-2"], ["type", "button", 1, "inline-flex", "h-9", "items-center", "justify-center", "rounded-md", "bg-primary", "px-4", "text-sm", "text-primary-foreground"], [1, "flex", "items-center", "gap-3", "rounded-lg", "border", "p-3", 3, "opacity-80"], [1, "flex", "items-center", "gap-3", "rounded-lg", "border", "p-3"], ["type", "checkbox", 3, "change", "checked", "disabled"], [1, "text-sm", "font-medium"], ["type", "button", 1, "inline-flex", "h-9", "items-center", "justify-center", "rounded-md", "bg-primary", "px-4", "text-sm", "text-primary-foreground", 3, "click"], [1, "grid", "grid-cols-1", "gap-3", "p-6", "pt-0", "sm:grid-cols-2"], ["placeholder", "Nome", 1, "flex", "h-9", "rounded-md", "border", "px-3", "text-sm", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "E-mail", 1, "flex", "h-9", "rounded-md", "border", "px-3", "text-sm", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "Senha inicial", 1, "flex", "h-9", "rounded-md", "border", "px-3", "text-sm", 3, "ngModelChange", "ngModel"], [1, "flex", "h-9", "rounded-md", "border", "px-3", "text-sm", 3, "ngModelChange", "ngModel"], [3, "value"], ["type", "button", 1, "inline-flex", "h-9", "items-center", "justify-center", "rounded-md", "bg-primary", "px-4", "text-sm", "text-primary-foreground", "sm:col-span-2", 3, "click"], [1, "rounded-xl", "border", "bg-card", "shadow", "overflow-x-auto"], [1, "w-full", "text-sm"], [1, "border-b"], [1, "p-2", "text-left"], [1, "hidden", "p-2", "text-left", "sm:table-cell"], [1, "p-2", "text-right"], [1, "p-2"], [1, "flex", "items-center", "gap-3"], [3, "name", "photoUrl"], [1, "font-medium"], [1, "text-[10px]", "text-muted-foreground"], [1, "hidden", "p-2", "text-muted-foreground", "sm:table-cell"], [1, "flex", "h-9", "rounded-md", "border", "px-2", "text-sm", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "inline-flex", "h-8", "items-center", "justify-center", "rounded-md", "border", "px-3", "text-xs"], [1, "text-xs", "text-muted-foreground"], ["type", "button", 1, "inline-flex", "h-8", "items-center", "justify-center", "rounded-md", "border", "px-3", "text-xs", 3, "click"]], template: function ConfiguracoesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ConfiguracoesComponent_Conditional_0_Template, 14, 9, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.authService.isAdmin() ? 0 : -1);
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, IconComponent, UserAvatarComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguracoesComponent, [{
    type: Component,
    args: [{ selector: "app-configuracoes", standalone: true, imports: [FormsModule, IconComponent, UserAvatarComponent], template: `@if (authService.isAdmin()) {
  <div class="space-y-6">
    <div>
      <h1 class="flex items-center gap-2 text-2xl font-bold tracking-tight">
        <app-icon name="settings" class="size-6" />
        Configura\xE7\xF5es
      </h1>
      <p class="text-sm text-muted-foreground">Gerencie perfis de acesso, usu\xE1rios e telas permitidas.</p>
    </div>

    <div class="grid w-full max-w-md grid-cols-2 gap-1 rounded-lg bg-muted p-1">
      <button type="button" class="rounded-md px-3 py-2 text-sm" [class.bg-background]="activeTab() === 'permissoes'" [class.shadow]="activeTab() === 'permissoes'" (click)="activeTab.set('permissoes')">Permiss\xF5es</button>
      <button type="button" class="rounded-md px-3 py-2 text-sm" [class.bg-background]="activeTab() === 'usuarios'" [class.shadow]="activeTab() === 'usuarios'" (click)="activeTab.set('usuarios')">Usu\xE1rios</button>
    </div>

    @if (activeTab() === 'permissoes') {
      @for (role of roles; track role) {
        <div class="rounded-xl border bg-card shadow">
          <div class="p-6 pb-2">
            <h3 class="text-base font-semibold">{{ roleLabels[role] }}</h3>
            <p class="text-sm text-muted-foreground">
              @if (role === 'administrador') {
                Acesso total a todas as telas, incluindo Configura\xE7\xF5es.
              } @else {
                Marque as telas que este perfil pode acessar.
              }
            </p>
          </div>
          <div class="space-y-4 p-6 pt-0">
            <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
              @for (screen of allScreens; track screen) {
                @if (screen !== 'configuracoes' || role === 'administrador') {
                  <label class="flex items-center gap-3 rounded-lg border p-3" [class.opacity-80]="role === 'administrador'">
                    <input type="checkbox" [checked]="isChecked(role, screen)" [disabled]="role === 'administrador'" (change)="toggleScreen(role, screen)" />
                    <span class="text-sm font-medium">{{ screenLabels[screen] }}</span>
                  </label>
                }
              }
            </div>
            @if (role !== 'administrador') {
              <button type="button" class="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm text-primary-foreground" (click)="savePermissions(role)">Salvar {{ roleLabels[role] }}</button>
            }
          </div>
        </div>
      }
    } @else {
      <div class="rounded-xl border bg-card shadow">
        <div class="p-6 pb-2"><h3 class="text-base font-semibold">Novo usu\xE1rio</h3></div>
        <div class="grid grid-cols-1 gap-3 p-6 pt-0 sm:grid-cols-2">
          <input class="flex h-9 rounded-md border px-3 text-sm" placeholder="Nome" [(ngModel)]="newName" />
          <input type="email" class="flex h-9 rounded-md border px-3 text-sm" placeholder="E-mail" [(ngModel)]="newEmail" />
          <input type="password" class="flex h-9 rounded-md border px-3 text-sm" placeholder="Senha inicial" [(ngModel)]="newPwd" />
          <select class="flex h-9 rounded-md border px-3 text-sm" [(ngModel)]="newRole">
            @for (r of roles; track r) { <option [value]="r">{{ roleLabels[r] }}</option> }
          </select>
          <button type="button" class="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm text-primary-foreground sm:col-span-2" (click)="addUser()">Cadastrar usu\xE1rio</button>
        </div>
      </div>

      <div class="rounded-xl border bg-card shadow overflow-x-auto">
        <table class="w-full text-sm">
          <thead class="border-b">
            <tr>
              <th class="p-2 text-left">Usu\xE1rio</th>
              <th class="hidden p-2 text-left sm:table-cell">E-mail</th>
              <th class="p-2 text-left">Perfil</th>
              <th class="p-2 text-right">A\xE7\xF5es</th>
            </tr>
          </thead>
          <tbody>
            @for (u of users(); track u.id) {
              <tr class="border-b">
                <td class="p-2">
                  <div class="flex items-center gap-3">
                    <app-user-avatar [name]="u.name" [photoUrl]="u.photoUrl" />
                    <div>
                      <p class="font-medium">{{ u.name }}</p>
                      @if (u.id === currentUser()?.id) {
                        <span class="text-[10px] text-muted-foreground">Sess\xE3o atual</span>
                      }
                    </div>
                  </div>
                </td>
                <td class="hidden p-2 text-muted-foreground sm:table-cell">{{ u.email }}</td>
                <td class="p-2">
                  <select class="flex h-9 rounded-md border px-2 text-sm" [ngModel]="u.role" (ngModelChange)="onRoleChange(u.id, $event)">
                    @for (r of roles; track r) { <option [value]="r">{{ roleLabels[r] }}</option> }
                  </select>
                </td>
                <td class="p-2 text-right">
                  @if (u.id !== currentUser()?.id) {
                    <button type="button" class="inline-flex h-8 items-center justify-center rounded-md border px-3 text-xs" (click)="switchTo(u.id, u.name)">Entrar como</button>
                  } @else {
                    <span class="text-xs text-muted-foreground">\u2014</span>
                  }
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    }
  </div>
}
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfiguracoesComponent, { className: "ConfiguracoesComponent", filePath: "src/app/pages/configuracoes/configuracoes.component.ts", lineNumber: 24 });
})();
export {
  ConfiguracoesComponent
};
//# sourceMappingURL=chunk-ECHNLUIL.js.map
