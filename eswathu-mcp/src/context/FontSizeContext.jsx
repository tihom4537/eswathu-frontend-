import { createContext, useContext, useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';

/**
 * Font-size scales per language.
 * A-: 14px (0.875rem) for both languages.
 * Default: 16px (1rem) for both languages.
 * A+: 18px (1.125rem) for both languages.
 */
const SCALES = {
  en: { sm: '0.875rem', md: '1rem', lg: '1.125rem' },
  kn: { sm: '0.875rem', md: '1rem', lg: '1.125rem' },
};

const DEFAULT_LEVEL = 'md';

const FontSizeContext = createContext(null);

export function FontSizeProvider({ children }) {
  const { lang } = useLanguage();

  const [level, setLevel] = useState(
    () => localStorage.getItem(`fontSize_${lang}`) || DEFAULT_LEVEL,
  );

  /* When language changes, restore that language's saved preference */
  useEffect(() => {
    const stored = localStorage.getItem(`fontSize_${lang}`) || DEFAULT_LEVEL;
    setLevel(stored);
  }, [lang]);

  /* Apply font size + set html lang attribute whenever level or lang changes */
  useEffect(() => {
    const size = SCALES[lang][level];
    document.documentElement.style.setProperty('--base-font-size', size);
    document.documentElement.lang = lang;
    localStorage.setItem(`fontSize_${lang}`, level);
    // Apply CSS class so px-based font-size rules scale correctly
    document.documentElement.classList.toggle('font-sm', level === 'sm');
    document.documentElement.classList.toggle('font-lg', level === 'lg');
  }, [level, lang]);

  return (
    <FontSizeContext.Provider value={{ level, setLevel }}>
      {children}
    </FontSizeContext.Provider>
  );
}

export function useFontSize() {
  return useContext(FontSizeContext);
}
