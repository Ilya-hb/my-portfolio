import React, { useState } from "react";
import { US, RU, UA } from "country-flag-icons/react/3x2";

export default function Languages() {
  const [language, setLanguage] = useState("US");

  const handleLanguageClick = (selectedLanguage: string) => {
    setLanguage(selectedLanguage);
  };

  return (
    <div>
      <ul className="flex space-x-2 items-center">
        <li
          className={`cursor-pointer ${
            language === "US" ? "underline" : ""
          } hover:underline dark:text-white text-black`}
          onClick={() => handleLanguageClick("US")}
        >
          <US title="United States" />
          US
        </li>

        <li
          className={`cursor-pointer ${
            language === "UA" ? "underline" : ""
          } hover:underline dark:text-white text-black`}
          onClick={() => handleLanguageClick("UA")}
        >
          <UA title="Ukraine" />
          UA
        </li>
      </ul>
    </div>
  );
}
