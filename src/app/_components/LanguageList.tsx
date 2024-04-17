"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { type Locale, i18n } from "i18n-config";
import { useState } from "react";

export const  LanguageList = () => {
  const pathName = usePathname();
  const [menuState, toggleMenuState] = useState(false)
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="relative ml-3" aria-label="Select language">
      <button aria-label="Locale switcher" onClick={() => toggleMenuState(!menuState)}>🌎</button>
      <ul className={ menuState ? 'flex flex-col absolute bg-white w-10 rounded-lg shadow p-2' : 'hidden' }>
        {i18n.locales.map((locale) => {
          return (
            <li key={locale} className="hover:bg-gray-100">
              <Link href={redirectedPathName(locale)}>{locale}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}