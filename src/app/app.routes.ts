import { Routes } from '@angular/router';
import { accessGuard } from './core/guards/access.guard';
import { AppLayoutComponent } from './layout/app-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then((m) => m.DashboardComponent),
        canActivate: [accessGuard],
      },
      {
        path: 'cadastro',
        loadComponent: () =>
          import('./pages/cadastro/cadastro.component').then((m) => m.CadastroComponent),
        canActivate: [accessGuard],
      },
      {
        path: 'inventario',
        loadComponent: () =>
          import('./pages/inventario/inventario.component').then((m) => m.InventarioComponent),
        canActivate: [accessGuard],
      },
      {
        path: 'movimentacao',
        loadComponent: () =>
          import('./pages/movimentacao/movimentacao.component').then((m) => m.MovimentacaoComponent),
        canActivate: [accessGuard],
      },
      {
        path: 'perfil',
        loadComponent: () =>
          import('./pages/perfil/perfil.component').then((m) => m.PerfilComponent),
        canActivate: [accessGuard],
      },
      {
        path: 'configuracoes',
        loadComponent: () =>
          import('./pages/configuracoes/configuracoes.component').then(
            (m) => m.ConfiguracoesComponent,
          ),
        canActivate: [accessGuard],
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
