import React from "react";
import Link from "next/link";
import clsx from "clsx";

import { UnderlineText } from "./UnderlineText";

import { Contact } from "./Contact";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-20">
      <Contact />

      <div className="flex flex-wrap items-center justify-center gap-2 text-center tracking-wide">
        <span>
          © 2020 - present&nbsp;
          <Link
            href="/"
            className={clsx(
              "group no-underline",
              // +++ Note: focus-visible
              "focus-visible:rounded-full focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-yellow-300 dark:focus-visible:outline-yellow-100",
            )}
          >
            <UnderlineText>Jason Liao</UnderlineText>
          </Link>
          .
        </span>

        <span>All Rights Reserved.</span>
      </div>
    </footer>
  );
};
