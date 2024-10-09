import React from "react";
import clsx from "clsx";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center justify-center gap-2 text-center">
      <span>
        © 2020 - present&nbsp;
        <Link href="/" className="group no-underline">
          <div className="inline-block">
            <em
              className={clsx(
                "relative inline overflow-hidden not-italic text-blue-600",
                // +++ Note: the hidden underline
                "after:absolute after:-bottom-0.5 after:left-0 after:z-[-1] after:h-px after:w-0 after:bg-blue-600 after:duration-200 after:content-['']",
                // +++ Note: show the hidden underline when hover
                "group-hover:after:w-full",
              )}
            >
              Jason Liao
            </em>
          </div>
        </Link>
        .
      </span>

      <span>All Rights Reserved.</span>
    </footer>
  );
};
