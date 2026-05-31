import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ROLE_LABELS } from '../../core/models/estoque.models';
import { AuthService } from '../../core/services/auth.service';
import { ThemeService } from '../../core/services/theme.service';
import { ToastService } from '../../core/services/toast.service';
import { UserAvatarComponent } from '../../shared/components/user-avatar/user-avatar.component';
import { ChangePasswordDialogComponent } from '../../shared/components/change-password-dialog/change-password-dialog.component';
import { IconComponent } from '../../shared/components/icon/icon.component';

const MAX_PHOTO_BYTES = 800_000;

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [FormsModule, IconComponent, UserAvatarComponent, ChangePasswordDialogComponent],
  templateUrl: './perfil.component.html',
})
export class PerfilComponent {
  private readonly auth = inject(AuthService);
  private readonly themeService = inject(ThemeService);
  private readonly toast = inject(ToastService);

  readonly roleLabels = ROLE_LABELS;
  readonly user = this.auth.currentUser;
  readonly theme = this.themeService.theme;

  pwdOpen = signal(false);
  name = '';
  email = '';
  password = '';
  confirmPwd = '';

  get registered(): boolean {
    return this.user()?.registered ?? false;
  }

  onPhotoPick(e: Event): void {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      this.toast.error('Selecione uma imagem (JPG, PNG ou WebP).');
      return;
    }
    if (file.size > MAX_PHOTO_BYTES) {
      this.toast.error('Imagem muito grande. Máximo 800 KB.');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        this.auth.setUserPhoto(reader.result);
        this.toast.success('Foto de perfil atualizada!');
      }
    };
    reader.readAsDataURL(file);
    input.value = '';
  }

  async completeRegistration(): Promise<void> {
    if (!this.name.trim() || !this.email.trim() || !this.password) {
      this.toast.error('Preencha nome, e-mail e senha.');
      return;
    }
    if (this.password.length < 6) {
      this.toast.error('A senha deve ter pelo menos 6 caracteres.');
      return;
    }
    if (this.password !== this.confirmPwd) {
      this.toast.error('As senhas não conferem.');
      return;
    }
    const ok = await this.auth.registerAccount({
      name: this.name.trim(),
      email: this.email.trim(),
      password: this.password,
      photoUrl: this.user()?.photoUrl,
    });
    if (!ok) {
      this.toast.error('Este e-mail já está cadastrado.');
      return;
    }
    this.toast.success('Cadastro concluído! Nome e e-mail não poderão ser alterados.');
  }

  onThemeChange(dark: boolean): void {
    this.themeService.setTheme(dark ? 'dark' : 'light');
  }
}
