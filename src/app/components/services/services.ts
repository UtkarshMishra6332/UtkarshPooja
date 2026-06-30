import { Component, inject, signal } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { ContactStateService } from '../../core/contact-state.service';
import { SERVICE_CATEGORIES, QUICK_POOJAS } from '../../data/services.data';

@Component({
  selector: 'app-services',
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class ServicesComponent {
  readonly i18n = inject(I18nService);
  private readonly contact = inject(ContactStateService);
  readonly categories = SERVICE_CATEGORIES;
  readonly quickPoojas = QUICK_POOJAS;

  /** id of the currently expanded service card ('' = none) */
  readonly openId = signal<string>('');

  toggle(id: string): void {
    this.openId.update((cur) => (cur === id ? '' : id));
  }

  isOpen(id: string): boolean {
    return this.openId() === id;
  }

  request(id: string, event: Event): void {
    event.stopPropagation();
    this.contact.requestService(id);
  }

  quickRequest(target: string, label: string): void {
    this.contact.requestQuick(target, label);
  }
}
