import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Імпортуємо файли перекладів
import translationEN from "./locales/en/translation.json";
import translationUK from "./locales/uk/translation.json";

i18n
  // Плагін для визначення мови браузера
  .use(LanguageDetector)
  // Передаємо екземпляр i18n в react-i18next
  .use(initReactI18next)
  // Ініціалізуємо i18next
  .init({
    // Наші переклади
    resources: {
      en: {
        translation: translationEN,
      },
      uk: {
        translation: translationUK,
      },
    },
    // Мова за замовчуванням, якщо мова користувача недоступна
    fallbackLng: "en",
    // Вмикаємо логування в консоль для дебагінгу
    debug: false,
    interpolation: {
      escapeValue: false, // Не потрібно для React, оскільки він вже захищає від XSS
    },
  });

export default i18n;
