"use client";

import { useState, useEffect } from 'react';
import {
  detectLanguage,
  getTranslations,
  type Language,
  type TranslationKeys,
} from './translations';

export function useTranslation() {
  const [lang, setLang] = useState<Language>('en');
  const [t, setT] = useState<TranslationKeys>(getTranslations('en'));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const detectedLang = detectLanguage();
    setLang(detectedLang);
    setT(getTranslations(detectedLang));
    setMounted(true);
  }, []);

  const changeLanguage = (newLang: Language) => {
    setLang(newLang);
    setT(getTranslations(newLang));
    localStorage.setItem('language', newLang);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('languageChange', { detail: newLang }));
    }
  };

  return { t: t as any, lang, mounted, setLang: changeLanguage };
}
