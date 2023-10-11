import photo from "../images/ilusha.png";
import { useTranslation } from "react-i18next";
import TechnologiesSlider from "./TechnologiesSlider";

export default function AboutMe() {
  const { t } = useTranslation();
  return (
    <section className="about-me container mx-auto py-14 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h1 className="text-6xl font-bold text-black dark:text-white mb-5">
            {t("aboutMe")}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Я занимаюсь разработкой веб-приложений и имею опыт работы с
            следующими технологиями:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 mb-8">
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5 и CSS3</li>
          </ul>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Моя цель - создавать современные, интерактивные и отзывчивые
            веб-приложения, которые улучшают пользовательский опыт.
          </p>
        </div>
        <div className="">
          <img src={photo} alt="" className="rounded-full w-44 h-44 mx-auto" />
          <TechnologiesSlider />
        </div>
      </div>
    </section>
  );
}
