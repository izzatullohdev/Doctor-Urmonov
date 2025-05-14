import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const languages = [
  { code: "uz", label: "UZ" },
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
];

const Translation = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState<string>("uz");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (code: string) => {
    setLang(code);
    i18n.changeLanguage(code);
    localStorage.setItem('language', code);
    setOpen(false);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    const defaultLang = savedLang || 'uz';
    i18n.changeLanguage(defaultLang);
    setLang(defaultLang);

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [i18n]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="cursor-pointer inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 max-lg:px-2 py-2 max-lg:py-1 text-md font-medium text-gray-700 focus:outline-none"
        >
          {languages.find((l) => l.code === lang)?.label}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="corsor-pointer absolute z-10 w-full rounded-md bg-white ring-black ring-opacity-5"
          >
            <div className="">
              {languages.map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => handleSelect(code)}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700"
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Translation;