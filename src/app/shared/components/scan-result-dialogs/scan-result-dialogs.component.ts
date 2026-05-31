import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../core/models/estoque.models';
import { StatusBadgeComponent } from '../status-badge/status-badge.component';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-scan-product-found-dialog',
  standalone: true,
  imports: [StatusBadgeComponent, IconComponent],
  template: `
    @if (open && product) {
      <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" (click)="close()">
        <div class="grid w-full max-w-md gap-4 rounded-lg border bg-background p-6 shadow-lg" (click)="$event.stopPropagation()">
          <div>
            <h2 class="flex items-center gap-2 text-lg font-semibold">
              <app-icon name="package" class="size-5 text-primary" />
              Produto cadastrado
            </h2>
            <p class="font-mono text-sm text-muted-foreground">{{ product.sku }}</p>
          </div>
          <div class="space-y-4">
            <div>
              <p class="text-lg font-semibold">{{ product.name }}</p>
              <div class="mt-2"><app-status-badge [product]="product" /></div>
            </div>
            <div class="grid grid-cols-2 gap-3 rounded-xl border bg-muted/30 p-4 text-sm">
              <div><p class="text-xs text-muted-foreground">Categoria</p><p class="font-medium">{{ product.category }}</p></div>
              <div><p class="text-xs text-muted-foreground">Unidade</p><p class="font-medium">{{ product.unit }}</p></div>
              <div><p class="text-xs text-muted-foreground">Em estoque</p><p class="font-medium">{{ product.qty }} {{ product.unit }}</p></div>
              <div><p class="text-xs text-muted-foreground">Estoque mínimo</p><p class="font-medium">{{ product.minQty }} {{ product.unit }}</p></div>
              <div><p class="text-xs text-muted-foreground">Custo unitário</p><p class="font-medium">R$ {{ product.cost.toFixed(2) }}</p></div>
              <div><p class="text-xs text-muted-foreground">SKU</p><p class="font-medium">{{ product.sku }}</p></div>
            </div>
            @if (product.description) {
              <div class="rounded-xl bg-muted/50 p-3">
                <p class="text-xs text-muted-foreground">Descrição</p>
                <p class="mt-1 text-sm">{{ product.description }}</p>
              </div>
            }
          </div>
          <button type="button" class="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm text-primary-foreground" (click)="close()">Fechar</button>
        </div>
      </div>
    }
  `,
})
export class ScanProductFoundDialogComponent {
  @Input() product: Product | null = null;
  @Input() open = false;
  @Output() openChange = new EventEmitter<boolean>();

  close(): void {
    this.openChange.emit(false);
  }
}

@Component({
  selector: 'app-scan-product-not-found-dialog',
  standalone: true,
  imports: [IconComponent],
  template: `
    @if (open) {
      <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" (click)="close()">
        <div class="grid w-full max-w-md gap-4 rounded-lg border bg-background p-6 shadow-lg" (click)="$event.stopPropagation()">
          <div>
            <h2 class="flex items-center gap-2 text-lg font-semibold">
              <app-icon name="package-x" class="size-5 text-warning" />
              Código não cadastrado
            </h2>
            <p class="text-sm text-muted-foreground">
              O código <span class="font-mono font-medium text-foreground">{{ sku }}</span> ainda não está no estoque.
              Deseja cadastrar este material agora?
            </p>
          </div>
          <div class="flex flex-col gap-2 sm:flex-row">
            <button type="button" class="inline-flex h-9 flex-1 items-center justify-center rounded-md border px-4 text-sm" (click)="close()">Agora não</button>
            <button type="button" class="inline-flex h-9 flex-1 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm text-primary-foreground" (click)="goCadastro()">
              <app-icon name="package-plus" class="size-4" />
              Cadastrar material
            </button>
          </div>
        </div>
      </div>
    }
  `,
})
export class ScanProductNotFoundDialogComponent {
  private readonly router = inject(Router);

  @Input() sku = '';
  @Input() open = false;
  @Output() openChange = new EventEmitter<boolean>();

  close(): void {
    this.openChange.emit(false);
  }

  goCadastro(): void {
    this.openChange.emit(false);
    void this.router.navigate(['/cadastro'], { queryParams: { sku: this.sku } });
  }
}
