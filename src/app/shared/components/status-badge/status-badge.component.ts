import { Component, Input } from '@angular/core';
import { Product, statusOf } from '../../../core/models/estoque.models';

@Component({
  selector: 'app-status-badge',
  standalone: true,
  template: `
    <span
      class="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium"
      [class]="classes"
    >
      <span class="size-1.5 rounded-full bg-current"></span>
      {{ label }}
    </span>
  `,
})
export class StatusBadgeComponent {
  @Input({ required: true }) product!: Product;

  get label(): string {
    const s = statusOf(this.product);
    if (s === 'normal') return 'Estoque Normal';
    if (s === 'low') return 'Estoque Baixo';
    return 'Sem Estoque';
  }

  get classes(): string {
    const s = statusOf(this.product);
    if (s === 'normal') return 'bg-primary/15 text-primary border-primary/30';
    if (s === 'low') return 'bg-warning/15 text-warning border-warning/30';
    return 'bg-destructive/15 text-destructive border-destructive/30';
  }
}
