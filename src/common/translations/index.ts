import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Language } from "../types";
import FR from "./fr.json";

const resources = {
  fr: { translation: FR },
};

i18n.use(initReactI18next).init({
  resources,
  lng: Language.Fr,
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});
