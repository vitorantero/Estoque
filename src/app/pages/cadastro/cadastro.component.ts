import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CATEGORIES, UNITS, Unit } from '../../core/models/estoque.models';
import { StoreService } from '../../core/services/store.service';
import { ToastService } from '../../core/services/toast.service';
import { ScannerDialogComponent } from '../../shared/components/scanner-dialog/scanner-dialog.component';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, IconComponent, ScannerDialogComponent],
  templateUrl: './cadastro.component.html',
})
export class CadastroComponent implements OnInit {
  private readonly store = inject(StoreService);
  private readonly toast = inject(ToastService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  readonly categories = CATEGORIES;
  readonly units = UNITS;

  scanOpen = false;
  sku = '';
  name = '';
  category = '';
  minQty = '';
  qty = '';
  unit: Unit = 'Un';
  cost = '';
  description = '';

  ngOnInit(): void {
    this.route.queryParams.subscribe((p) => {
      if (typeof p['sku'] === 'string') this.sku = p['sku'];
    });
  }

  submit(e: Event): void {
    e.preventDefault();
    if (!this.sku || !this.name || !this.category) {
      this.toast.error('Preencha SKU, nome e categoria.');
      return;
    }
    if (this.store.findBySku(this.sku)) {
      this.toast.error('Já existe um produto com este SKU.');
      return;
    }
    this.store.addProduct({
      sku: this.sku.trim(),
      name: this.name.trim(),
      category: this.category,
      minQty: Number(this.minQty) || 0,
      qty: Number(this.qty) || 0,
      unit: this.unit,
      cost: Number(this.cost) || 0,
      description: this.description.trim(),
    });
    this.toast.success('Material cadastrado com sucesso!');
    void this.router.navigate(['/inventario'], { queryParams: { q: '' } });
  }

  onScan(code: string): void {
    this.sku = code;
  }
}
