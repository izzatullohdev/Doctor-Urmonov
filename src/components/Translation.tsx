import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "uz", label: "UZ" },
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
];

const Translation = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState<string>("uz");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = event.target.value;
    setLang(selectedLang);
    i18n.changeLanguage(selectedLang);
    localStorage.setItem('language', selectedLang);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    const defaultLang = savedLang || 'uz'; 
    i18n.changeLanguage(defaultLang);
    setLang(defaultLang); 
  }, [i18n]);

  return (
    <div className="flex items-center justify-center p-2">
      <select
        value={lang}
        onChange={handleChange}
        style={{
          color: "#0A0933",
          outline: "none",
          cursor: "pointer"
        }}
      >
        {languages.map(({ code, label }) => (
          <option key={code} value={code} className="text-[#0A0933] border-none">
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Translation;