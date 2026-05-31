import { Component, computed, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter, map, startWith } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthService } from '../core/services/auth.service';
import { AppScreen } from '../core/models/estoque.models';
import { UserAvatarComponent } from '../shared/components/user-avatar/user-avatar.component';
import { IconComponent } from '../shared/components/icon/icon.component';

interface NavItem {
  path: string;
  label: string;
  screen: AppScreen;
  icon: string;
}

const NAV: NavItem[] = [
  { path: '/', label: 'Dashboard', screen: 'dashboard', icon: 'layout-dashboard' },
  { path: '/cadastro', label: 'Cadastro', screen: 'cadastro', icon: 'package-plus' },
  { path: '/inventario', label: 'Inventário', screen: 'inventario', icon: 'boxes' },
  { path: '/movimentacao', label: 'Movimentação', screen: 'movimentacao', icon: 'arrow-left-right' },
  { path: '/configuracoes', label: 'Configurações', screen: 'configuracoes', icon: 'settings' },
];

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, UserAvatarComponent, IconComponent],
  templateUrl: './app-layout.component.html',
})
export class AppLayoutComponent {
  readonly authService = inject(AuthService);
  private readonly auth = this.authService;
  private readonly router = inject(Router);

  readonly nav = NAV;
  readonly user = this.auth.currentUser;

  readonly visibleNav = computed(() =>
    this.nav.filter((item) => this.auth.canAccessScreen(item.screen)),
  );

  readonly mobileNav = computed(() => this.visibleNav().slice(0, 4));

  private readonly url = toSignal(
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      map(() => this.router.url),
      startWith(this.router.url),
    ),
    { initialValue: '/' },
  );

  readonly profileActive = computed(() => this.url().startsWith('/perfil'));

  constructor() {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      const path = this.router.url.split('?')[0];
      if (!this.auth.canAccessRoute(path)) {
        void this.router.navigateByUrl(this.auth.firstAllowedRoute());
      }
    });
  }
}
