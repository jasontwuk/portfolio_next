import React from "react";
import { StaticImageData } from "next/image";

import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import project_togoalx from "../img/projects/project_togoalx.png";
import project_togoalx_1 from "../img/projects/project_togoalx_1.png";
import project_togoalx_2 from "../img/projects/project_togoalx_2.png";
import { ProjectTemplate } from "../components/ProjectTemplate";

export const metadata = {
  title: "Togoalx App - Jason Liao",
  description:
    "This app lets users create their achievement record and check on their daily and monthly progress.",
};

function TogoalxApp() {
  const title = "ToGoalx App";

  const id = "togoalx_app";

  type LinksType = { href: string; icon: IconDefinition; text: string }[];

  const links: LinksType = [
    {
      href: "https://github.com/jasontwuk/togoalx",
      icon: faCode,
      text: "code",
    },
    {
      href: "https://togoalx.netlify.app/",
      icon: faWindowMaximize,
      text: "live",
    },
  ];

  const intro: string[] = [
    "ToGoalx is an easy-to-use web application designed to help users manage their personal goals with precision and clarity. By providing an intuitive interface and dashboard, ToGoalx makes it easy for users to set, track, and achieve their objectives.",
    "The web app's dashboard offers users an at-a-glance overview of their ongoing progress, helping them stay motivated and focused on what matters most. It's built with ease of use in mind, making it a great tool for anyone looking to take control of their personal development.",
  ];

  const technologies: string[] = [
    "HTML",
    "CSS",
    "Tailwind",
    "Next.js",
    "React.js",
    "JavaScript ES6",
    "TypeScript",
    "Git",
    "Firebase",
    "W3C Accessibility",
  ];

  const resource: string[] = ["Netify", "Npm packages", "Font Awesome"];

  const imgBgColour: string = "from-indigo-50 to-indigo-200";

  type DetailsType = {
    src: StaticImageData;
    imageAlt: string;
    title: string;
    contents?: string[];
    list?: string[];
  }[];

  const details: DetailsType = [
    {
      src: project_togoalx,
      imageAlt: "ToGoalx app image",
      title: "Purpose and Goal",
      contents: [
        "The purpose of ToGoalx was to apply my knowledge of Next.js, TypeScript, Firebase and other front-end technologies, such as React.js, to build a practical, real-world web application. My goal in building this project was not only to create a functional app that simplifies goal management but also to gain hands-on experience with these technologies.",
      ],
    },
    {
      src: project_togoalx_1,
      imageAlt: "ToGoalx app image",
      title: "Challenges and My Approach",
      list: [
        "Real-time Updates and Interactivity: The need for real-time updates across the dashboard meant ensuring efficient backend communication without lag. I leveraged modern frontend frameworks and asynchronous processing to ensure a smooth and intuitive user experience.",
        "Tracking Goal Progress: Accurately tracking progress across multiple goals requires a robust system. To ensure clarity, I built a progress tracker that tracks completion rates of different goals in real-time.",
        "Creating an Intuitive User Interface: Designing an interface that balances simplicity with powerful features was a challenge. To solve this, I focused on minimalistic design principles, ensuring that users could easily navigate between goal-setting, tracking, and reviewing progress without feeling lost or overwhelmed.",
      ],
    },

    {
      src: project_togoalx_2,
      imageAlt: "ToGoalx app image",
      title: "What I’ve learnt",
      list: [
        "Deepened my understanding of Next.js, effectively utilising its server-side rendering and dynamic routing to enhance performance and user experience.",
        "Strengthened my proficiency in TypeScript by implementing strict typing and ensuring robust, maintainable code.",
        "Mastered the integration of Firebase, using it to handle real-time data synchronisation, user authentication, and secure data storage.",
        "Developed a responsive, interactive UI that delivers a seamless user experience, applying modern development practices throughout.",
      ],
      contents: [
        "This project allowed me to successfully apply my technical knowledge in a real-world context, achieving my goal of building a scalable and user-friendly application while enhancing my skills in Next.js and related technologies.",
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
