import { Component, inject } from '@angular/core';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-toast-host',
  standalone: true,
  template: `
    <div class="fixed top-4 left-1/2 z-[100] flex w-full max-w-sm -translate-x-1/2 flex-col gap-2 px-4">
      @for (t of toast.items(); track t.id) {
        <div
          class="rounded-lg border px-4 py-3 text-sm shadow-lg backdrop-blur"
          [class]="toastClass(t.kind)"
          (click)="toast.dismiss(t.id)"
        >
          <p class="font-medium">{{ t.title }}</p>
          @if (t.description) {
            <p class="mt-0.5 text-xs opacity-90">{{ t.description }}</p>
          }
        </div>
      }
    </div>
  `,
})
export class ToastHostComponent {
  readonly toast = inject(ToastService);

  toastClass(kind: string): string {
    switch (kind) {
      case 'success':
        return 'border-primary/30 bg-card text-foreground';
      case 'error':
        return 'border-destructive/40 bg-destructive/10 text-destructive';
      case 'warning':
        return 'border-warning/40 bg-warning/10 text-warning';
      default:
        return 'border-border bg-card text-foreground';
    }
  }
}
