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

export const Projects = () => {
  type ProjectsType = {
    title: string;
    link: string;
    class: string;
    img: StaticImageData;
    text: string;
  };

  const projects: ProjectsType[] = [
    {
      title: "ToGoalx App",
      link: "togoalx_app",
      class: "bg-indigo-50 before:bg-indigo-200",
      img: project_togoalx,
      text: "This app lets users create their achievement record and check on their daily and monthly progress.",
    },
    {
      title: "Task Tracker App",
      link: "task_tracker_app",
      class: "bg-green-50  before:bg-green-200",
      img: project_tracker,
      text: "This app helps users organize and track their tasks.",
    },
    {
      title: "Weather Forecast App",
      link: "weather_forecast_app",
      class: "bg-yellow-50  before:bg-yellow-200",
      img: project_weather,
      text: "An app that shows today's and the future week's weather.",
    },
    {
      title: "Budget App",
      link: "budget_app",
      class: "bg-purple-50  before:bg-purple-200",
      img: project_budget,
      text: "This app helps users manage their budgets and expenses.",
    },
  ];

  return (
    <div className="flex flex-col items-start justify-center gap-10">
      <h2 className={`${nunito.className} text-3xl text-blue-800 md:text-4xl`}>
        Projects
      </h2>

      <div className="flex flex-wrap items-start justify-center gap-y-10">
        {projects.map((project, index) => (
          <div
            className="flex w-full flex-col items-center justify-center md:w-1/2 md:px-5"
            key={index}
          >
            <Link
              href={project.link}
              className="group flex w-full flex-col items-center justify-center gap-4"
            >
              <div
                className={clsx(
                  "relative flex h-full w-full items-center justify-center rounded-lg p-4",
                  // +++ Note: the hidden colour block
                  "before:absolute before:left-0 before:top-0 before:z-[-1] before:flex before:h-full before:w-full before:items-end before:justify-end before:rounded-lg before:px-1 before:text-white before:duration-200 before:content-['✦']",
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
                <h3 className="text-xl font-bold tracking-wider text-slate-500">
                  {project.title}
                </h3>

                <p className="text-lg font-thin tracking-wide">
                  {project.text}
                </p>

                <div className="inline-block self-end tracking-wide">
                  <span
                    className={clsx(
                      "relative inline overflow-hidden not-italic text-blue-600",
                      // +++ Note: the hidden underline
                      "after:absolute after:-bottom-0.5 after:left-0 after:z-[-1] after:h-px after:w-0 after:bg-blue-600 after:duration-200 after:content-['']",
                      // +++ Note: show the hidden underline when hover
                      "group-hover:after:w-full",
                    )}
                  >
                    View Project{" "}
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="h-4 w-4 shrink-0"
                    />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
