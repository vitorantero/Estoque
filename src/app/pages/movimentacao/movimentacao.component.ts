import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { MovementType } from '../../core/models/estoque.models';
import { StoreService } from '../../core/services/store.service';
import { MovementFormComponent } from './movement-form.component';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-movimentacao',
  standalone: true,
  imports: [MovementFormComponent, IconComponent],
  templateUrl: './movimentacao.component.html',
})
export class MovimentacaoComponent implements OnInit {
  private readonly store = inject(StoreService);
  private readonly route = inject(ActivatedRoute);

  activeTab = signal<MovementType>('in');
  presetSku = signal('');

  readonly movements = this.store.movements;
  readonly products = this.store.products;

  readonly presetProduct = computed(() => {
    const sku = this.presetSku();
    return this.products().find((p) => p.sku === sku) ?? null;
  });

  readonly history = computed(() => this.movements().slice(0, 8));

  ngOnInit(): void {
    this.route.queryParams.subscribe((p) => {
      this.activeTab.set(p['tab'] === 'out' ? 'out' : 'in');
      this.presetSku.set(typeof p['sku'] === 'string' ? p['sku'] : '');
    });
  }

  formatWhen(iso: string): string {
    return formatDistanceToNow(new Date(iso), { addSuffix: true, locale: ptBR });
  }
}
