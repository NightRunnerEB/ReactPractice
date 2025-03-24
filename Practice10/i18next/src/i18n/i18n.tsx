import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ru from './locales/ru.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
    },
    lng: 'ru',
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });




console.log("Доступные переводы:", i18n.getResourceBundle('ru', 'translation'));
console.log("Текущий язык:", i18n.language);

export default i18n;