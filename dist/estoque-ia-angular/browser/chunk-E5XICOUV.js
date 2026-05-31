import {
  ALL_SCREENS,
  Component,
  Injectable,
  Input,
  SCREEN_ROUTES,
  computed,
  effect,
  profileInitials,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-SAWBXWAZ.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/core/services/auth.service.ts
var LS_KEY = "estoque-auth-v1";
var uid = () => Math.random().toString(36).slice(2, 10);
var DEFAULT_PERMISSIONS = {
  administrador: [...ALL_SCREENS],
  gerencia: ["dashboard", "inventario", "movimentacao", "perfil"],
  operacional: ["dashboard", "inventario", "perfil"]
};
function hashPassword(password) {
  return __async(this, null, function* () {
    const data = new TextEncoder().encode(password);
    const buf = yield crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
  });
}
function buildSeedUsers() {
  return __async(this, null, function* () {
    const hash = yield hashPassword("123456");
    return [
      {
        id: "user-admin",
        name: "Administrador",
        email: "admin@estoqueia.com",
        passwordHash: hash,
        role: "administrador",
        registered: true
      },
      {
        id: "user-gerencia",
        name: "Maria Ger\xEAncia",
        email: "gerencia@estoqueia.com",
        passwordHash: hash,
        role: "gerencia",
        registered: true
      },
      {
        id: "user-operacional",
        name: "Jo\xE3o Operacional",
        email: "operacional@estoqueia.com",
        passwordHash: hash,
        role: "operacional",
        registered: true
      }
    ];
  });
}
function routeToScreen(path) {
  if (path === "/" || path.startsWith("/?"))
    return "dashboard";
  if (path.startsWith("/cadastro"))
    return "cadastro";
  if (path.startsWith("/inventario"))
    return "inventario";
  if (path.startsWith("/movimentacao"))
    return "movimentacao";
  if (path.startsWith("/perfil"))
    return "perfil";
  if (path.startsWith("/configuracoes"))
    return "configuracoes";
  return null;
}
var AuthService = class _AuthService {
  state = signal(null);
  initialized = false;
  loaded = computed(() => this.state() !== null);
  currentUser = computed(() => {
    const s = this.state();
    if (!s)
      return null;
    return s.users.find((u) => u.id === s.currentUserId) ?? s.users[0];
  });
  users = computed(() => this.state()?.users ?? []);
  rolePermissions = computed(() => this.state()?.rolePermissions ?? DEFAULT_PERMISSIONS);
  isAdmin = computed(() => this.currentUser()?.role === "administrador");
  constructor() {
    void this.init();
    effect(() => {
      const s = this.state();
      if (!s)
        return;
      try {
        localStorage.setItem(LS_KEY, JSON.stringify(s));
      } catch {
      }
    });
  }
  init() {
    return __async(this, null, function* () {
      try {
        const raw = localStorage.getItem(LS_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed.users?.length && parsed.currentUserId) {
            this.state.set(parsed);
            this.initialized = true;
            return;
          }
        }
      } catch {
      }
      const users = yield buildSeedUsers();
      this.state.set({
        users,
        currentUserId: users[0].id,
        rolePermissions: DEFAULT_PERMISSIONS
      });
      this.initialized = true;
    });
  }
  canAccessScreen(screen) {
    const s = this.state();
    const user = this.currentUser();
    if (!s || !user)
      return false;
    if (screen === "configuracoes")
      return user.role === "administrador";
    const allowed = s.rolePermissions[user.role] ?? [];
    return allowed.includes(screen);
  }
  canAccessRoute(path) {
    const screen = routeToScreen(path);
    if (!screen)
      return true;
    return this.canAccessScreen(screen);
  }
  firstAllowedRoute() {
    const user = this.currentUser();
    const s = this.state();
    if (!user || !s)
      return "/perfil";
    const order = ["dashboard", "inventario", "movimentacao", "cadastro", "perfil"];
    for (const sc of order) {
      if (this.canAccessScreen(sc))
        return SCREEN_ROUTES[sc];
    }
    return "/perfil";
  }
  registerAccount(data) {
    return __async(this, null, function* () {
      const s = this.state();
      if (!s)
        return false;
      const email = data.email.trim().toLowerCase();
      if (s.users.some((u) => u.email.toLowerCase() === email && u.id !== s.currentUserId)) {
        return false;
      }
      const passwordHash = yield hashPassword(data.password);
      this.state.update((prev) => {
        if (!prev)
          return prev;
        return __spreadProps(__spreadValues({}, prev), {
          users: prev.users.map((u) => u.id === prev.currentUserId ? __spreadProps(__spreadValues({}, u), {
            name: data.name.trim(),
            email,
            passwordHash,
            photoUrl: data.photoUrl ?? u.photoUrl,
            registered: true
          }) : u)
        });
      });
      return true;
    });
  }
  setUserPhoto(photoUrl) {
    this.state.update((prev) => {
      if (!prev)
        return prev;
      return __spreadProps(__spreadValues({}, prev), {
        users: prev.users.map((u) => u.id === prev.currentUserId ? __spreadProps(__spreadValues({}, u), { photoUrl }) : u)
      });
    });
  }
  changePassword(current, next) {
    return __async(this, null, function* () {
      const user = this.currentUser();
      if (!user)
        return false;
      const curHash = yield hashPassword(current);
      if (curHash !== user.passwordHash)
        return false;
      const nextHash = yield hashPassword(next);
      this.state.update((prev) => {
        if (!prev)
          return prev;
        return __spreadProps(__spreadValues({}, prev), {
          users: prev.users.map((u) => u.id === prev.currentUserId ? __spreadProps(__spreadValues({}, u), { passwordHash: nextHash }) : u)
        });
      });
      return true;
    });
  }
  updateUserRole(userId, role) {
    this.state.update((prev) => {
      if (!prev)
        return prev;
      return __spreadProps(__spreadValues({}, prev), {
        users: prev.users.map((u) => u.id === userId ? __spreadProps(__spreadValues({}, u), { role }) : u)
      });
    });
  }
  updateRolePermissions(role, screens) {
    this.state.update((prev) => {
      if (!prev)
        return prev;
      const next = __spreadProps(__spreadValues({}, prev.rolePermissions), { [role]: screens });
      if (role === "administrador")
        next.administrador = [...ALL_SCREENS];
      return __spreadProps(__spreadValues({}, prev), { rolePermissions: next });
    });
  }
  addUser(data) {
    return __async(this, null, function* () {
      const s = this.state();
      if (!s)
        return false;
      const email = data.email.trim().toLowerCase();
      if (s.users.some((u) => u.email.toLowerCase() === email))
        return false;
      const passwordHash = yield hashPassword(data.password);
      const user = {
        id: uid(),
        name: data.name.trim(),
        email,
        passwordHash,
        role: data.role,
        registered: true
      };
      this.state.update((prev) => prev ? __spreadProps(__spreadValues({}, prev), { users: [...prev.users, user] }) : prev);
      return true;
    });
  }
  switchUser(userId) {
    this.state.update((prev) => prev ? __spreadProps(__spreadValues({}, prev), { currentUserId: userId }) : prev);
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/shared/components/user-avatar/user-avatar.component.ts
function UserAvatarComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.photoUrl, \u0275\u0275sanitizeUrl)("alt", ctx_r0.name);
  }
}
function UserAvatarComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.fallbackClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.initials, " ");
  }
}
var UserAvatarComponent = class _UserAvatarComponent {
  name;
  photoUrl;
  sizeClass = "size-9";
  fallbackClass = "";
  get initials() {
    return profileInitials(this.name);
  }
  static \u0275fac = function UserAvatarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserAvatarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserAvatarComponent, selectors: [["app-user-avatar"]], inputs: { name: "name", photoUrl: "photoUrl", sizeClass: "sizeClass", fallbackClass: "fallbackClass" }, decls: 3, vars: 3, consts: [[1, "relative", "flex", "shrink-0", "overflow-hidden", "rounded-full"], [1, "aspect-square", "h-full", "w-full", "object-cover", 3, "src", "alt"], [1, "flex", "h-full", "w-full", "items-center", "justify-center", "rounded-full", "bg-primary", "text-xs", "font-semibold", "text-primary-foreground", 3, "class"], [1, "flex", "h-full", "w-full", "items-center", "justify-center", "rounded-full", "bg-primary", "text-xs", "font-semibold", "text-primary-foreground"]], template: function UserAvatarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, UserAvatarComponent_Conditional_1_Template, 1, 2, "img", 1)(2, UserAvatarComponent_Conditional_2_Template, 2, 3, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classMap(ctx.sizeClass);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.photoUrl ? 1 : 2);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAvatarComponent, [{
    type: Component,
    args: [{
      selector: "app-user-avatar",
      standalone: true,
      template: `
    <div
      class="relative flex shrink-0 overflow-hidden rounded-full"
      [class]="sizeClass"
    >
      @if (photoUrl) {
        <img [src]="photoUrl" [alt]="name" class="aspect-square h-full w-full object-cover" />
      } @else {
        <div
          class="flex h-full w-full items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground"
          [class]="fallbackClass"
        >
          {{ initials }}
        </div>
      }
    </div>
  `
    }]
  }], null, { name: [{
    type: Input,
    args: [{ required: true }]
  }], photoUrl: [{
    type: Input
  }], sizeClass: [{
    type: Input
  }], fallbackClass: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserAvatarComponent, { className: "UserAvatarComponent", filePath: "src/app/shared/components/user-avatar/user-avatar.component.ts", lineNumber: 25 });
})();

export {
  AuthService,
  UserAvatarComponent
};
//# sourceMappingURL=chunk-E5XICOUV.js.map
