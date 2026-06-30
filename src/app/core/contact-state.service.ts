import { Injectable, signal } from '@angular/core';

/**
 * Tiny shared-state service so that "Request this Pooja" buttons and the
 * Quick-Pooja chips can pre-select / pre-fill the Get-in-Connect form.
 */
@Injectable({ providedIn: 'root' })
export class ContactStateService {
  /** id of the service the user asked about (matches ServiceItem.id), or '' / 'other' */
  readonly requestedServiceId = signal<string>('');
  /** optional pre-filled text for the request box (used by quick chips) */
  readonly requestedText = signal<string>('');

  private scrollToForm(): void {
    document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  requestService(id: string): void {
    this.requestedText.set('');
    this.requestedServiceId.set(id);
    this.scrollToForm();
  }

  /** From a Quick-Pooja chip: select the mapped service and pre-fill the request. */
  requestQuick(id: string, label: string): void {
    this.requestedText.set(label);
    this.requestedServiceId.set(id);
    this.scrollToForm();
  }
}
