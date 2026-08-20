import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  isSupportedLocale,
  portfolioContent,
  type Locale,
  type PortfolioContent,
} from "@/contents";

const LANGUAGE_STORAGE_KEY = "portfolio-language";

interface LanguageContextValue extends PortfolioContent {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const storedLocale = localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (isSupportedLocale(storedLocale)) {
      setLocaleState(storedLocale);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (nextLocale: Locale) => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLocale);
    setLocaleState(nextLocale);
  };

  const value = useMemo<LanguageContextValue>(
    () => ({
      ...portfolioContent[locale],
      locale,
      setLocale,
    }),
    [locale],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const usePortfolioContent = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "usePortfolioContent must be used within LanguageProvider.",
    );
  }

  return context;
};
