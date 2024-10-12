import React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { nunito } from "../utilities/fonts";
import { icons } from "../utilities/data";

// *** image
import jason from "../img/jason.jpg";

import { UnderlineText } from "./UnderlineText";
import { CodeWithLove } from "./CodeWithLove";

export const Contact = () => {
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
        Contact
      </h2>

      <div className="flex flex-col items-start justify-center gap-5 md:flex-row md:pl-5">
        <div className="flex w-full flex-col items-start justify-center gap-8 md:w-1/2">
          <p className="text-lg font-thin leading-7 tracking-wider md:text-xl md:leading-8">
            Got a question or just want to say hi? Feel free to drop me a
            message. Let’s get the conversation started!
          </p>

          <div className="flex flex-col items-start justify-center gap-4">
            {icons.map((icon) => (
              <Link
                className="group flex items-center justify-start gap-2"
                href={icon.link}
                target="_blank"
                rel="noreferrer"
                key={icon.id}
              >
                <div
                  className={clsx(
                    "rounded-full bg-slate-300 p-1.5 text-base leading-4 text-white duration-200 group-hover:bg-blue-600",
                    // +++ Note: for dark mode
                    "dark:bg-slate-400",
                  )}
                >
                  <FontAwesomeIcon
                    icon={icon.sign}
                    className="block h-4 w-4 shrink-0"
                  />
                </div>

                <UnderlineText>{icon.name}</UnderlineText>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex w-full items-center justify-center md:w-1/2 md:justify-end">
          <div className="relative">
            <Image
              src={jason}
              alt="Jason's photo"
              className="w-full max-w-72 self-end rounded-full"
            />

            <CodeWithLove />
          </div>
        </div>
      </div>
    </div>
  );
};
