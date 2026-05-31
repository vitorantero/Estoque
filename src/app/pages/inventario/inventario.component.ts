import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  CATEGORIES,
  filterProducts,
  InventarioStatusFilter,
  MovementType,
  Product,
} from '../../core/models/estoque.models';
import { StoreService } from '../../core/services/store.service';
import { ToastService } from '../../core/services/toast.service';
import { StatusBadgeComponent } from '../../shared/components/status-badge/status-badge.component';
import { ScannerDialogComponent } from '../../shared/components/scanner-dialog/scanner-dialog.component';
import { EditProductDialogComponent } from '../../shared/components/edit-product-dialog/edit-product-dialog.component';
import { QuickMovementDialogComponent } from '../../shared/components/quick-movement-dialog/quick-movement-dialog.component';
import { IconComponent } from '../../shared/components/icon/icon.component';

const PER_PAGE = 10;

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [
    FormsModule,
    IconComponent,
    StatusBadgeComponent,
    ScannerDialogComponent,
    EditProductDialogComponent,
    QuickMovementDialogComponent,
  ],
  templateUrl: './inventario.component.html',
})
export class InventarioComponent implements OnInit {
  private readonly store = inject(StoreService);
  private readonly toast = inject(ToastService);
  private readonly route = inject(ActivatedRoute);

  readonly categories = CATEGORIES;
  readonly perPage = PER_PAGE;

  query = signal('');
  cat = signal('all');
  status = signal<InventarioStatusFilter>('all');
  page = signal(1);
  scanOpen = signal(false);
  detail = signal<Product | null>(null);
  editTarget = signal<Product | null>(null);
  deleteTarget = signal<Product | null>(null);
  moveTarget = signal<{ product: Product; type: MovementType } | null>(null);

  readonly products = this.store.products;

  readonly filtered = computed(() =>
    filterProducts(this.products(), this.query(), this.cat(), this.status()),
  );

  readonly totalPages = computed(() => Math.max(1, Math.ceil(this.filtered().length / PER_PAGE)));
  readonly safePage = computed(() => Math.min(this.page(), this.totalPages()));
  readonly pageItems = computed(() => {
    const p = this.safePage();
    return this.filtered().slice((p - 1) * PER_PAGE, p * PER_PAGE);
  });
  readonly emptyRowCount = computed(() => {
    const len = this.pageItems().length;
    return len === 0 ? PER_PAGE - 1 : Math.max(0, PER_PAGE - len);
  });

  ngOnInit(): void {
    this.route.queryParams.subscribe((p) => {
      this.query.set(typeof p['q'] === 'string' ? p['q'] : '');
      const st = typeof p['status'] === 'string' ? p['status'] : 'all';
      const allowed: InventarioStatusFilter[] = ['all', 'normal', 'low', 'out', 'critical'];
      this.status.set(allowed.includes(st as InventarioStatusFilter) ? (st as InventarioStatusFilter) : 'all');
      this.page.set(1);
    });
  }

  handleScan(code: string): void {
    const sku = code.trim();
    if (!sku) return;
    const found = this.products().find((p) => p.sku === sku);
    this.query.set(sku);
    this.page.set(1);
    if (!found) {
      this.toast.error('Código não encontrado no estoque.');
      return;
    }
    const list = filterProducts(this.products(), sku, this.cat(), this.status());
    const idx = list.findIndex((p) => p.id === found.id);
    if (idx === -1) {
      this.toast.warning('Produto cadastrado, mas oculto pelos filtros atuais. Ajuste categoria ou status.');
      this.cat.set('all');
      this.status.set('all');
      const fullIdx = filterProducts(this.products(), sku, 'all', 'all').findIndex((p) => p.id === found.id);
      if (fullIdx >= 0) this.page.set(Math.floor(fullIdx / PER_PAGE) + 1);
    } else {
      this.page.set(Math.floor(idx / PER_PAGE) + 1);
      this.toast.success(`Produto encontrado: ${found.name}`);
    }
  }

  emptySlots(): number[] {
    return Array.from({ length: this.emptyRowCount() }, (_, i) => i);
  }

  prevPage(): void {
    this.page.update((p) => p - 1);
  }

  nextPage(): void {
    this.page.update((p) => p + 1);
  }

  confirmDelete(): void {
    const t = this.deleteTarget();
    if (!t) return;
    this.store.deleteProduct(t.id);
    this.toast.success(`"${t.name}" removido do estoque.`);
    if (this.detail()?.id === t.id) this.detail.set(null);
    if (this.editTarget()?.id === t.id) this.editTarget.set(null);
    this.deleteTarget.set(null);
  }
}
