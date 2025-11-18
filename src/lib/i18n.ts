"use client";

import { useLanguage } from '@/contexts/language-context';
import en from './locales/en.json';
import es from './locales/es.json';

const translations = {
  en,
  es,
};

// Helper function to get nested keys
function getNested(obj: any, path: string): string | undefined {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}


export function useTranslation() {
  const { language } = useLanguage();
  const t = (key: string): string => {
    const translation = getNested(translations[language], key);
    return translation || key;
  };
  return { t, language };
}
