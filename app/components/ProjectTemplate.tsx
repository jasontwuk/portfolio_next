import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

import { nunito } from "../utilities/fonts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import { Projects } from "./Projects";

type ProjectTemplateProps = {
  title: string;
  id: string;
  links: { href: string; icon: IconDefinition; text: string }[];
  intro: string[];
  technologies: string[];
  resource: string[];
  imgBgColour: string;
  details: {
    src: StaticImageData;
    imageAlt: string;
    title: string;
    contents?: string[];
    list?: string[];
  }[];
};

export const ProjectTemplate = (props: ProjectTemplateProps) => {
  const {
    title,
    id,
    links,
    intro,
    technologies,
    resource,
    imgBgColour,
    details,
  } = props;

  return (
    <div className="flex flex-col items-start justify-center gap-20">
      {/* Note: Project */}
      <section className="flex flex-col items-start justify-center gap-8">
        {/* Title */}
        <div className="flex w-full flex-wrap items-center justify-between gap-4">
          <div className="flex flex-col items-start justify-center gap-2">
            <span className="rounded-md border border-slate-300 px-2 py-1">
              Project
            </span>

            <h1
              className={`${nunito.className} text-3xl text-blue-800 md:text-4xl`}
            >
              {title}
            </h1>
          </div>

          <div className="flex items-center justify-center gap-2 md:gap-4 md:pl-5">
            {links.map((obj, index) => {
              return (
                <Link
                  href={obj.href}
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                  className="group flex h-16 w-16 flex-col items-center justify-center gap-0 rounded-full bg-blue-100 duration-200 hover:bg-blue-600"
                >
                  <div className="flex items-center justify-center rounded-full bg-white p-1">
                    <FontAwesomeIcon
                      icon={obj.icon}
                      className="block h-3 w-3 shrink-0 text-blue-800 group-hover:text-blue-600"
                    />
                  </div>

                  <span className="text-sm capitalize text-blue-800 group-hover:text-white">
                    {obj.text}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Intro */}
        <div className="flex flex-col items-center justify-center gap-4 md:pl-5">
          {intro.map((item, index) => {
            return (
              <p
                className="text-lg font-thin leading-7 tracking-wider md:text-xl md:leading-8"
                key={index}
              >
                {item}
              </p>
            );
          })}
        </div>

        {/* Technologies and resource */}
        <div className="flex w-full flex-col items-start justify-center gap-8 md:flex-row md:pl-5">
          <div className="flex w-full flex-col items-center justify-center md:w-3/5">
            <h2
              className={`${nunito.className} w-full border-b border-slate-400 py-2 text-center text-xl text-blue-800 md:text-2xl`}
            >
              Used technologies:
            </h2>

            <ul className="flex w-full flex-wrap gap-y-2 px-2 py-4">
              {technologies.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex w-1/2 items-center justify-start gap-1"
                  >
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="block h-4 w-4 shrink-0 text-blue-400"
                    />

                    <span className="font-thin">{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex w-full flex-col items-center justify-center md:w-2/5">
            <h2
              className={`${nunito.className} w-full border-b border-slate-400 py-2 text-center text-xl text-blue-800 md:text-2xl`}
            >
              Used resource:
            </h2>

            <ul className="flex w-full flex-wrap gap-y-2 px-2 py-4">
              {resource.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex w-1/2 items-center justify-start gap-1"
                  >
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="block h-4 w-4 shrink-0 text-blue-400"
                    />

                    <span className="font-thin">{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Details */}
        {details.map((obj, index) => {
          return (
            <div
              className={clsx(
                "flex flex-col gap-8 md:grid md:grid-cols-2 md:flex-row md:pl-5",
              )}
              key={index}
            >
              <div
                className={clsx(
                  // +++ Note: handle change image and contnets order
                  `${index % 2 && "md:order-1"}`,
                  imgBgColour,
                  "flex items-center justify-center rounded-lg p-4",
                )}
              >
                <Image
                  src={obj.src}
                  alt={obj.imageAlt}
                  className={clsx(
                    "drop-shadow-md",
                    // +++ Note: make the image responsive
                    "h-80 w-80 object-scale-down md:h-full",
                  )}
                />
              </div>

              <div className="flex flex-col items-center justify-start gap-4">
                <h2
                  className={`${nunito.className} w-full text-xl text-blue-800 md:text-2xl`}
                >
                  {obj.title}
                </h2>

                {obj.list && (
                  <ul className="ml-5 flex flex-col items-center justify-center gap-2">
                    {obj.list.map((item, i) => {
                      return (
                        <li key={i} className="list-disc">
                          <p className="text-lg font-thin leading-7 tracking-wider md:text-xl md:leading-8">
                            {item}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                )}

                {obj.contents && (
                  <div className="flex flex-col items-center justify-center gap-2">
                    {obj.contents.map((item, index) => {
                      return (
                        <p
                          className="text-lg font-thin leading-7 tracking-wider md:text-xl md:leading-8"
                          key={index}
                        >
                          {item}
                        </p>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </section>

      {/* Note: Other Projects */}
      <Projects id={id} />
    </div>
  );
};