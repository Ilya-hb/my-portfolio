import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en", //deafault lng
  fallbackLng: "en",
  interpolation: {
    //used to escape the values and avoid XSS attacks,
    // we will set it to false, because React already does it by default.
    escapeValue: false,
  },
  resources: {
    
  },
});

export default i18n;
