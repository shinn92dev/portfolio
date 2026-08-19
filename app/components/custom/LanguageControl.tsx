import { siteContent } from "@/contents/en";

interface LanguageControlProps {
  compact?: boolean;
}

const LanguageControl = ({ compact = false }: LanguageControlProps) => {
  return (
    <div
      className="flex items-center gap-3"
      role="group"
      aria-label={siteContent.shell.languageLabel}
    >
      {siteContent.languages.map((language) => {
        if (language.enabled) {
          return (
            <span
              key={language.code}
              className="metadata border-b border-signal pb-1 text-foreground"
              aria-current="true"
            >
              {language.label}
            </span>
          );
        }

        return (
          <span
            key={language.code}
            className="flex items-center gap-1 text-foreground-subtle"
            title={language.message}
          >
            <span className="metadata">{language.label}</span>

            {compact ? (
              <span className="sr-only">
                {language.message ?? siteContent.shell.comingSoonLabel}
              </span>
            ) : (
              <span className="text-[0.625rem] uppercase tracking-wider">
                {siteContent.shell.comingSoonLabel}
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default LanguageControl;
