import { Globe2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "fr", label: "FR" },
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("pouahom-language", language);
  };

  return (
    <div className="flex items-center gap-1 rounded-full bg-neutral-100 p-1">
      <Globe2 size={17} className="ml-2 text-neutral-500" />

      {languages.map((language) => (
        <button
          key={language.code}
          onClick={() => changeLanguage(language.code)}
          className={`rounded-full px-2.5 py-1.5 text-xs font-bold transition ${
            i18n.language === language.code
              ? "bg-[#8f0d0d] text-white"
              : "text-neutral-600 hover:text-[#8f0d0d]"
          }`}
        >
          {language.label}
        </button>
      ))}
    </div>
  );
}
