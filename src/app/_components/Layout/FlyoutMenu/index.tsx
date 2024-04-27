import { getDictionary } from "get-dictionary";
import { Suspense } from "react";
import { FlyoutMenuClient } from "./FlyoutMenuClient";

export const FlyoutMenu = async () => {
  const dictionaryES = await getDictionary('es');
  const dictionaryEN = await getDictionary('en');
  const dictionaryFR = await getDictionary('fr');
  const dictionary = {
    en: dictionaryEN,
    es: dictionaryES,
    fr: dictionaryFR
  }  
  return (
    <Suspense fallback={<p>⌛</p>}>
      <FlyoutMenuClient dictionary={dictionary}/>
    </Suspense>
  )

};
