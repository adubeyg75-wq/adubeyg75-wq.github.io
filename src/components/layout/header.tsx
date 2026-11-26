"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { business, ctas, nav } from "@/content/site";
import { useLanguage } from "@/lib/language";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { LanguageToggle } from "@/components/layout/language-toggle";

const CONSULTATION_HREF = "/project-finance#enquiry";
const SECONDARY_NAV_HREFS = new Set(["/courses", "/services", "/book"]);
const MENU_EXIT_MS = 220;
const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuMounted, setMenuMounted] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const exitTimerRef = useRef<number | null>(null);

  const openMenu = useCallback(() => {
    if (exitTimerRef.current !== null) {
      window.clearTimeout(exitTimerRef.current);
      exitTimerRef.current = null;
    }
    setMenuMounted(true);
    setMenuOpen(true);
    window.requestAnimationFrame(() => setMenuVisible(true));
  }, []);

  const closeMenu = useCallback(() => {
    setMenuVisible(false);
    setMenuOpen(false);
    if (exitTimerRef.current !== null) window.clearTimeout(exitTimerRef.current);
    exitTimerRef.current = window.setTimeout(() => {
      setMenuMounted(false);
      exitTimerRef.current = null;
    }, MENU_EXIT_MS);
  }, []);

  useEffect(() => {
    return () => {
      if (exitTimerRef.current !== null) window.clearTimeout(exitTimerRef.current);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const hamburger = hamburgerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function focusableItems(): HTMLElement[] {
      return Array.from(
        menuRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR) ?? [],
      );
    }

    focusableItems()[0]?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== "Tab") return;

      const items = focusableItems();
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);

    const desktopQuery = window.matchMedia("(min-width: 768px)");
    function onResize() {
      if (desktopQuery.matches) closeMenu();
    }
    desktopQuery.addEventListener("change", onResize);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktopQuery.removeEventListener("change", onResize);
      document.body.style.overflow = previousOverflow;
      hamburger?.focus();
    };
  }, [menuOpen, closeMenu]);

  const headerTone = scrolled
    ? "border-white/10 bg-navy/95 shadow-md backdrop-blur"
    : "border-transparent bg-navy shadow-xs";

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-[background-color,box-shadow,border-color] duration-[var(--duration-slow)] ease-[var(--ease-out)] motion-reduce:transition-none ${headerTone}`.trim()}
    >
      <Container className="flex min-h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center rounded-lg font-heading text-xl font-bold text-white transition-[translate,color] duration-[var(--duration-fast)] ease-[var(--ease-out)] motion-reduce:transition-none motion-reduce:translate-none motion-reduce:hover:translate-none hover:-translate-y-px hover:text-accent-light focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent-light focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
        >
          {t(business.firm)}
        </Link>

        <nav aria-label={t(ctas.openMenu)} className="hidden items-center gap-3 md:flex lg:gap-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`min-h-11 rounded-md px-1 py-3 text-base font-medium text-white/90 transition-colors duration-[var(--duration-fast)] ease-[var(--ease-out)] motion-reduce:transition-none hover:text-accent-light focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent-light focus-visible:ring-offset-2 focus-visible:ring-offset-navy ${
                SECONDARY_NAV_HREFS.has(item.href) ? "hidden lg:block" : ""
              }`}
            >
              {t(item.label)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle tone="onDark" />
          <Button href={CONSULTATION_HREF} variant="primary" tone="onDark">
            {t(ctas.freeConsultation)}
          </Button>
        </div>

        <button
          ref={hamburgerRef}
          type="button"
          onClick={openMenu}
          aria-label={t(ctas.openMenu)}
          aria-controls={menuMounted ? "mobile-menu" : undefined}
          aria-expanded={menuOpen}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-white/30 text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent-light focus-visible:ring-offset-2 focus-visible:ring-offset-navy md:hidden"
        >
          <Menu aria-hidden="true" className="h-6 w-6" />
        </button>
      </Container>

      {menuMounted ? (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            aria-hidden="true"
            onClick={closeMenu}
            className={`absolute inset-0 bg-navy/75 transition-opacity duration-[var(--duration-normal)] ease-[var(--ease-out)] motion-reduce:transition-none ${
              menuVisible ? "opacity-100" : "opacity-0"
            }`}
          />
          <div
            id="mobile-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label={t(ctas.openMenu)}
            aria-hidden={!menuOpen}
            className={`relative flex h-full flex-col overflow-y-auto bg-surface shadow-xl transition-[opacity,translate] duration-[var(--duration-normal)] ease-[var(--ease-out)] motion-reduce:transition-none motion-reduce:translate-none motion-reduce:opacity-100 ${
              menuVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <Container className="flex min-h-16 items-center justify-between border-b border-navy/10">
              <span className="font-heading text-xl font-bold text-navy">
                {t(business.firm)}
              </span>
              <button
                type="button"
                onClick={closeMenu}
                aria-label={t(ctas.closeMenu)}
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-navy/20 text-navy focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                <X aria-hidden="true" className="h-6 w-6" />
              </button>
            </Container>

            <Container className="flex flex-1 flex-col gap-6 py-8">
              <nav className="flex flex-col">
                {nav.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    style={{ transitionDelay: `${index * 45}ms` }}
                    className={`min-h-11 rounded-lg border-b border-navy/10 py-3 text-lg font-semibold text-navy transition-[opacity,translate] duration-[var(--duration-normal)] ease-[var(--ease-out)] motion-reduce:transition-none motion-reduce:translate-none motion-reduce:opacity-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${
                      menuVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                    }`}
                  >
                    {t(item.label)}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-4">
                <LanguageToggle />
                <Button
                  href={CONSULTATION_HREF}
                  variant="primary"
                  size="lg"
                  onClick={closeMenu}
                >
                  {t(ctas.freeConsultation)}
                </Button>
              </div>
            </Container>
          </div>
        </div>
      ) : null}
    </header>
  );
}
