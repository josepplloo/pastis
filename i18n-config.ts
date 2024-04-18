interface I18n {
  defaultLocale: string;
  locales: string[];
}

const localesKeyToVal = {
  en: "en",
  es: "es",
  fr: "fr"
}

export const i18n: I18n = {
  defaultLocale: "en",
  locales: Object.values(localesKeyToVal),
};

export type Locale = (typeof i18n)["locales"][number];
export type LocaleKeys = keyof typeof localesKeyToVal;