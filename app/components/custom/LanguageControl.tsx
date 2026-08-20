import { usePortfolioContent } from "@/contexts/LanguageContext";

interface LanguageControlProps {
  compact?: boolean;
}

const LanguageControl = ({ compact = false }: LanguageControlProps) => {
  const { locale, setLocale, siteContent } = usePortfolioContent();

  return (
    <div
      className="flex items-center gap-3"
      role="group"
      aria-label={siteContent.shell.languageLabel}
    >
      {siteContent.languages.map((language) => {
        const isActive = language.code === locale;

        return (
          <button
            key={language.code}
            type="button"
            className={[
              "metadata duration-fast ease-standard pb-1 transition-colors",
              isActive
                ? "border-signal text-foreground border-b"
                : "text-foreground-subtle hover:text-foreground",
              compact ? "min-h-8" : "min-h-10",
            ].join(" ")}
            aria-pressed={isActive}
            onClick={() => setLocale(language.code)}
          >
            {language.label}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageControl;
