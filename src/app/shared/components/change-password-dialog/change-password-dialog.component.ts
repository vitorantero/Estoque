import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { ToastService } from '../../../core/services/toast.service';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-change-password-dialog',
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
  `,
})
export class ChangePasswordDialogComponent {
  private readonly auth = inject(AuthService);
  private readonly toast = inject(ToastService);

  @Input() open = false;
  @Output() openChange = new EventEmitter<boolean>();

  current = '';
  next = '';
  confirm = '';
  loading = false;

  close(): void {
    this.current = '';
    this.next = '';
    this.confirm = '';
    this.openChange.emit(false);
  }

  async submit(): Promise<void> {
    if (!this.current || !this.next) {
      this.toast.error('Preencha todos os campos.');
      return;
    }
    if (this.next.length < 6) {
      this.toast.error('A nova senha deve ter pelo menos 6 caracteres.');
      return;
    }
    if (this.next !== this.confirm) {
      this.toast.error('A confirmação não confere.');
      return;
    }
    this.loading = true;
    const ok = await this.auth.changePassword(this.current, this.next);
    this.loading = false;
    if (!ok) {
      this.toast.error('Senha atual incorreta.');
      return;
    }
    this.toast.success('Senha alterada com sucesso!');
    this.close();
  }
}
