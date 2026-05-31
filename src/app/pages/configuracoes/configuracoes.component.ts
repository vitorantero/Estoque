import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  ALL_SCREENS,
  AppScreen,
  ROLE_LABELS,
  SCREEN_LABELS,
  UserRole,
} from '../../core/models/estoque.models';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../core/services/toast.service';
import { UserAvatarComponent } from '../../shared/components/user-avatar/user-avatar.component';
import { IconComponent } from '../../shared/components/icon/icon.component';

const ROLES: UserRole[] = ['administrador', 'gerencia', 'operacional'];

@Component({
  selector: 'app-configuracoes',
  standalone: true,
  imports: [FormsModule, IconComponent, UserAvatarComponent],
  templateUrl: './configuracoes.component.html',
})
export class ConfiguracoesComponent implements OnInit {
  readonly authService = inject(AuthService);
  private readonly auth = this.authService;
  private readonly toast = inject(ToastService);
  private readonly router = inject(Router);

  readonly roles = ROLES;
  readonly allScreens = ALL_SCREENS;
  readonly screenLabels = SCREEN_LABELS;
  readonly roleLabels = ROLE_LABELS;
  readonly users = this.auth.users;
  readonly currentUser = this.auth.currentUser;
  readonly rolePermissions = this.auth.rolePermissions;

  activeTab = signal<'permissoes' | 'usuarios'>('permissoes');
  draftPerms = signal(this.auth.rolePermissions());

  newName = '';
  newEmail = '';
  newPwd = '';
  newRole: UserRole = 'operacional';

  constructor() {
    effect(() => {
      this.draftPerms.set({ ...this.auth.rolePermissions() });
    });
  }

  ngOnInit(): void {
    if (!this.auth.isAdmin()) {
      void this.router.navigateByUrl('/');
      this.toast.error('Acesso restrito a administradores.');
    }
  }

  isChecked(role: UserRole, screen: AppScreen): boolean {
    if (role === 'administrador') return true;
    return this.draftPerms()[role].includes(screen);
  }

  toggleScreen(role: UserRole, screen: AppScreen): void {
    if (role === 'administrador') return;
    this.draftPerms.update((prev) => {
      const current = [...prev[role]];
      const next = current.includes(screen) ? current.filter((s) => s !== screen) : [...current, screen];
      return { ...prev, [role]: next };
    });
  }

  savePermissions(role: UserRole): void {
    this.auth.updateRolePermissions(role, this.draftPerms()[role]);
    this.toast.success(`Permissões de ${ROLE_LABELS[role]} salvas!`);
  }

  async addUser(): Promise<void> {
    if (!this.newName.trim() || !this.newEmail.trim() || !this.newPwd) {
      this.toast.error('Preencha nome, e-mail e senha.');
      return;
    }
    const ok = await this.auth.addUser({
      name: this.newName.trim(),
      email: this.newEmail.trim(),
      password: this.newPwd,
      role: this.newRole,
    });
    if (!ok) {
      this.toast.error('E-mail já cadastrado.');
      return;
    }
    this.toast.success('Usuário criado!');
    this.newName = '';
    this.newEmail = '';
    this.newPwd = '';
    this.newRole = 'operacional';
  }

  switchTo(userId: string, name: string): void {
    this.auth.switchUser(userId);
    void this.router.navigateByUrl('/');
    this.toast.success(`Sessão: ${name}`);
  }

  onRoleChange(userId: string, role: UserRole): void {
    this.auth.updateUserRole(userId, role);
    this.toast.success('Perfil atualizado!');
  }
}
