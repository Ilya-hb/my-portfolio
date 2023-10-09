import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "ua", //deafault lng
  fallbackLng: "en",
  interpolation: {
    //used to escape the values and avoid XSS attacks,
    // we will set it to false, because React already does it by default.
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        navbarTitle: "My Portfolio",
        navbarMain: "Main",
        navbarProjects: "Pet-projects",
        navbarContacts: "Contacts",
        aboutMe: "ABOUT ME",
      },
    },
    ua: {
      translation: {
        navbarTitle: "Моє резюме",
        navbarMain: "Головна",
        navbarProjects: "Пет-проекти",
        navbarContacts: "Контакти",
        aboutMe: "ПРО МЕНЯ",
      },
    },
  },
});

export default i18n;
