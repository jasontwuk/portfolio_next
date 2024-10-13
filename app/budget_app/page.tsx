import React from "react";
import { StaticImageData } from "next/image";

import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import project_budget from "../img/projects/project_budget.png";
import project_budget_1 from "../img/projects/project_budget_1.png";
import project_budget_2 from "../img/projects/project_budget_2.png";
import { ProjectTemplate } from "../components/ProjectTemplate";

export const metadata = {
  title: "Budget App - Jason Liao",
  description: "This app helps users manage their budgets and expenses.",
};

function TogoalxApp() {
  const title = "Budget App";

  const id = "budget_app";

  type LinksType = { href: string; icon: IconDefinition; text: string }[];

  const links: LinksType = [
    {
      href: "https://github.com/jasontwuk/JavaScript-Project_Budget-APP",
      icon: faCode,
      text: "code",
    },
    {
      href: "https://jasontwuk.github.io/JavaScript-Project_Budget-APP/",
      icon: faWindowMaximize,
      text: "live",
    },
  ];

  const intro: string[] = [
    "Trying to save money is not an easy task, especially when you spend blindly. I decided to create a budgeting app that I would use, as it would give users more control over their spending.",
    "This web application allows users to set their budgets and keep track of their expenses. Users can edit their budgets and add, delete, or modify their expenses at any time. The balance will turn red to indicate overspending; otherwise, it will be green to show that the budget is still healthy.",
  ];

  const technologies: string[] = ["HTML", "CSS", "JavaScript ES6", "Git"];

  const resource: string[] = ["Github", "Npm packages", "Font Awesome"];

  const imgBgColour: string = "from-purple-50 to-purple-200";

  type DetailsType = {
    src: StaticImageData;
    imageAlt: string;
    title: string;
    contents?: string[];
    list?: string[];
  }[];

  const details: DetailsType = [
    {
      src: project_budget,
      imageAlt: "Budget App image",
      title: "Purpose and Goal",
      contents: [
        "The purpose of this project was to apply my JavaScript knowledge to build a practical web application. Through building this application, I aimed to gain real-world work experience and put ES6 syntax into practice.",
      ],
    },
    {
      src: project_budget_1,
      imageAlt: "Budget App image",
      title: "Challenges and My Approach",
      contents: [
        "Building this application required a significant amount of JavaScript knowledge. Searching for and selecting the appropriate methods to complete this project was a challenging yet interesting process. I always keep the users in mind when working on projects, so making this app easier to use was one of my top priorities.",
      ],
    },

    {
      src: project_budget_2,
      imageAlt: "Budget App image",
      title: "What I’ve learnt",
      contents: [
        "This project helped to enhance my JavaScript knowledge, particularly in DOM manipulation and using ES6+ syntax. I also gained plenty of practice in thinking about how to improve the app’s UI and make it more user-friendly.",
      ],
    },
  ];

  return (
    <ProjectTemplate
      title={title}
      id={id}
      links={links}
      intro={intro}
      technologies={technologies}
      resource={resource}
      imgBgColour={imgBgColour}
      details={details}
    />
  );
}

export default TogoalxApp;
