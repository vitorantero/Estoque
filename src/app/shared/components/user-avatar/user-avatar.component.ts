import { Component, Input } from '@angular/core';
import { profileInitials } from '../../../core/models/estoque.models';

@Component({
  selector: 'app-user-avatar',
  standalone: true,
  template: `
    <div
      class="relative flex shrink-0 overflow-hidden rounded-full"
      [class]="sizeClass"
    >
      @if (photoUrl) {
        <img [src]="photoUrl" [alt]="name" class="aspect-square h-full w-full object-cover" />
      } @else {
        <div
          class="flex h-full w-full items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground"
          [class]="fallbackClass"
        >
          {{ initials }}
        </div>
      }
    </div>
  `,
})
export class UserAvatarComponent {
  @Input({ required: true }) name!: string;
  @Input() photoUrl?: string;
  @Input() sizeClass = 'size-9';
  @Input() fallbackClass = '';

  get initials(): string {
    return profileInitials(this.name);
  }
}
