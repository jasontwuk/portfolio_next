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
      text: "This app helps users organise and track their tasks.",
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

      <div className="flex flex-wrap items-start justify-center gap-x-10 gap-y-10 md:pl-5">
        {projects.map((project, index) => (
          <div
            className="flex w-full flex-col items-center justify-center md:w-[calc(50%-1.25rem)]"
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
