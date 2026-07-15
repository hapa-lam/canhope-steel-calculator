import { en } from "./en";
import { zh } from "./zh";

export type Locale = "zh" | "en";
type WidenTranslationValues<T> = {
  [K in keyof T]: T[K] extends string
    ? string
    : T[K] extends readonly string[]
      ? readonly string[]
      : T[K] extends object
        ? WidenTranslationValues<T[K]>
        : T[K];
};

export type Messages = WidenTranslationValues<typeof zh>;

export const messages: Record<Locale, Messages> = {
  zh,
  en,
};

export function isLocale(value: string | null): value is Locale {
  return value === "zh" || value === "en";
}
