import { Component, Input, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IN_REASONS, MovementType, OUT_REASONS, Product } from '../../core/models/estoque.models';
import { StoreService } from '../../core/services/store.service';
import { ToastService } from '../../core/services/toast.service';
import { ScannerDialogComponent } from '../../shared/components/scanner-dialog/scanner-dialog.component';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-movement-form',
  standalone: true,
  imports: [FormsModule, IconComponent, ScannerDialogComponent],
  templateUrl: './movement-form.component.html',
})
export class MovementFormComponent implements OnInit {
  private readonly store = inject(StoreService);
  private readonly toast = inject(ToastService);

  @Input() type: MovementType = 'in';
  @Input() preset: Product | null = null;

  selected: Product | null = null;
  search = '';
  qty = '1';
  reason = '';
  scanOpen = false;
  confirmOpen = false;
  reasons: string[] = [];
  nowLabel = new Date().toLocaleString('pt-BR');

  get matches(): Product[] {
    const t = this.search.trim().toLowerCase();
    if (!t) return [];
    return this.store
      .products()
      .filter((p) => p.name.toLowerCase().includes(t) || p.sku.includes(t))
      .slice(0, 5);
  }

  ngOnInit(): void {
    this.reasons = this.type === 'in' ? IN_REASONS : OUT_REASONS;
    this.reason = this.reasons[0];
    if (this.preset) this.selected = this.preset;
  }

  pick(p: Product): void {
    this.selected = p;
    this.search = '';
  }

  onScan(code: string): void {
    const found = this.store.products().find((p) => p.sku === code.trim());
    if (found) {
      this.selected = found;
      this.search = '';
      this.toast.success(`Selecionado: ${found.name}`);
    } else {
      this.toast.error('Código não cadastrado.');
    }
  }

  tryConfirm(): void {
    if (!this.selected) {
      this.toast.error('Selecione um produto.');
      return;
    }
    const n = Number(this.qty);
    if (!n || n <= 0) {
      this.toast.error('Quantidade inválida.');
      return;
    }
    if (this.type === 'out' && n > this.selected.qty) {
      this.toast.error('Quantidade maior que o estoque disponível.');
      return;
    }
    this.confirmOpen = true;
  }

  doConfirm(): void {
    if (!this.selected) return;
    const ok = this.store.registerMovement({
      productId: this.selected.id,
      type: this.type,
      qty: Number(this.qty),
      reason: this.reason,
    });
    this.confirmOpen = false;
    if (ok) {
      this.toast.success(`${this.type === 'in' ? 'Entrada' : 'Saída'} registrada com sucesso!`);
      this.selected = null;
      this.qty = '1';
      this.search = '';
    } else {
      this.toast.error('Não foi possível registrar a movimentação.');
    }
  }
}
