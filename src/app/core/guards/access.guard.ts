import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AppScreen } from '../models/estoque.models';

const PATH_SCREEN: Record<string, AppScreen> = {
  '': 'dashboard',
  cadastro: 'cadastro',
  inventario: 'inventario',
  movimentacao: 'movimentacao',
  perfil: 'perfil',
  configuracoes: 'configuracoes',
};

export const accessGuard: CanActivateFn = (route) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (!auth.loaded()) return true;

  const segment = route.routeConfig?.path ?? '';
  const screen = PATH_SCREEN[segment];
  if (!screen) return true;

  if (auth.canAccessScreen(screen)) return true;

  return router.parseUrl(auth.firstAllowedRoute());
};
