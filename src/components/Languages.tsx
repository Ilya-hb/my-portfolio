import { useState, useEffect } from "react";
import { US, UA } from "country-flag-icons/react/3x2";
import { useTranslation } from "react-i18next";

export default function Languages() {
  const [language, setLanguage] = useState("ua");
  const { i18n } = useTranslation();
  console.log("i18n.languages:", i18n.languages);
  console.log("i18n.language:", i18n.language);

  const onChangeLang = (code: string) => {
    setLanguage(code);
    i18n.changeLanguage(code);
  };

  return (
    <div>
      <ul className="flex space-x-2 items-center">
        <li
          className={`cursor-pointer ${
            language === "en" ? "underline" : ""
          } hover:underline dark:text-white text-black`}
          onClick={() => onChangeLang("en")}
        >
          <US title="United States" />
          EN
        </li>

        <li
          className={`cursor-pointer ${
            language === "ua" ? "underline" : ""
          } hover:underline dark:text-white text-black`}
          onClick={() => onChangeLang("ua")}
        >
          <UA title="Ukraine" />
          UA
        </li>
      </ul>
    </div>
  );
}
