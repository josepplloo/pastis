const localesKeyToVal = {
  en: "en",
  es: "es",
  fr: "fr"
}
export type LocaleKeys = keyof typeof localesKeyToVal;

interface I18n {
  defaultLocale: string;
  locales: LocaleKeys[];
}

export const i18n: I18n = {
  defaultLocale: "en",
  locales: ['es', 'en', 'fr'],
};

export type Locale = (typeof i18n)["locales"][number];
