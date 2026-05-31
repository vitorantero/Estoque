import { Injectable, computed, signal, effect } from '@angular/core';
import {
  ALL_SCREENS,
  AppScreen,
  RolePermissions,
  SCREEN_ROUTES,
  UserAccount,
  UserRole,
} from '../models/estoque.models';

const LS_KEY = 'estoque-auth-v1';
const uid = () => Math.random().toString(36).slice(2, 10);

const DEFAULT_PERMISSIONS: RolePermissions = {
  administrador: [...ALL_SCREENS],
  gerencia: ['dashboard', 'inventario', 'movimentacao', 'perfil'],
  operacional: ['dashboard', 'inventario', 'perfil'],
};

interface AuthState {
  users: UserAccount[];
  currentUserId: string;
  rolePermissions: RolePermissions;
}

export async function hashPassword(password: string): Promise<string> {
  const data = new TextEncoder().encode(password);
  const buf = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

async function buildSeedUsers(): Promise<UserAccount[]> {
  const hash = await hashPassword('123456');
  return [
    {
      id: 'user-admin',
      name: 'Administrador',
      email: 'admin@estoqueia.com',
      passwordHash: hash,
      role: 'administrador',
      registered: true,
    },
    {
      id: 'user-gerencia',
      name: 'Maria Gerência',
      email: 'gerencia@estoqueia.com',
      passwordHash: hash,
      role: 'gerencia',
      registered: true,
    },
    {
      id: 'user-operacional',
      name: 'João Operacional',
      email: 'operacional@estoqueia.com',
      passwordHash: hash,
      role: 'operacional',
      registered: true,
    },
  ];
}

function routeToScreen(path: string): AppScreen | null {
  if (path === '/' || path.startsWith('/?')) return 'dashboard';
  if (path.startsWith('/cadastro')) return 'cadastro';
  if (path.startsWith('/inventario')) return 'inventario';
  if (path.startsWith('/movimentacao')) return 'movimentacao';
  if (path.startsWith('/perfil')) return 'perfil';
  if (path.startsWith('/configuracoes')) return 'configuracoes';
  return null;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly state = signal<AuthState | null>(null);
  private initialized = false;

  readonly loaded = computed(() => this.state() !== null);

  readonly currentUser = computed(() => {
    const s = this.state();
    if (!s) return null;
    return s.users.find((u) => u.id === s.currentUserId) ?? s.users[0];
  });

  readonly users = computed(() => this.state()?.users ?? []);
  readonly rolePermissions = computed(() => this.state()?.rolePermissions ?? DEFAULT_PERMISSIONS);
  readonly isAdmin = computed(() => this.currentUser()?.role === 'administrador');

  constructor() {
    void this.init();
    effect(() => {
      const s = this.state();
      if (!s) return;
      try {
        localStorage.setItem(LS_KEY, JSON.stringify(s));
      } catch {
        /* ignore */
      }
    });
  }

  private async init(): Promise<void> {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as AuthState;
        if (parsed.users?.length && parsed.currentUserId) {
          this.state.set(parsed);
          this.initialized = true;
          return;
        }
      }
    } catch {
      /* ignore */
    }
    const users = await buildSeedUsers();
    this.state.set({
      users,
      currentUserId: users[0].id,
      rolePermissions: DEFAULT_PERMISSIONS,
    });
    this.initialized = true;
  }

  canAccessScreen(screen: AppScreen): boolean {
    const s = this.state();
    const user = this.currentUser();
    if (!s || !user) return false;
    if (screen === 'configuracoes') return user.role === 'administrador';
    const allowed = s.rolePermissions[user.role] ?? [];
    return allowed.includes(screen);
  }

  canAccessRoute(path: string): boolean {
    const screen = routeToScreen(path);
    if (!screen) return true;
    return this.canAccessScreen(screen);
  }

  firstAllowedRoute(): string {
    const user = this.currentUser();
    const s = this.state();
    if (!user || !s) return '/perfil';
    const order: AppScreen[] = ['dashboard', 'inventario', 'movimentacao', 'cadastro', 'perfil'];
    for (const sc of order) {
      if (this.canAccessScreen(sc)) return SCREEN_ROUTES[sc];
    }
    return '/perfil';
  }

  async registerAccount(data: {
    name: string;
    email: string;
    password: string;
    photoUrl?: string;
  }): Promise<boolean> {
    const s = this.state();
    if (!s) return false;
    const email = data.email.trim().toLowerCase();
    if (s.users.some((u) => u.email.toLowerCase() === email && u.id !== s.currentUserId)) {
      return false;
    }
    const passwordHash = await hashPassword(data.password);
    this.state.update((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        users: prev.users.map((u) =>
          u.id === prev.currentUserId
            ? {
                ...u,
                name: data.name.trim(),
                email,
                passwordHash,
                photoUrl: data.photoUrl ?? u.photoUrl,
                registered: true,
              }
            : u,
        ),
      };
    });
    return true;
  }

  setUserPhoto(photoUrl: string | undefined): void {
    this.state.update((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        users: prev.users.map((u) =>
          u.id === prev.currentUserId ? { ...u, photoUrl } : u,
        ),
      };
    });
  }

  async changePassword(current: string, next: string): Promise<boolean> {
    const user = this.currentUser();
    if (!user) return false;
    const curHash = await hashPassword(current);
    if (curHash !== user.passwordHash) return false;
    const nextHash = await hashPassword(next);
    this.state.update((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        users: prev.users.map((u) =>
          u.id === prev.currentUserId ? { ...u, passwordHash: nextHash } : u,
        ),
      };
    });
    return true;
  }

  updateUserRole(userId: string, role: UserRole): void {
    this.state.update((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        users: prev.users.map((u) => (u.id === userId ? { ...u, role } : u)),
      };
    });
  }

  updateRolePermissions(role: UserRole, screens: AppScreen[]): void {
    this.state.update((prev) => {
      if (!prev) return prev;
      const next = { ...prev.rolePermissions, [role]: screens };
      if (role === 'administrador') next.administrador = [...ALL_SCREENS];
      return { ...prev, rolePermissions: next };
    });
  }

  async addUser(data: {
    name: string;
    email: string;
    password: string;
    role: UserRole;
  }): Promise<boolean> {
    const s = this.state();
    if (!s) return false;
    const email = data.email.trim().toLowerCase();
    if (s.users.some((u) => u.email.toLowerCase() === email)) return false;
    const passwordHash = await hashPassword(data.password);
    const user: UserAccount = {
      id: uid(),
      name: data.name.trim(),
      email,
      passwordHash,
      role: data.role,
      registered: true,
    };
    this.state.update((prev) => (prev ? { ...prev, users: [...prev.users, user] } : prev));
    return true;
  }

  switchUser(userId: string): void {
    this.state.update((prev) => (prev ? { ...prev, currentUserId: userId } : prev));
  }
}
