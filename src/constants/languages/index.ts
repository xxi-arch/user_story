import { zh } from "./zh";
import { en } from "./en";

export const translations = {
  en: en,
  zh: zh
};

export type Language = keyof typeof translations;
