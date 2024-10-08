"use client";

import React, { useEffect } from "react";

import { nunito } from "../utilities/fonts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export const About = () => {
  const paragraphs: string[] = [
    "Hi, I’m Jason, a dedicated front-end developer with over 3 years of experience in developing and optimising responsive, user-friendly web applications and interfaces.",
    "My passion for front-end development is driven by the desire to build solutions that help users from the ground up using code. I take pride in crafting clean and efficient code, always with the end-user in mind. I am proficient in Next.js, React.js, HTML, CSS, JavaScript ES6, Tailwind, and Git, and I continually seek opportunities to expand my skill set and enhance my craft.",
    "I thrive on attention to detail and am committed to ensuring that every project I undertake delivers both functionality and aesthetic appeal. I enjoy the process of transforming designs into interactive, high-performing user experiences.",
  ];

  const skills: string[] = [
    "HTML",
    "CSS",
    "Sass",
    "Tailwind",
    "Next.js",
    "React.js",
    "Redux",
    "JQuery",
    "JavaScript ES6",
    "TypeScript",
    "NPM packages",
    "Git",
    "Firebase",
    "MODX",
    "shadcn",
    "Storybook",
    "W3C Accessibility",
    "Adobe Suite",
    "Teamwork",
    "Problem solving",
    "Critical thinking",
    "Creative thinking",
    "Communication",
    "Organisation",
    "Dependability",
  ];

  useEffect(() => {
    // !!!!!!!! SELECT ITEMS !!!!!!!!
    const about = document.getElementById("about");

    setTimeout(() => {
      if (about) {
        about.classList.remove("translate-y-8");
        about.classList.remove("opacity-0");
        about.classList.add("translate-y-0");
        about.classList.add("opacity-100");
      }
    }, 400);
  }, []);
  return (
    <div
      className="flex translate-y-8 flex-col items-start justify-center gap-10 opacity-0 duration-200"
      id="about"
    >
      <h2 className={`${nunito.className} text-3xl text-blue-800 md:text-4xl`}>
        About Me
      </h2>

      <div className="flex flex-col items-center justify-center gap-5 md:px-5">
        {paragraphs.map((p, index) => {
          return (
            <p
              className="text-lg font-thin leading-7 tracking-wider md:text-xl md:leading-8"
              key={index}
            >
              {p}
            </p>
          );
        })}
      </div>

      <div className="flex flex-col items-start justify-center gap-5 rounded-md bg-blue-50 p-5 md:mx-5">
        <h3
          className={`${nunito.className} w-full rounded-md bg-white py-2 text-center text-3xl text-blue-800 md:text-2xl`}
        >
          Main Skills
        </h3>

        <div className="flex w-full flex-wrap gap-y-2">
          {skills.map((s, index) => {
            return (
              <span
                key={index}
                className="flex w-1/2 items-center justify-start gap-1 sm:w-1/3 md:w-1/4 lg:w-1/5"
              >
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="h-4 w-4 shrink-0 text-blue-400"
                />
                <em className="font-thin not-italic">{s}</em>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};