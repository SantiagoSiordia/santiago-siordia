import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enUS from "./services/translations/locales/en-US.json";
import esMX from "./services/translations/locales/es-MX.json";

const resources = {
  en: {
    translation: enUS,
  },
  es: {
    translation: esMX,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
