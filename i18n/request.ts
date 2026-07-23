import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

const LOCALES = ["pt", "en"] as const;
type Locale = (typeof LOCALES)[number];

function isValidLocale(v: string): v is Locale {
  return (LOCALES as readonly string[]).includes(v);
}

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const raw = cookieStore.get("NEXT_LOCALE")?.value ?? "pt";
  const locale: Locale = isValidLocale(raw) ? raw : "pt";

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
