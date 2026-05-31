export type Unit = 'Un' | 'Kg' | 'Cx' | 'L' | 'Pct';
export type StockStatus = 'normal' | 'low' | 'out';
export type MovementType = 'in' | 'out';
export type UserRole = 'administrador' | 'gerencia' | 'operacional';
export type AppScreen =
  | 'dashboard'
  | 'cadastro'
  | 'inventario'
  | 'movimentacao'
  | 'perfil'
  | 'configuracoes';

export type InventarioStatusFilter = StockStatus | 'all' | 'critical';

export interface Product {
  id: string;
  sku: string;
  name: string;
  category: string;
  minQty: number;
  qty: number;
  unit: Unit;
  cost: number;
  description?: string;
}

export interface Movement {
  id: string;
  productId: string;
  productName: string;
  sku: string;
  type: MovementType;
  qty: number;
  reason: string;
  date: string;
}

export interface UserAccount {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  photoUrl?: string;
  role: UserRole;
  registered: boolean;
}

export type RolePermissions = Record<UserRole, AppScreen[]>;

export const CATEGORIES = [
  'Eletrônicos',
  'Escritório',
  'Limpeza',
  'Alimentos',
  'Ferramentas',
  'EPI',
];

export const IN_REASONS = ['Compra', 'Devolução', 'Ajuste de inventário', 'Transferência'];
export const OUT_REASONS = ['Uso Interno', 'Venda', 'Descarte', 'Transferência', 'Perda'];
export const UNITS: Unit[] = ['Un', 'Kg', 'Cx', 'L', 'Pct'];

export const SCREEN_ROUTES: Record<AppScreen, string> = {
  dashboard: '/',
  cadastro: '/cadastro',
  inventario: '/inventario',
  movimentacao: '/movimentacao',
  perfil: '/perfil',
  configuracoes: '/configuracoes',
};

export const SCREEN_LABELS: Record<AppScreen, string> = {
  dashboard: 'Dashboard',
  cadastro: 'Cadastro',
  inventario: 'Inventário',
  movimentacao: 'Movimentação',
  perfil: 'Perfil',
  configuracoes: 'Configurações',
};

export const ROLE_LABELS: Record<UserRole, string> = {
  administrador: 'Administrador',
  gerencia: 'Gerência',
  operacional: 'Operacional',
};

export const ALL_SCREENS: AppScreen[] = [
  'dashboard',
  'cadastro',
  'inventario',
  'movimentacao',
  'perfil',
  'configuracoes',
];

export function statusOf(p: Product): StockStatus {
  if (p.qty <= 0) return 'out';
  if (p.qty <= p.minQty) return 'low';
  return 'normal';
}

export function profileInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return 'U';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

export function filterProducts(
  products: Product[],
  query: string,
  cat: string,
  status: InventarioStatusFilter,
): Product[] {
  const term = query.trim().toLowerCase();
  return products.filter((p) => {
    const matchTerm =
      !term ||
      p.name.toLowerCase().includes(term) ||
      p.sku.toLowerCase().includes(term) ||
      p.category.toLowerCase().includes(term);
    const matchCat = cat === 'all' || p.category === cat;
    const matchStatus =
      status === 'all'
        ? true
        : status === 'critical'
          ? statusOf(p) !== 'normal'
          : statusOf(p) === status;
    return matchTerm && matchCat && matchStatus;
  });
}
