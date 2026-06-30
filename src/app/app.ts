import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { I18nService } from './core/i18n.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly i18n = inject(I18nService);

  constructor() {
    // Reflect the chosen language on <html lang> for correct font / accessibility.
    if (typeof document !== 'undefined') {
      document.documentElement.lang = this.i18n.lang();
    }
  }
}
