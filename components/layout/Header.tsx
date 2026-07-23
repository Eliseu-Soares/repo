"use client";

import { useEffect, useState, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/app/logo.png";

function switchLocale(locale: string) {
  const next = locale === "pt" ? "en" : "pt";
  document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=31536000; SameSite=Lax`;
  return next;
}

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const t = useTranslations("Navigation");
  const locale = useLocale();

  const NAV_LINKS = [
    { href: "/destinos", label: t("destinations") },
    { href: "/provincias", label: t("provinces") },
    { href: "/mapa", label: t("map") },
    { href: "/eventos", label: t("events") },
    { href: "/cultura", label: t("culture") },
    { href: "/visitar-angola", label: t("visitAngola") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");
  const solid = scrolled || mobileOpen;

  function toggleLocale() {
    switchLocale(locale);
    startTransition(() => router.refresh());
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-white/97 backdrop-blur-md shadow-sm border-b border-savanna-sand/30"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="flex justify-between items-center w-full px-margin-desktop h-20 max-w-container-max mx-auto">
        {/* Logo */}
        <a href="/" className="flex items-center shrink-0 z-10">
          <Image
            src={logo}
            alt="Tour.a"
            width={120}
            height={48}
            priority
            className={`object-contain transition-all duration-500 ${solid ? "" : "brightness-0 invert"}`}
            style={{ height: solid ? "34px" : "42px", width: "auto" }}
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex gap-6 items-center h-full">
          {NAV_LINKS.map(({ href, label }) => {
            const active = isActive(href);
            return (
              <a
                key={href}
                href={href}
                className={`font-label-caps text-label-caps h-full flex items-center border-b-2 transition-all duration-300 ${
                  active
                    ? solid ? "text-primary border-primary" : "text-white border-white"
                    : solid
                    ? "text-on-surface-variant border-transparent hover:text-primary hover:border-primary/40"
                    : "text-white/80 border-transparent hover:text-white hover:border-white/40"
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <a
            href="/pesquisa"
            aria-label={t("search")}
            className={`hidden md:flex items-center transition-all duration-300 ${
              solid ? "text-on-surface-variant hover:text-primary" : "text-white/80 hover:text-white"
            }`}
          >
            <span className="material-symbols-outlined text-[22px]">search</span>
          </a>

          <a
            href="/favoritos"
            aria-label={t("favorites")}
            className={`hidden md:flex items-center transition-all duration-300 ${
              isActive("/favoritos") ? "text-primary"
                : solid ? "text-on-surface-variant hover:text-primary" : "text-white/80 hover:text-white"
            }`}
          >
            <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: '"FILL" 0, "wght" 400' }}>favorite</span>
          </a>

          <a
            href="/planeador"
            aria-label={t("planner")}
            className={`hidden md:flex items-center transition-all duration-300 ${
              isActive("/planeador") ? "text-primary"
                : solid ? "text-on-surface-variant hover:text-primary" : "text-white/80 hover:text-white"
            }`}
          >
            <span className="material-symbols-outlined text-[22px]">map</span>
          </a>

          {/* Language toggle */}
          <button
            onClick={toggleLocale}
            disabled={isPending}
            aria-label="Switch language"
            className={`hidden md:flex items-center gap-1.5 font-label-caps text-label-caps transition-all duration-300 ${
              isPending ? "opacity-50" : ""
            } ${solid ? "text-on-surface-variant hover:text-primary" : "text-white/80 hover:text-white"}`}
          >
            <span className="material-symbols-outlined text-[16px]">language</span>
            <span>{locale === "pt" ? "EN" : "PT"}</span>
          </button>

          <a
            href="/perfil"
            className={`hidden md:inline-flex items-center gap-2 font-label-caps text-label-caps tracking-widest px-5 py-2.5 transition-all duration-300 ${
              isActive("/perfil")
                ? solid ? "bg-primary text-white" : "bg-white/20 text-white border border-white/60"
                : solid
                ? "bg-primary text-white hover:bg-primary-container"
                : "border border-white/80 text-white hover:bg-white/15 hover:border-white"
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">person</span>
            {t("profile").toUpperCase()}
          </a>

          {/* Hamburger */}
          <button
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMobileOpen((v) => !v)}
            className={`lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 transition-all ${
              solid ? "text-on-surface" : "text-white"
            }`}
          >
            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden bg-white border-t border-savanna-sand lg:hidden"
          >
            <div className="px-margin-mobile py-8 flex flex-col gap-5">
              {NAV_LINKS.map(({ href, label }) => {
                const active = isActive(href);
                return (
                  <a
                    key={href}
                    href={href}
                    className={`font-label-caps text-label-caps text-base py-1 border-l-2 pl-4 transition-all ${
                      active
                        ? "text-primary border-primary"
                        : "text-on-surface-variant border-transparent hover:text-primary hover:border-primary"
                    }`}
                  >
                    {label}
                  </a>
                );
              })}

              <div className="flex gap-3 mt-2">
                <a href="/favoritos" className="flex-1 flex items-center justify-center gap-2 border border-savanna-sand font-label-caps text-label-caps text-[10px] tracking-widest py-3 text-on-surface-variant hover:border-primary hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[16px]">favorite</span>
                  {t("favorites").toUpperCase()}
                </a>
                <a href="/planeador" className="flex-1 flex items-center justify-center gap-2 border border-savanna-sand font-label-caps text-label-caps text-[10px] tracking-widest py-3 text-on-surface-variant hover:border-primary hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[16px]">map</span>
                  {t("planner").toUpperCase()}
                </a>
              </div>

              <a
                href="/perfil"
                className="bg-primary text-white text-center font-label-caps text-label-caps tracking-widest px-6 py-4 flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[16px]">person</span>
                {t("profile").toUpperCase()}
              </a>

              <button
                onClick={toggleLocale}
                disabled={isPending}
                className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">language</span>
                {locale === "pt" ? "Switch to English" : "Mudar para Português"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
