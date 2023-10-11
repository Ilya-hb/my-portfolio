import React from "react";
import { BsGithub } from "react-icons/bs";
import { SiTypescript, SiJavascript } from "react-icons/si";
import { FaSass, FaReact, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa";

const iconsStyling = "text-5xl dark:text-secondaryLight text-secondaryDark";
const TECHNOLOGIES_LOGOS = [
  <SiTypescript className={iconsStyling} />,
  <BsGithub className={iconsStyling} />,
  <FaReact className={iconsStyling} />,
  <FaSass className={iconsStyling} />,
  <FaGitAlt className={iconsStyling} />,
  <FaHtml5 className={iconsStyling} />,
  <FaCss3Alt className={iconsStyling} />,
  <SiJavascript className={iconsStyling} />,
  // <FaCss3Alt className={iconsStyling} />,
  // <FaCss3Alt className={iconsStyling} />,
];

export default function TechnologiesSlider() {
  return (
    <>
      <div className="relative m-auto w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] ">
        <div className="animate-infinite-slider flex w-[calc(200px*10)]">
          {TECHNOLOGIES_LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[125px] items-center justify-center"
              key={index}
            >
              {logo}
            </div>
          ))}
          {TECHNOLOGIES_LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[125px] items-center justify-center"
              key={index}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
