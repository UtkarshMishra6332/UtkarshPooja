import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { ContactStateService } from '../../core/contact-state.service';
import { ServicesComponent } from '../../components/services/services';
import { ContactFormComponent } from '../../components/contact-form/contact-form';

@Component({
  selector: 'app-home',
  imports: [ServicesComponent, ContactFormComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  readonly i18n = inject(I18nService);
  private readonly contact = inject(ContactStateService);

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
