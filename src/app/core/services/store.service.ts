import { Injectable, signal, effect } from '@angular/core';
import {
  CATEGORIES,
  IN_REASONS,
  OUT_REASONS,
  Movement,
  MovementType,
  Product,
} from '../models/estoque.models';

const LS_KEY = 'estoque-data-v1';
const uid = () => Math.random().toString(36).slice(2, 10);

const seedProducts: Product[] = [
  { id: uid(), sku: '7891234567890', name: 'Cabo HDMI 2m', category: 'Eletrônicos', minQty: 10, qty: 42, unit: 'Un', cost: 18.9, description: 'Cabo HDMI 4K.' },
  { id: uid(), sku: '7890000000017', name: 'Papel A4 75g', category: 'Escritório', minQty: 20, qty: 8, unit: 'Cx', cost: 24.5, description: 'Resma 500 folhas.' },
  { id: uid(), sku: '7890000000024', name: 'Álcool 70% 1L', category: 'Limpeza', minQty: 15, qty: 0, unit: 'L', cost: 9.9 },
  { id: uid(), sku: '7890000000031', name: 'Luva Nitrílica M', category: 'EPI', minQty: 50, qty: 120, unit: 'Cx', cost: 32.0 },
  { id: uid(), sku: '7890000000048', name: 'Café em Grãos 1kg', category: 'Alimentos', minQty: 5, qty: 3, unit: 'Kg', cost: 41.0 },
  { id: uid(), sku: '7890000000055', name: 'Parafusadeira 12V', category: 'Ferramentas', minQty: 4, qty: 7, unit: 'Un', cost: 289.9 },
  { id: uid(), sku: '7890000000062', name: 'Detergente Neutro 5L', category: 'Limpeza', minQty: 10, qty: 25, unit: 'L', cost: 19.9 },
  { id: uid(), sku: '7890000000079', name: 'Caneta Esferográfica', category: 'Escritório', minQty: 100, qty: 340, unit: 'Pct', cost: 12.5 },
];

function buildSeedMovements(products: Product[]): Movement[] {
  const now = Date.now();
  const list: Movement[] = [];
  for (let i = 0; i < 12; i++) {
    const p = products[i % products.length];
    const type: MovementType = i % 3 === 0 ? 'in' : 'out';
    list.push({
      id: uid(),
      productId: p.id,
      productName: p.name,
      sku: p.sku,
      type,
      qty: Math.ceil(Math.random() * 8),
      reason: type === 'in' ? IN_REASONS[i % IN_REASONS.length] : OUT_REASONS[i % OUT_REASONS.length],
      date: new Date(now - i * 1000 * 60 * 60 * 9).toISOString(),
    });
  }
  return list;
}

@Injectable({ providedIn: 'root' })
export class StoreService {
  readonly categories = CATEGORIES;

  private readonly productsSignal = signal<Product[]>([]);
  private readonly movementsSignal = signal<Movement[]>([]);
  private ready = false;

  readonly products = this.productsSignal.asReadonly();
  readonly movements = this.movementsSignal.asReadonly();

  constructor() {
    this.load();
    effect(() => {
      if (!this.ready) return;
      const products = this.productsSignal();
      if (products.length === 0) return;
      try {
        localStorage.setItem(
          LS_KEY,
          JSON.stringify({ products, movements: this.movementsSignal() }),
        );
      } catch {
        /* ignore */
      }
    });
  }

  private load(): void {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        this.productsSignal.set(parsed.products);
        this.movementsSignal.set(parsed.movements);
        this.ready = true;
        return;
      }
    } catch {
      /* ignore */
    }
    const sp = seedProducts;
    this.productsSignal.set(sp);
    this.movementsSignal.set(buildSeedMovements(sp));
    this.ready = true;
  }

  findBySku(sku: string): Product | undefined {
    return this.productsSignal().find((p) => p.sku === sku.trim());
  }

  addProduct(p: Omit<Product, 'id'>): Product {
    const np: Product = { ...p, id: uid() };
    this.productsSignal.update((prev) => [np, ...prev]);
    return np;
  }

  updateProduct(id: string, patch: Partial<Product>): void {
    this.productsSignal.update((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...patch } : p)),
    );
  }

  deleteProduct(id: string): void {
    this.productsSignal.update((prev) => prev.filter((p) => p.id !== id));
    this.movementsSignal.update((prev) => prev.filter((m) => m.productId !== id));
  }

  registerMovement(m: {
    productId: string;
    type: MovementType;
    qty: number;
    reason: string;
  }): boolean {
    const products = this.productsSignal();
    const product = products.find((p) => p.id === m.productId);
    if (!product) return false;
    if (m.type === 'out' && m.qty > product.qty) return false;

    this.productsSignal.update((prev) =>
      prev.map((p) =>
        p.id === m.productId
          ? { ...p, qty: m.type === 'in' ? p.qty + m.qty : p.qty - m.qty }
          : p,
      ),
    );

    this.movementsSignal.update((prev) => [
      {
        id: uid(),
        productId: m.productId,
        productName: product.name,
        sku: product.sku,
        type: m.type,
        qty: m.qty,
        reason: m.reason,
        date: new Date().toISOString(),
      },
      ...prev,
    ]);
    return true;
  }
}
