import { Component, EventEmitter, Input, OnChanges, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IN_REASONS, MovementType, OUT_REASONS, Product } from '../../../core/models/estoque.models';
import { StoreService } from '../../../core/services/store.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-quick-movement-dialog',
  standalone: true,
  imports: [FormsModule],
  template: `
    @if (product && type) {
      <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" (click)="close()">
        <div class="grid w-full max-w-md gap-4 rounded-lg border bg-background p-6 shadow-lg" (click)="$event.stopPropagation()">
          <h2 class="text-lg font-semibold">{{ type === 'in' ? 'Registrar Entrada' : 'Registrar Saída' }}</h2>
          <p class="text-sm text-muted-foreground">{{ product.name }} · {{ product.qty }} {{ product.unit }} em estoque</p>
          <div class="space-y-2">
            <label class="text-sm font-medium">Quantidade</label>
            <input type="number" min="1" class="flex h-9 w-full rounded-md border px-3 text-sm" [(ngModel)]="qty" />
          </div>
          <div class="space-y-2">
            <label class="text-sm font-medium">Motivo</label>
            <select class="flex h-9 w-full rounded-md border px-3 text-sm" [(ngModel)]="reason">
              @for (r of reasons; track r) {
                <option [value]="r">{{ r }}</option>
              }
            </select>
          </div>
          <div class="flex justify-end gap-2">
            <button type="button" class="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm hover:bg-accent" (click)="close()">Cancelar</button>
            <button type="button" class="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm text-primary-foreground" [class]="type === 'in' ? 'bg-primary' : 'bg-destructive'" (click)="confirm()">Confirmar</button>
          </div>
        </div>
      </div>
    }
  `,
})
export class QuickMovementDialogComponent implements OnChanges {
  private readonly store = inject(StoreService);
  private readonly toast = inject(ToastService);

  @Input() product: Product | null = null;
  @Input() type: MovementType | null = null;
  @Output() closed = new EventEmitter<void>();

  qty = '1';
  reason = '';
  reasons: string[] = [];

  ngOnChanges(): void {
    if (this.type) {
      this.reasons = this.type === 'in' ? IN_REASONS : OUT_REASONS;
      this.reason = this.reasons[0];
      this.qty = '1';
    }
  }

  close(): void {
    this.closed.emit();
  }

  confirm(): void {
    if (!this.product || !this.type) return;
    const n = Number(this.qty);
    if (!n || n <= 0) {
      this.toast.error('Quantidade inválida.');
      return;
    }
    const ok = this.store.registerMovement({
      productId: this.product.id,
      type: this.type,
      qty: n,
      reason: this.reason,
    });
    if (ok) {
      this.toast.success(`${this.type === 'in' ? 'Entrada' : 'Saída'} registrada com sucesso!`);
      this.close();
    } else {
      this.toast.error('Não foi possível registrar a movimentação.');
    }
  }
}
