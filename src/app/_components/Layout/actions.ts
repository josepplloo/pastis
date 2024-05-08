'use server'
import { api } from "@/trpc/server";
import { getDictionary } from "get-dictionary";
import { type LocaleKeys } from "i18n-config";

export const fetchMenu = (lang: LocaleKeys) => {
  const menu = api.post.getMenu.query({lang});
  return menu;
};

export const fetchAboutMenu = (lang: LocaleKeys) => {
  const menu = getDictionary(lang);
  return menu;
};
