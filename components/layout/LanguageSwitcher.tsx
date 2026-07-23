"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

interface Props {
  solid?: boolean;
}

export default function LanguageSwitcher({ solid = false }: Props) {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function toggle() {
    const next = locale === "pt" ? "en" : "pt";
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=31536000; SameSite=Lax`;
    startTransition(() => router.refresh());
  }

  return (
    <button
      onClick={toggle}
      disabled={isPending}
      aria-label="Switch language"
      className={`hidden md:flex items-center gap-1.5 font-label-caps text-label-caps transition-all duration-300 ${
        isPending ? "opacity-50" : ""
      } ${
        solid
          ? "text-on-surface-variant hover:text-primary"
          : "text-white/80 hover:text-white"
      }`}
    >
      <span className="material-symbols-outlined text-[16px]">language</span>
      <span>{locale === "pt" ? "EN" : "PT"}</span>
    </button>
  );
}
