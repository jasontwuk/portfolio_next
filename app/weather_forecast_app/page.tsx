import React from "react";
import { StaticImageData } from "next/image";

import { faCode } from "@fortawesome/free-solid-svg-icons";
// import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import project_weather from "../img/projects/project_weather.png";
import project_weather_1 from "../img/projects/project_weather_1.png";
import project_weather_2 from "../img/projects/project_weather_2.png";
import { ProjectTemplate } from "../components/ProjectTemplate";

export const metadata = {
  title: "Weather Forecast App - Jason Liao",
  description: "An app that shows today's and the future week's weather.",
};

function TaskTrackerApp() {
  const title = "Weather Forecast App";

  const id = "weather_forecast_app";

  type LinksType = { href: string; icon: IconDefinition; text: string }[];

  const links: LinksType = [
    {
      href: "https://github.com/jasontwuk/JavaScript-Project_Weather-APP",
      icon: faCode,
      text: "code",
    },
  ];

  const intro: string[] = [
    "Getting weather forecast information should be easy and straightforward, but sometimes that’s not the case with some user interfaces. In this app, users can get the gist of today’s and next week’s weather at a glance. I believe it meets most users' needs.",
    "In this project, I utilised the OpenWeatherMap API to retrieve the latest weather data and the Google Maps API to access geographic data. London is set as the default city, but users can change this to any city they prefer by clicking the edit button and entering their chosen location. The app will display the most recently selected city when reopened.",
  ];

  const technologies: string[] = ["HTML", "CSS", "JavaScript", "Git"];

  const resource: string[] = ["GoogleMap", "OpenWeatherMap", "Npm packages"];

  const imgBgColour: string = "from-yellow-50 to-yellow-200";

  type DetailsType = {
    src: StaticImageData;
    imageAlt: string;
    title: string;
    contents?: string[];
    list?: string[];
  }[];

  const details: DetailsType = [
    {
      src: project_weather,
      imageAlt: "Weather Forecast App image",
      title: "Purpose and Goal",
      contents: [
        "The purpose of this project was to use third-party APIs to build a useful web application. I combined the capabilities of the two APIs to enhance the user experience. My goal was to gain a better understanding of how to utilise third-party APIs effectively.",
      ],
    },
    {
      src: project_weather_1,
      imageAlt: "Weather Forecast App image",
      title: "Challenges and My Approach",
      contents: [
        "To use the functionality of the APIs, I applied for my own API keys and included them in the code. Determining where to place these API keys and how to do so securely was a new topic for me. It also required a method to display third-party data in the app after fetching it through the APIs.",
      ],
    },

    {
      src: project_weather_2,
      imageAlt: "Weather Forecast App image",
      title: "What I’ve learnt",
      contents: [
        "This project helped to solidify my knowledge of utilising third-party APIs, including how to fetch data from them and how to display that data in my app. To secure my OpenWeatherMap API key, I placed it on the server so that no one else has access to it.",
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
