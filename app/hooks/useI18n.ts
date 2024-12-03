import { useState, useCallback } from "react";
import * as Localization from "expo-localization";
import { translations, Language } from "../i18n/translations";

export function useI18n() {
  const [locale, setLocale] = useState<Language>(
    (Localization.locale.split("-")[0] as Language) || "en"
  );

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

  return { t, locale, setLocale };
}
