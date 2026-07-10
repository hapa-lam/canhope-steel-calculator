import { en } from "./en";
import { zh } from "./zh";

export type Locale = "zh" | "en";
export type Messages = typeof zh;

export const messages: Record<Locale, Messages> = {
  zh,
  en,
};

export function isLocale(value: string | null): value is Locale {
  return value === "zh" || value === "en";
}
