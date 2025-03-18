import { useState, useCallback } from "react";
import * as Localization from "expo-localization";
import { translations, Language } from "../../constants/languages";
import { atom, useAtom } from "jotai";
import AsyncStorage from "@react-native-async-storage/async-storage";

const localeAtom = atom<Language>((Localization?.getLocales()?.[0]?.languageCode as Language) || "en");

export function useI18n() {

  const [locale, setatomLocale] = useAtom(localeAtom);

  const t = useCallback(
    (key: string) => {
      const keys = key.split(".");
      let value: any = translations[locale];
      keys.forEach((k) => {
        value = value?.[k];
      });
      return value || key;
    },
    [locale]
  );

  const setLocale = (locale: Language) => {
    setatomLocale(locale);
    AsyncStorage.setItem("locale", locale);
  }


  return { t, locale, setLocale };
}
