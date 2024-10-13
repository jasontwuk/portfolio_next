import React from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { StaticImageData } from "next/image";

import { nunito } from "../utilities/fonts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

// *** image
import project_togoalx from "../img/projects/project_togoalx.png";
import project_tracker from "../img/projects/project_tracker.png";
import project_weather from "../img/projects/project_weather.png";
import project_budget from "../img/projects/project_budget.png";
import { UnderlineText } from "./UnderlineText";

type ProjectsProps = {
  id?: string;
};

export const Projects = (props: ProjectsProps) => {
  const { id } = props;

  let newProjects = null;

  type ProjectsType = {
    title: string;
    id: string;
    class: string;
    img: StaticImageData;
    text: string;
  };

  const projects: ProjectsType[] = [
    {
      title: "ToGoalx App",
      id: "togoalx_app",
      class:
        "bg-indigo-50 before:from-indigo-100 before:to-indigo-300 dark:before:to-indigo-500",
      img: project_togoalx,
      text: "This app lets users create their achievement record and check on their daily and monthly progress.",
    },
    {
      title: "Task Tracker App",
      id: "task_tracker_app",
      class:
        "bg-green-50 before:from-green-100 before:to-green-300 dark:before:to-green-500",
      img: project_tracker,
      text: "This app helps users organise and track their tasks.",
    },
    {
      title: "Weather Forecast App",
      id: "weather_forecast_app",
      class:
        "bg-yellow-50 before:from-yellow-100 before:to-yellow-300 dark:before:to-yellow-500",
      img: project_weather,
      text: "An app that shows today's and the future week's weather.",
    },
    {
      title: "Budget App",
      id: "budget_app",
      class:
        "bg-purple-50 before:from-purple-100 before:to-purple-300 dark:before:to-purple-500",
      img: project_budget,
      text: "This app helps users manage their budgets and expenses.",
    },
  ];

  // *** Note: for "Other Projects" section in the project page
  const otherProjects = projects.filter((project) => project.id !== id);

  if (id) {
    // *** Note: for "Other Projects" section in the project page
    newProjects = otherProjects;
  } else {
    // *** Note: for "Projects" section in the home page
    newProjects = projects;
  }

  return (
    <div className="flex flex-col items-start justify-center gap-8">
      <h2
        className={clsx(
          nunito.className,
          "text-3xl font-bold text-blue-800 md:text-4xl",
          // +++ Note: for dark mode
          "dark:text-blue-400",
        )}
      >
        {id ? "Other Projects" : "Projects"}
      </h2>

      <div className="flex flex-wrap items-start justify-center gap-x-6 gap-y-8 md:gap-x-8 md:pl-5">
        {newProjects.map((project, index) => (
          <div
            className={clsx(
              id
                ? // +++ Note: for "Other Projects" section in the project page
                  "w-full xs:w-[calc(50%-0.75rem)] md:w-[calc(33.33%-1.34rem)]"
                : // +++ Note: for "Projects" section in the home page
                  "w-full md:w-[calc(50%-1rem)]",
              "flex flex-col items-center justify-center",
            )}
            key={index}
          >
            <Link
              href={project.id}
              className="group flex w-full flex-col items-center justify-center gap-4"
            >
              <div
                className={clsx(
                  "relative flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br p-4 dark:from-transparent dark:to-slate-500",
                  // +++ Note: the hidden colour block
                  "before:absolute before:left-0 before:top-0 before:z-[-1] before:flex before:h-full before:w-full before:items-end before:justify-end before:rounded-lg before:px-1 before:text-white before:duration-200 before:content-['✦']",
                  // +++ Note: hidden colour block's gradient bg setting
                  "before:bg-gradient-to-br before:from-50% dark:before:from-transparent",
                  // +++ Note: show the hidden colour block when hover
                  "group-hover:before:left-4 group-hover:before:top-4",
                  project.class,
                )}
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  className={clsx(
                    "drop-shadow-md",
                    // +++ Note: make the image responsive
                    "h-80 w-80 object-scale-down",
                  )}
                />
              </div>

              <div className="flex w-full flex-col items-start justify-center gap-1">
                <h3
                  className={clsx(
                    "text-xl font-bold tracking-wider text-slate-500",
                    // +++ Note: for dark mode
                    "dark:text-white",
                  )}
                >
                  {project.title}
                </h3>

                <p className="text-lg font-thin tracking-wide">
                  {project.text}
                </p>

                <UnderlineText className="self-end">
                  View Project{" "}
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="inline-block h-4 w-4 shrink-0"
                  />
                </UnderlineText>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
