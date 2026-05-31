import { Injectable, signal } from '@angular/core';

export type ToastKind = 'success' | 'error' | 'warning' | 'message';

export interface ToastItem {
  id: number;
  kind: ToastKind;
  title: string;
  description?: string;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private seq = 0;
  readonly items = signal<ToastItem[]>([]);

  private push(kind: ToastKind, title: string, description?: string): void {
    const id = ++this.seq;
    this.items.update((list) => [...list, { id, kind, title, description }]);
    setTimeout(() => this.dismiss(id), 3500);
  }

  success(title: string, description?: string): void {
    this.push('success', title, description);
  }

  error(title: string, description?: string): void {
    this.push('error', title, description);
  }

  warning(title: string, description?: string): void {
    this.push('warning', title, description);
  }

  message(title: string, description?: string): void {
    this.push('message', title, description);
  }

  dismiss(id: number): void {
    this.items.update((list) => list.filter((t) => t.id !== id));
  }
}
