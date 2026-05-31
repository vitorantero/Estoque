import { Component, Input } from '@angular/core';
import { LucideDynamicIcon } from '@lucide/angular';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [LucideDynamicIcon],
  template: `<svg [lucideIcon]="name" [class]="class"></svg>`,
})
export class IconComponent {
  @Input({ required: true }) name!: string;
  @Input() class = 'size-4';
}
