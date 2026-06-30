import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { SERVICE_CATEGORIES } from '../../data/services.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  readonly i18n = inject(I18nService);
  readonly categories = SERVICE_CATEGORIES;
  readonly phone = '+91 8467880977';
  readonly emails = ['um8940596@gmail.com', 'um1185489@gmail.com'];
  readonly socials = [
    {
      id: 'youtube',
      label: 'YouTube',
      handle: '@Utkarshacharya.__05',
      url: 'https://www.youtube.com/@Utkarshacharya.__05',
    },
    {
      id: 'instagram',
      label: 'Instagram',
      handle: '@utkarsh_acharya_05',
      url: 'https://www.instagram.com/utkarsh_acharya_05',
    },
  ];

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
