"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { type LocaleKeys, i18n } from "i18n-config";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "@/app/_components/Layout/Context";
import { actionCreators } from "./Layout/Context/reducer";

export const  LanguageList = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();


  const pathName = usePathname();
  const [menuState, toggleMenuState] = useState(false)
  const redirectedPathName = (locale: LocaleKeys) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;

    return segments.join("/");
  };
  
  const handleMenuOpen = () => toggleMenuState(!menuState);

  const handleLangChoice = (locale: LocaleKeys) => {
    toggleMenuState(!menuState);
    dispatch(actionCreators.setLang(locale));
  };

  const handleClick = (event: MouseEvent) => {
    const isClickOut =
      componentRef.current &&
      !componentRef.current.contains(event.target as Node);
    if (isClickOut && menuState) {
      handleMenuOpen();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuState]);

  return (
    <div className="relative ml-3" aria-label="Select language" ref={componentRef} id="lang_button_container">
      <button aria-label="Locale switcher" onClick={handleMenuOpen}>🌎</button>
      <ul className={ menuState ? 'flex flex-col absolute bg-white w-10 rounded-lg shadow p-2' : 'hidden' }>
        {i18n.locales.map((locale: LocaleKeys) => {
          return (
            <li key={locale} className="hover:bg-gray-100 z-10">
              <Link href={redirectedPathName(locale)} onClick={()=>handleLangChoice(locale)} prefetch={false}>{locale}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}