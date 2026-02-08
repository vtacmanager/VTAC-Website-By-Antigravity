import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enUS from './locales/en-US.json';
import enGB from './locales/en-GB.json';
import th from './locales/th.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            'en-US': { translation: enUS },
            'en-GB': { translation: enGB },
            'th': { translation: th }
        },
        fallbackLng: 'en-US',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
