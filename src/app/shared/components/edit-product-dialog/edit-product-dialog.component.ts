import { Component, EventEmitter, Input, OnChanges, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CATEGORIES, Product } from '../../../core/models/estoque.models';
import { StoreService } from '../../../core/services/store.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-edit-product-dialog',
  standalone: true,
  imports: [FormsModule],
  template: `
    @if (product) {
      <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" (click)="close()">
        <div class="grid w-full max-w-md gap-4 rounded-lg border bg-background p-6 shadow-lg" (click)="$event.stopPropagation()">
          <h2 class="text-lg font-semibold">Editar Produto</h2>
          <div class="grid grid-cols-2 gap-3">
            <div class="col-span-2 space-y-2">
              <label class="text-sm font-medium">Nome</label>
              <input class="flex h-9 w-full rounded-md border px-3 text-sm" [(ngModel)]="name" />
            </div>
            <div class="col-span-2 space-y-2">
              <label class="text-sm font-medium">Categoria</label>
              <select class="flex h-9 w-full rounded-md border px-3 text-sm" [(ngModel)]="category">
                @for (c of categories; track c) {
                  <option [value]="c">{{ c }}</option>
                }
              </select>
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium">Qtd. Mínima</label>
              <input type="number" min="0" class="flex h-9 w-full rounded-md border px-3 text-sm" [(ngModel)]="minQty" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium">Custo (R$)</label>
              <input type="number" min="0" step="0.01" class="flex h-9 w-full rounded-md border px-3 text-sm" [(ngModel)]="cost" />
            </div>
            <div class="col-span-2 space-y-2">
              <label class="text-sm font-medium">Descrição</label>
              <textarea rows="2" class="flex w-full rounded-md border px-3 py-2 text-sm" [(ngModel)]="description"></textarea>
            </div>
          </div>
          <div class="flex justify-end gap-2">
            <button type="button" class="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm hover:bg-accent" (click)="close()">Cancelar</button>
            <button type="button" class="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm text-primary-foreground" (click)="save()">Salvar</button>
          </div>
        </div>
      </div>
    }
  `,
})
export class EditProductDialogComponent implements OnChanges {
  private readonly store = inject(StoreService);
  private readonly toast = inject(ToastService);

  readonly categories = CATEGORIES;

  @Input() product: Product | null = null;
  @Output() closed = new EventEmitter<void>();

  name = '';
  category = '';
  minQty = '';
  cost = '';
  description = '';

  ngOnChanges(): void {
    if (this.product) {
      this.name = this.product.name;
      this.category = this.product.category;
      this.minQty = String(this.product.minQty);
      this.cost = String(this.product.cost);
      this.description = this.product.description ?? '';
    }
  }

  close(): void {
    this.closed.emit();
  }

  save(): void {
    if (!this.product || !this.name.trim()) {
      this.toast.error('Informe o nome do produto.');
      return;
    }
    this.store.updateProduct(this.product.id, {
      name: this.name.trim(),
      category: this.category,
      minQty: Number(this.minQty) || 0,
      cost: Number(this.cost) || 0,
      description: this.description.trim(),
    });
    this.toast.success('Produto atualizado!');
    this.close();
  }
}
