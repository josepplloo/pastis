import "server-only";
import type { LocaleKeys } from "./i18n-config";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  es: () => import("./dictionaries/es.json").then((module) => module.default),
  fr: () => import("./dictionaries/fr.json").then((module) => module.default),
};

export const getDictionary = async (locale: LocaleKeys) =>
  dictionaries[locale]?.() ?? dictionaries.en();

// dictionaries for home page "/"
export type HomeKeys = "professionalIdentity";
export type professionalIdentity = {
  title: string,
  subtitle: string[],
  content: string[]
}
const dictionariesHome = {
  en: () => import("./dictionaries/professionalIdentity/en.json").then((module) => module.default),
  es: () => import("./dictionaries/professionalIdentity/es.json").then((module) => module.default),
  fr: () => import("./dictionaries/professionalIdentity/fr.json").then((module) => module.default),
};
export const getDictionaryHome = (locale: LocaleKeys) =>
  dictionariesHome[locale]?.() ?? dictionariesHome.en();

// dictionaries for the general menu
const dictionariesMenu = {
  en: () => import("./dictionaries/mainMenu/en.json").then((module) => module.default),
  es: () => import("./dictionaries/mainMenu/es.json").then((module) => module.default),
  fr: () => import("./dictionaries/mainMenu/fr.json").then((module) => module.default),
};

export const getDictionaryMenu = (locale: LocaleKeys) =>
  dictionariesMenu[locale]?.() ?? dictionariesMenu.en();
