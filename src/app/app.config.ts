import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideLucideIcons } from '@lucide/angular';
import { routes } from './app.routes';
import { APP_ICONS } from './shared/icons/app-icons';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideAnimations(),
    provideLucideIcons(...Object.values(APP_ICONS)),
  ],
};
