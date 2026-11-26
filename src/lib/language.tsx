"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { hindiEnabled, type LocalizedText } from "@/content/site";
import { isTodoValue } from "@/lib/content";

export { isTodoValue } from "@/lib/content";

export type Language = "en" | "hi";

const STORAGE_KEY = "cs-arora-language";
const listeners = new Set<() => void>();

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (value: LocalizedText) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getServerSnapshot(): Language {
  return "en";
}

function getSnapshot(): Language {
  if (!hindiEnabled || typeof window === "undefined") {
    return "en";
  }

  return window.localStorage.getItem(STORAGE_KEY) === "hi" ? "hi" : "en";
}

function changeLanguage(nextLanguage: Language): void {
  if (!hindiEnabled) return;

  window.localStorage.setItem(STORAGE_KEY, nextLanguage);
  listeners.forEach((listener) => listener());
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dataset.language = language;
  }, [language]);

  const t = useCallback(
    (value: LocalizedText) => {
      if (language === "hi" && !isTodoValue(value.hi) && value.hi.trim() !== "") {
        return value.hi;
      }

      return value.en;
    },
    [language],
  );

  const contextValue = useMemo(
    () => ({ language, setLanguage: changeLanguage, t }),
    [language, t],
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
