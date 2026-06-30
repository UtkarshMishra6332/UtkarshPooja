import { Component, computed, effect, inject, signal } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { I18nService } from '../../core/i18n.service';
import { ContactStateService } from '../../core/contact-state.service';
import { SERVICE_CATEGORIES } from '../../data/services.data';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactFormComponent {
  readonly i18n = inject(I18nService);
  private readonly fb = inject(FormBuilder);
  private readonly contact = inject(ContactStateService);

  readonly categories = SERVICE_CATEGORIES;
  readonly submitted = signal(false);
  readonly sending = signal(false);
  readonly triedSubmit = signal(false);

  readonly phone = '+91 8467880977';
  readonly emails = ['um8940596@gmail.com', 'um1185489@gmail.com'];

  readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9+\-\s]{10,15}$/)]],
    service: ['', [Validators.required]],
    request: [''],
  });

  /** Pre-built links so the request can actually be delivered without a backend. */
  readonly whatsappLink = signal('');
  readonly mailtoLink = signal('');

  constructor() {
    // When a "Request this Pooja" button or Quick-Pooja chip is clicked,
    // pre-select the service (and pre-fill the request text for quick chips).
    effect(() => {
      const id = this.contact.requestedServiceId();
      const text = this.contact.requestedText();
      if (id) {
        this.submitted.set(false);
        this.form.patchValue({ service: id });
        if (text) {
          this.form.patchValue({ request: text });
        }
      }
    });
  }

  /** Human-readable label for a service id, in the current language. */
  private serviceLabel(id: string): string {
    if (id === 'other') {
      return this.i18n.t('form.serviceOther');
    }
    for (const cat of this.categories) {
      const item = cat.items.find((i) => i.id === id);
      if (item) {
        return this.i18n.pick(item.name);
      }
    }
    return id;
  }

  controlInvalid(name: string): boolean {
    const c = this.form.get(name);
    return !!c && c.invalid && (c.touched || this.triedSubmit());
  }

  submit(): void {
    this.triedSubmit.set(true);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.sending.set(true);
    const v = this.form.getRawValue();
    const serviceName = this.serviceLabel(v.service ?? '');

    const lines = [
      `Name: ${v.name}`,
      `Email: ${v.email}`,
      `Phone: ${v.phone}`,
      `Service: ${serviceName}`,
      `Request: ${v.request || '-'}`,
    ];
    const body = lines.join('\n');

    const wa = this.phone.replace(/[^0-9]/g, '');
    this.whatsappLink.set(`https://wa.me/${wa}?text=${encodeURIComponent(body)}`);
    this.mailtoLink.set(
      `mailto:${this.emails[0]}?subject=${encodeURIComponent(
        'Pooja Request — ' + serviceName,
      )}&body=${encodeURIComponent(body)}`,
    );

    // Simulate handoff, then show confirmation (no backend wired yet).
    setTimeout(() => {
      this.sending.set(false);
      this.submitted.set(true);
    }, 600);
  }

  reset(): void {
    this.form.reset({ name: '', email: '', phone: '', service: '', request: '' });
    this.submitted.set(false);
    this.triedSubmit.set(false);
    this.contact.requestedServiceId.set('');
  }
}
