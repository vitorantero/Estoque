import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Chart } from 'chart.js/auto';
import { StoreService } from '../../core/services/store.service';
import { Product, statusOf } from '../../core/models/estoque.models';
import { ScannerDialogComponent } from '../../shared/components/scanner-dialog/scanner-dialog.component';
import {
  ScanProductFoundDialogComponent,
  ScanProductNotFoundDialogComponent,
} from '../../shared/components/scan-result-dialogs/scan-result-dialogs.component';
import { IconComponent } from '../../shared/components/icon/icon.component';

const WEEKDAYS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    IconComponent,
    ScannerDialogComponent,
    ScanProductFoundDialogComponent,
    ScanProductNotFoundDialogComponent,
  ],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements AfterViewInit, OnDestroy {
  @ViewChild('chartCanvas') chartCanvas?: ElementRef<HTMLCanvasElement>;

  private readonly store = inject(StoreService);
  private chart?: Chart;

  scanOpen = signal(false);
  foundProduct = signal<Product | null>(null);
  foundOpen = signal(false);
  unknownSku = signal('');
  notFoundOpen = signal(false);

  readonly products = this.store.products;
  readonly movements = this.store.movements;

  readonly totalItems = computed(() => this.products().reduce((s, p) => s + p.qty, 0));
  readonly critical = computed(() => this.products().filter((p) => statusOf(p) !== 'normal').length);
  readonly recent = computed(() => this.movements().slice(0, 5));

  readonly chartData = computed(() => {
    const days = Array.from({ length: 7 }).map((_, i) => {
      const d = new Date();
      d.setHours(0, 0, 0, 0);
      d.setDate(d.getDate() - (6 - i));
      return { key: d.toDateString(), label: WEEKDAYS[d.getDay()], entradas: 0, saidas: 0 };
    });
    for (const m of this.movements()) {
      const k = new Date(m.date);
      k.setHours(0, 0, 0, 0);
      const day = days.find((d) => d.key === k.toDateString());
      if (day) {
        if (m.type === 'in') day.entradas += m.qty;
        else day.saidas += m.qty;
      }
    }
    return days;
  });

  constructor() {
    effect(() => {
      this.chartData();
      this.renderChart();
    });
  }

  ngAfterViewInit(): void {
    this.renderChart();
  }

  ngOnDestroy(): void {
    this.chart?.destroy();
  }

  private renderChart(): void {
    const canvas = this.chartCanvas?.nativeElement;
    if (!canvas) return;
    const data = this.chartData();
    this.chart?.destroy();
    this.chart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: data.map((d) => d.label),
        datasets: [
          {
            label: 'Entradas',
            data: data.map((d) => d.entradas),
            borderColor: 'oklch(0.68 0.14 195)',
            backgroundColor: 'oklch(0.68 0.14 195 / 0.3)',
            fill: true,
            tension: 0.4,
          },
          {
            label: 'Saídas',
            data: data.map((d) => d.saidas),
            borderColor: 'oklch(0.6 0.22 25)',
            backgroundColor: 'oklch(0.6 0.22 25 / 0.25)',
            fill: true,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
      },
    });
  }

  handleScannerOpenChange(open: boolean): void {
    this.scanOpen.set(open);
    if (!open) this.closeScanResults();
  }

  closeScanResults(): void {
    this.foundOpen.set(false);
    this.notFoundOpen.set(false);
    this.foundProduct.set(null);
    this.unknownSku.set('');
  }

  handleScan(code: string): void {
    const found = this.store.findBySku(code);
    if (found) {
      this.foundProduct.set(found);
      this.foundOpen.set(true);
    } else {
      this.unknownSku.set(code);
      this.notFoundOpen.set(true);
    }
  }
}
