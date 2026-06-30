/** A piece of text available in both English and Hindi. */
export interface Bilingual {
  en: string;
  hi: string;
}

/** A single pooja / ritual service offered on the site. */
export interface ServiceItem {
  id: string;
  name: Bilingual;
  /** Short historical / scriptural background. */
  history: Bilingual;
  /** Purpose of the ritual and the benefits it is believed to bring. */
  purpose: Bilingual;
  /** Quick facts a devotee should know about this service. */
  keyFacts: Bilingual[];
}

/** A themed group of services (e.g. Samskaras, Daily Poojas). */
export interface ServiceCategory {
  id: string;
  /** Emoji / glyph used as a lightweight visual marker. */
  icon: string;
  title: Bilingual;
  intro: Bilingual;
  items: ServiceItem[];
}
