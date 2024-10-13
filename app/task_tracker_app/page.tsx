import React from "react";
import { StaticImageData } from "next/image";

import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import project_tracker from "../img/projects/project_tracker.png";
import project_tracker_1 from "../img/projects/project_tracker_1.png";
import project_tracker_2 from "../img/projects/project_tracker_2.png";
import { ProjectTemplate } from "../components/ProjectTemplate";

export const metadata = {
  title: "Task Tracker App - Jason Liao",
  description: "This app helps users organise and track their tasks.",
};

function TaskTrackerApp() {
  const title = "Task Tracker App";

  const id = "task_tracker_app";

  type LinksType = { href: string; icon: IconDefinition; text: string }[];

  const links: LinksType = [
    {
      href: "https://github.com/jasontwuk/React_task-tracker",
      icon: faCode,
      text: "code",
    },
    {
      href: "https://jasontwuk.github.io/React_task-tracker/",
      icon: faWindowMaximize,
      text: "live",
    },
  ];

  const intro: string[] = [
    "Life is full of both small and large tasks that we need to complete each day. With the help of an easy-to-use task tracker, managing these tasks becomes simpler. All we need to do is write them down and tackle them one by one, and we’ll be on the right track in life.",
    "In this web application, users have full control. They can add tasks by providing a name and a deadline or time. If they choose, they can also categorise the task by selecting from five different colour groups. Users can edit or delete existing tasks and rearrange them by dragging them to the desired position. By clicking on a colour button, users can filter and display only the tasks within that specific colour category. Additionally, tasks can be sorted by time, either in chronological or reverse chronological order, by using the time sorting buttons.",
  ];

  const technologies: string[] = [
    "HTML",
    "CSS",
    "Sass",
    "React.js",
    "JavaScript ES6",
    "Git",
  ];

  const resource: string[] = ["Github", "Npm packages"];

  const imgBgColour: string = "from-green-50 to-green-200";

  type DetailsType = {
    src: StaticImageData;
    imageAlt: string;
    title: string;
    contents?: string[];
    list?: string[];
  }[];

  const details: DetailsType = [
    {
      src: project_tracker,
      imageAlt: "Task tracker app image",
      title: "Purpose and Goal",
      contents: [
        "The purpose of this project was to apply my React knowledge to build a practical web application. Through building this application, my aim was to get some solid experience working with the React framework and other related technologies.",
      ],
    },
    {
      src: project_tracker_1,
      imageAlt: "Task tracker app image",
      title: "Challenges and My Approach",
      contents: [
        "This is the first time I have used React to build a web application. I applied my knowledge of React Hooks, along with other technologies (e.g. Git version control, npm packages, and so on) to accomplish it. I added several features to the application, such as slide-in and slide-out animation effects and a drag-and-drop function.",
        "As with previous projects, I encountered a few difficulties with this one as well. I found solutions to these issues by reading documentation, technical articles, and code examples. I tried various code snippets before finding the right ones that worked for the project. With the help of Git, I was able to experiment with code without worrying about messing up what I had already built.",
      ],
    },

    {
      src: project_tracker_2,
      imageAlt: "Task tracker app image",
      title: "What I’ve learnt",
      contents: [
        "I really enjoyed working on this project. I found that React is a very powerful tool; it keeps the project’s code tidy and makes it incredibly easy to maintain. I also used Sass in this project, and it integrated seamlessly with React.",
        "It’s a blessing to be able to utilise packages from npm. I managed to add sliding effects, a date/time picker, unique IDs, and other features to this project. I built two custom hooks and used them alongside several React hooks to ensure the application functions as expected. Additionally, I learnt how to use Local Storage to store data in React, allowing users' tasks to be saved and accessed without the need for a server.",
        "Deploying a React project to GitHub Pages was a smooth process. It was really satisfying to see my project come to life online.",
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

export default TaskTrackerApp;
