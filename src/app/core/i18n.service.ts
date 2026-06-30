import { Injectable, signal, computed } from '@angular/core';
import { Bilingual } from './models';
import { UI_STRINGS } from './translations';

export type Lang = 'en' | 'hi';

const STORAGE_KEY = 'utkarsh.lang';

/**
 * Runtime (no-reload) bilingual service. The current language is a signal, so
 * any template that reads `t(...)` / `pick(...)` re-renders automatically when
 * the language toggles — works cleanly with Angular's zoneless change detection.
 */
@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly lang = signal<Lang>('en');
  readonly isHindi = computed(() => this.lang() === 'hi');

  constructor() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'hi') {
        this.lang.set(saved);
      }
    } catch {
      /* localStorage may be unavailable (private mode / SSR) — ignore */
    }
  }

  setLang(lang: Lang): void {
    this.lang.set(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }

  toggle(): void {
    this.setLang(this.lang() === 'en' ? 'hi' : 'en');
  }

  /** Look up a UI string by key for the current language. */
  t(key: string): string {
    const entry = UI_STRINGS[key];
    if (!entry) {
      return key;
    }
    return entry[this.lang()] || entry.en || key;
  }

  /** Pick the current-language value from any Bilingual object. */
  pick(value: Bilingual | undefined): string {
    if (!value) {
      return '';
    }
    return value[this.lang()] || value.en || '';
  }
}
